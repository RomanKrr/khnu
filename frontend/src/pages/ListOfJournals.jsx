import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import ListOfJournalsTable from '../components/ListOfJournalsTable/ListOfJournalsTable';
// import Navigation from '../components/Navigation/Navigation';

const ListOfJournals = () => {
    return (
        <section className='journals-list-page'>
            {/* <Navigation/> */}
            <ListOfJournalsTable />
        </section>
    );
}

export default ListOfJournals;