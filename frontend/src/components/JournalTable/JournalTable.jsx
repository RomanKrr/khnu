import Table from 'react-bootstrap/Table';
import '../JournalTable/JournalTable.css';

const JournalTable = () => {
    return (
        <div className="journal-section">
            <Table bordered responsive className="journal-table">
                <thead>
                    <tr>
                        <th rowSpan="3">№</th>
                        <th rowSpan="3">Студенти</th>
                        <th>Вересень</th>
                        <th>Жовтень</th>
                        <th>Листопад</th>
                        <th>Грудень</th>
                    </tr>
                    <tr>
                        <th>дати</th>
                        <th>дати</th>
                        <th>дати</th>
                        <th>дати</th>
                    </tr>
                    <tr>
                        <th>ЗПР</th>
                        <th>КТ</th>
                        <th>ТСТ</th>
                        <th>КП</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Кучер Роман Андрійович</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">4</td>
                        <td className="pointer-cell">4</td>
                        <td className="pointer-cell">5</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td className="pointer-cell">Семененко Владислав Сергійович</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">4</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">4</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td className="pointer-cell">Наумов Андрій Сергійович</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">5</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td className="pointer-cell">Хапко Олександр Володимирович</td>
                        <td className="pointer-cell">2</td>
                        <td className="pointer-cell">2</td>
                        <td className="pointer-cell">2</td>
                        <td className="pointer-cell">2</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td className="pointer-cell">Лещук Михайло Іванович</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">5</td>
                        <td className="pointer-cell">5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td className="pointer-cell">Гаврилюк Владислав Дмитрович</td>
                        <td className="pointer-cell">3</td>
                        <td className="pointer-cell">3</td>
                        <td className="pointer-cell">3</td>
                        <td className="pointer-cell">3</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default JournalTable;