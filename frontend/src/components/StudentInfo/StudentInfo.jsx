import '../StudentInfo/StudentInfo.css';
import profileImg from '../../assets/094963.jpg';
import { useAuthStore } from '../../store/useAuthStore';

const StudentInfo = () => {
    const {authUser, isUpdatingProfile, updateProfile } = useAuthStore();

    return (
        <div className="student">
            <div className="student_container">
                <div className="student_image">
                    <img src={profileImg} alt="" />
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