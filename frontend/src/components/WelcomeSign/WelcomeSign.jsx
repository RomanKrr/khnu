import welcome_logo from '../../assets/logo-of-khnu-variants-01_0001_sloj-1.png';
import '../WelcomeSign/WelcomeSign.css';

const WelcomeSign = () => {
    return (
        <div className='welcome'>
            <img src={welcome_logo} alt="хну" className='welcome_logo' />
            <div className='header_name'>
                <h1>ХНУ</h1>
                <h3>електронний журнал</h3>
            </div>
        </div>
    )
}

export default WelcomeSign