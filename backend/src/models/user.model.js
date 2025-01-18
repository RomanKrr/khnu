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
            required: true,
            unique: true,
        },
        facultyName: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        group: {
            type: String,
            required: true,
        },
        course: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;