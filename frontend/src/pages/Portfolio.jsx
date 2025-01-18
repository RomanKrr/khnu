import { useAuthStore } from "../store/useAuthStore";

const Portfolio = () => {
    const {authUser} = useAuthStore();
    return (
        <h3>Формування порфоліо для {authUser?.fullName}</h3>
    );
}

export default Portfolio;