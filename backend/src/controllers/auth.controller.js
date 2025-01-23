import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    const { fullName, email, password, profilePic, gradeBookId, facultyName, department, group, course, subjects} = req.body;
    try {
        // if (!fullName || !email || !password || !gradeBookId || !facultyName || !department || !group || !course) {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: "Всі поля повинні бути заповнені" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Пароль повинен мати 6 символів" })
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "Користувач вже існує" });
        }

        const userWithGradeBookId = await User.findOne({ gradeBookId });
        if (userWithGradeBookId) {
            return res.status(400).json({ message: "Користувач з таким номером залікової книжки вже існує" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
            profilePic: profilePic || "",
            gradeBookId,
            facultyName,
            department,
            group,
            course,
            subjects: subjects || []
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
                subjects: newUser.subjects,
            });
        } else {
            res.status(400).json({ message: "Invalid data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Server error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Всі поля повинні бути заповнені" })
        }
        if (password.length < 6) {
            return res.status(400).json({ message: "Пароль повинен мати 6 символів" })
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "invalid credentials" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "invalid credentials" })
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
            gradeBookId: user.gradeBookId,
            facultyName: user.facultyName,
            department: user.department,
            group: user.group,
            course: user.course,
        })
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Server чому" })
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logout successfully" })
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Server чому" })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { profilePic } = req.body;
        const userId = req.user._id;

        if (!profilePic) {
            res.status(400).json({ message: "Profile picture is required" })
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic)
        const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true })

        res.status(200).json(updatedUser)

    } catch (error) {
        console.log("Error in update profile", error);
        res.status(500).json({ message: "Server error" })
    }
}

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({ message: "Server error" });
    }
}