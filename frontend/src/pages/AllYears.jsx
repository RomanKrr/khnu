// import Navigation from "../components/Navigation/Navigation";
import YearSection from "../components/YearSection/YearSection";
import '../pageStyles/Journal.css'

const AllYears = () => {
    return (
        <section className="journal-page">
            {/* <Navigation /> */}
            <h2 className="journal_header">Вибіркові навчального року</h2>
            <div className="year-sections">
                <YearSection />
                <YearSection />
                <YearSection />
                <YearSection />
            </div>
        </section>
    );
}

export default AllYears;