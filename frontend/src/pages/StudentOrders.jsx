import Table from 'react-bootstrap/Table';

const StudentOrders = () => {
    return (
        <section>
            <h1>Досягнення студента (вводяться куратором)</h1>
            <Table bordered responsive className="work-experience-table">
                <thead>
                    <tr>
                        <th rowSpan={2}></th>
                        <th rowSpan={2}>Код</th>
                        <th rowSpan={2}>Діє</th>
                        <th rowSpan={2}>Факультет</th>
                        <th rowSpan={2}>Спеціальність</th>
                        <th rowSpan={2}>Група</th>
                        <th rowSpan={2}>Курс</th>
                        <th rowSpan={2}>Фін. форма</th>
                        <th colSpan={4} style={{ textAlign: 'center'}}>Наказ</th>
                    </tr>
                    <tr>
                        <th>N</th>
                        <th>Від</th>
                        <th>Категорія</th>
                        <th>Підрозділ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                       <td></td>
                       <td>125906</td>
                       <td>01.09.2023</td>
                       <td>Факультет інформаційних технологій</td>
                       <td>Комп'ютерна інженерія</td>
                       <td>КІ2-23-1</td>
                       <td>1</td>
                       <td>Бюджет</td>
                       <td>160-с</td>
                       <td>08.08.2023</td>
                       <td>Зарахування</td>
                       <td>Відділ кадрів</td>
                    </tr>
                    <tr>
                       <td></td>
                       <td>125906</td>
                       <td>04.09.2023</td>
                       <td>Факультет інформаційних технологій</td>
                       <td>Комп'ютерна інженерія</td>
                       <td>КІ2-23-3</td>
                       <td>1</td>
                       <td>Бюджет</td>
                       <td>1-с</td>
                       <td>04.09.2023</td>
                       <td>Переведення з групи в групу</td>
                       <td>Факультет інформаційних технологій</td>
                    </tr>
                    <tr>
                       <td></td>
                       <td>125906</td>
                       <td>30.06.2024</td>
                       <td>Факультет інформаційних технологій</td>
                       <td>Комп'ютерна інженерія</td>
                       <td>КІ2-23-3</td>
                       <td>1</td>
                       <td>Бюджет</td>
                       <td>124-с</td>
                       <td>30.06.2024</td>
                       <td>Переведення на інший курс</td>
                       <td>Факультет інформаційних технологій</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default StudentOrders