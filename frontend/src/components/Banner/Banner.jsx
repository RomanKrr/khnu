import '../Banner/Banner.css';
import DepartmentLogo from '../../assets/kiis.png';
import { useAuthStore } from '../../store/useAuthStore';

const Banner = () => {
    const {authUser} = useAuthStore();

    return (
        <section className='banner'>
            <div className="banner_container">
                <div className="banner_logo">
                    <img src={DepartmentLogo} alt="" />
                </div>
                <div className="banner_info">
                    <h2 className='department_name'>{authUser?.facultyName}</h2>
                    <h4 className='specialty_name'>{authUser?.department}</h4>
                </div>
            </div>
        </section>
    );
}
 
export default Banner;