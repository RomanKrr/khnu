import JournalInfo from "../components/JournalInfo/JournalInfo";
import JournalTable from "../components/JournalTable/JournalTable";
// import Navigation from "../components/Navigation/Navigation";

const Journal = () => {
    return (  
        <section className="journal-page">
            {/* <Navigation/> */}
            <JournalInfo/>
            <JournalTable/>
            <div className="journal_explaining">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni id aperiam soluta numquam nemo laboriosam eligendi architecto dicta ad itaque officia, sint nihil, culpa impedit aspernatur placeat aliquid illum? Iusto repellat nisi labore eveniet sunt molestiae voluptas, aut ab. Dolores accusantium officiis quisquam id veniam repellendus temporibus illo minus culpa, quam sapiente distinctio fugiat, vero saepe deserunt debitis deleniti necessitatibus ducimus placeat voluptates recusandae qui architecto! Deserunt aut perspiciatis vero quisquam expedita ipsam eaque sed ut veritatis inventore ipsum blanditiis ducimus ratione eveniet iure, ea voluptatibus enim totam neque cupiditate nostrum, quod doloremque, consectetur laborum? Aspernatur voluptatibus cum voluptates mollitia magnam debitis expedita tempore soluta iusto quod, harum veniam corporis est fugiat tempora architecto adipisci exercitationem nam itaque. Molestiae, facilis!</p>
            </div>
        </section>
    );
}
 
export default Journal;