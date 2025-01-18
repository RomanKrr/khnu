import '../pageStyles/SignUP.css'
import { Link } from 'react-router-dom';
import WelcomeSign from '../components/WelcomeSign/WelcomeSign';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';

const SignUP = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const {signUp, isSigningUp} = useAuthStore();

    const validateForm = () => {
        if(!formData.fullName.trim) return toast.error("Ім'я обов'язкове!");
        if(!formData.email.trim) return toast.error("Пошта обов'язкова!");
        if(!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Неправильна пошта!");
        if(!formData.password.trim) return toast.error("Пароль обов'язковий!");
        if(formData.password.length < 6) return toast.error("Пароль повинен мати не менше 6 символів");

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = validateForm();

        if(success  == true){
            signUp(formData);
        }
    }
    return (
        <div className="form-container">
            <WelcomeSign />
            <form className="form" onSubmit={handleSubmit}>
                <h2>Створіть акаунт</h2>
                <label>
                    Піб:
                    <input
                        type="text"
                        placeholder="Введіть ваше ім'я"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                     />
                </label>
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
            <p>Вже маєте акаунт? <Link to="/login">Увійти</Link></p>
        </div>
    )
}

export default SignUP