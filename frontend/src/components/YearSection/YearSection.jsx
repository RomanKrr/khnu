import Table from 'react-bootstrap/Table';
import '../YearSection/YearSection.css';

import { Link } from 'react-router-dom';

const YearSection = () => {
    return (
        <Table bordered responsive className="year-section table">
            <thead>
                <tr>
                    <th>Рік</th>
                    <th>Семестр</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={2}>2023-2024</td>
                    <td>1</td>
                    <td className="pointer-cell">
                        <Link to="/listOfJournals">
                            <p>журнали</p>
                        </Link>
                    </td>
                    <td className="pointer-cell">атестації</td>
                    <td className="pointer-cell">види занять</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td className="pointer-cell">
                        <Link to="/listOfJournals">
                            <p>журнали</p>
                        </Link>
                    </td>
                    <td className="pointer-cell">атестації</td>
                    <td className="pointer-cell">види занять</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default YearSection;