import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import '../ListOfJournalsTable/ListOfJournalsTable.css';

const ListOfJournalsTable = () => {
    return (
        <Table bordered responsive className="journals-section table">
            <thead>
                <tr>
                    <th>Дисципліна</th>
                    <th>Кафедра</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='pointer-cell'>
                        <Link to="/journal">
                            <p>Англійська мова професійного спрямування (12 Інформаційні технології) (3,4 семестр)</p>
                        </Link>
                    </td>
                    <td> Кафедра іноземних мов</td>
                </tr>
                <tr>
                    <td className='pointer-cell'>
                        <Link to="/journal">
                            <p>Комп'ютерна логіка</p>
                        </Link>
                    </td>
                    <td>Кафедра комп'ютерної інформаційних систем</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ListOfJournalsTable;