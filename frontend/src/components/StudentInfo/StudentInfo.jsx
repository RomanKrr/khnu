import '../StudentInfo/StudentInfo.css';
import profileImg from '../../assets/094963.jpg';
import { useAuthStore } from '../../store/useAuthStore';
import { useState } from 'react';
import some from "../../assets/avatar.jpg"

import { RxAvatar } from "react-icons/rx";
import { CiCamera } from "react-icons/ci";

const StudentInfo = () => {
    const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
    const [selectedImg, setSelectedImg] = useState(null);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader()

        reader.readAsDataURL(file);
        reader.onload = async () => {
            const base64 = reader.result;
            setSelectedImg(base64);
            await updateProfile({ profilePic: base64 })
        }
    }


    return (
        <div className="student">
            <div className="student_container">
                <div className="student_image">
                    <img src={selectedImg || authUser?.profilePic} alt="avatar" />
                    {!(selectedImg || authUser?.profilePic) && <RxAvatar style={{ fontSize: "50px", color: "gray" }} />}
                    <label className="camera_button">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <CiCamera className="camera_icon" />
                    </label>
                </div>
                <div className="student_info">
                    <h2 className="student_pib">{authUser?.fullName}</h2>
                    <div className="student_birthday">26.03.2006</div>
                    <p className="student_label">номер залікової книжки:</p>
                    <p className="id-book">{authUser?.gradeBookId}</p>
                </div>
            </div>
        </div>
    );
}

export default StudentInfo;