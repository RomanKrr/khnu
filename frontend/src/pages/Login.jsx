import { Link } from 'react-router-dom';
import WelcomeSign from '../components/WelcomeSign/WelcomeSign';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import '../pageStyles/signUp.css'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { login, isLogginingIn } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    }
    return (
        <div className="form-container">
            <WelcomeSign />
            <form className="form" onSubmit={handleSubmit}>
                <h2>Увійдіть в акаунт</h2>
                <label>
                    Електронна пошта:
                    <input
                        type="email"
                        placeholder="Введіть вашу пошту"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </label>
                <label>
                    Пароль:
                    <input
                        type="password"
                        placeholder="Введіть ваш пароль"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </label>
                <button type="submit">Відправити</button>
            </form>
            <p>Ще не маєте акаунта? <Link to="/signUP">Створіть</Link></p>
        </div>
    )
}

export default Login