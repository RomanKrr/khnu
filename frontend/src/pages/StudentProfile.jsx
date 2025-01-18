// import Navigation from '../components/Navigation/Navigation'
import StudentDocs from '../components/StudentDocs/StudentDocs';
import StudentInfo from'../components/StudentInfo/StudentInfo'

const StudentProfile = () => {
    return (
        <section className="student-profile-page">
            {/* <Navigation/> */}
            <StudentInfo/>
            <StudentDocs/>
        </section>
    );
}
 
export default StudentProfile;