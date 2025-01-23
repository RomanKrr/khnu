import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

const RatingOfSpecialties = () => {
    const { fetchRatingUsers, ratingUsers } = useAuthStore();

    useEffect(() => {
        fetchRatingUsers();
    }, []);

    return (
        <div>
            <h1>Рейтинг на спеціальності</h1>
            {/* {isFetchingRating && <p>Завантаження...</p>} */}
            
            {ratingUsers.length > 0 ? (
                <ul>
                    {ratingUsers.map((user) => (
                        <li key={user._id}>
                            {user.fullName} - {user.course} курс, {user.department}
                        </li>
                    ))}
                </ul>
            ) : (
                // !isFetchingRating && <p>Немає користувачів для цього курсу</p>
                <p>Немає користувачів для цього курсу</p>
            )}
        </div>
    );
};

export default RatingOfSpecialties;
