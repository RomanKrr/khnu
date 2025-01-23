import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";
import Table from 'react-bootstrap/Table';

const RatingOfSpecialties = () => {
    const { fetchRatingUsers, ratingUsers } = useAuthStore();

    useEffect(() => {
        fetchRatingUsers();
    }, []);

    const getAverageMarks = (subjects) => {
        let totalMarks = 0;
        let totalSubjects = 0;

        subjects.forEach(subject => {
            totalMarks += subject.marks.reduce((sum, mark) => sum + mark, 0);
            totalSubjects += subject.marks.length;
        });

        return (totalMarks / totalSubjects).toFixed(4);
    };

    const sortUsersByRating = (users) => {
        return users.sort((a, b) => {
            const averageMarksA = getAverageMarks(a.subjects);
            const averageMarksB = getAverageMarks(b.subjects);
            return averageMarksB - averageMarksA;
        });
    };

    const sortedRatingUsers = sortUsersByRating(ratingUsers);
    return (
        <div>
            <h1>Рейтинг на спеціальності</h1>
            <Table bordered responsive className="rating-table">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Рейтинг</th>
                        <th>Студент</th>
                        <th>Спеціальність</th>
                        <th>Група</th>
                        <th>Сума кредитів</th>
                        <th>Сума годин</th>
                    </tr>
                </thead>
                <tbody>
                    {ratingUsers.length > 0 ? (
                        sortedRatingUsers.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{getAverageMarks(user.subjects)}</td>
                                <td>{user.fullName}</td>
                                <td>{user.department}</td>
                                <td>{user.group}</td>
                                <td>{user.totalCredits}</td>
                                <td>{user.totalHours}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">Немає користувачів для цього курсу</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default RatingOfSpecialties;
