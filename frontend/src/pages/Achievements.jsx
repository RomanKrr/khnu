import Table from 'react-bootstrap/Table';

const Achievements = () => {
    return (
        <section>
            <h1>Досягення студента (вводяться куратором)</h1>
            <Table bordered responsive className="work-experience-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>N</th>
                        <th>Категорія</th>
                        <th>Зміст</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td colSpan={5} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                            {/* Записи: (не знайдено) */}
                            Немає досягнень, ти неміч
                        </td>
                    </tr>
                </tbody>
            </Table>
        </section>
    );
}

export default Achievements;