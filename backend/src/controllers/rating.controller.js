import User from "../models/user.model.js";

export const getRating = async (req, res) => {
    try {
        const loggedInUserId  = req.user._id;

        const allUsers = await User.find({
            course: req.user.course,
            department: req.user.department 
        });
        res.status(200).json(allUsers);

    } catch (error) {
        console.error("Error in getRating", error);
        res.status(500).json({ message: "Server error" });
    }
}

export const getMarks = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}