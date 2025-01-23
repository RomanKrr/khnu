import { useAuthStore } from "../store/useAuthStore";

const Portfolio = () => {
    const {authUser} = useAuthStore();
    return (
        <h3>Формування порфоліо для {authUser?.fullName} ти безробітній(</h3>
    );
}

export default Portfolio;