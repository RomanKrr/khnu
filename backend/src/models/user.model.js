import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlenght: 6,
        },
        profilePic: {
            type: String,
            default: "",
        },
        gradeBookId: {
            type: Number,
            unique: true,
        },
        facultyName: {
            type: String,
        },
        department: {
            type: String,
        },
        group: {
            type: String,
        },
        course: {
            type: Number,
        },
        subjects: [
            {
                name: {
                    type: String,
                },
                marks: [
                    {
                        type: Number,
                    }
                ]
            }
        ]
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;