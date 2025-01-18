import Table from 'react-bootstrap/Table';

const WorkExperience = () => {
    return (
        <section>
            <h1>Досвід роботи</h1>
            <Table bordered responsive className="work-experience-table">
                <thead>
                    <tr>
                        <th>Початок роботи</th>
                        <th>Завершення роботи</th>
                        <th>Місце роботи</th>
                        <th>Посада</th>
                        <th>Посадові обов’язки</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={5} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                            Записи: (не знайдено)
                        </td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default WorkExperience