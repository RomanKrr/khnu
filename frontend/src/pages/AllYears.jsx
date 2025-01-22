// import Navigation from "../components/Navigation/Navigation";
import YearSection from "../components/YearSection/YearSection";
import '../pageStyles/Journal.css'
import { useAuthStore } from "../store/useAuthStore";

const AllYears = () => {
    const { authUser } = useAuthStore();

    const courseCount = authUser?.course;

    return (
        <section className="journal-page">

            <h2 className="journal_header">Вибіркові навчального року</h2>
            <div className="year-sections">
                {Array.from({ length: courseCount }, (_, index) => (
                    <YearSection key={index} />
                ))}
            </div>
        </section>
    );
}

export default AllYears;