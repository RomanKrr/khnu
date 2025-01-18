import Table from 'react-bootstrap/Table';

const IndividualStudyPlan = () => {
    return (
        <section>
            <h3>1 курс</h3>
            <Table bordered responsive className="study-plan-table">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Дисципліна</th>
                        <th>Тип дисц.</th>
                        <th>Кафедра</th>
                        <th>Вид контролю</th>
                        <th>Кредити</th>
                        <th>Кількість годин</th>
                        <th>CPC</th>
                        <th>Бали</th>
                        <th>ECTS</th>
                        <th>Оцінка</th>
                        <th>Дата</th>
                        <th>№ відомості</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example rows based on the image data */}
                    <tr>
                        <td>MCH</td>
                        <td>Вища математика</td>
                        <td>Звичайна</td>
                        <td>Кафедра вищої математики і комп'ютерних застосувань</td>
                        <td>іспит</td>
                        <td>7.00</td>
                        <td>210</td>
                        <td>108</td>
                        <td>4.21</td>
                        <td>C</td>
                        <td>4</td>
                        <td>16.01.2024</td>
                        <td>24/007</td>
                    </tr>
                    <tr>
                        <td>MCH</td>
                        <td>Дискретна математика</td>
                        <td>Звичайна</td>
                        <td>Кафедра комп'ютерної інженерії та інформаційних систем</td>
                        <td>іспит</td>
                        <td>5.00</td>
                        <td>150</td>
                        <td>82</td>
                        <td>4.80</td>
                        <td>A</td>
                        <td>5</td>
                        <td>11.01.2024</td>
                        <td>24/008</td>
                    </tr>
                    <tr>
                        <td>MCH</td>
                        <td>Програмування</td>
                        <td>Звичайна</td>
                        <td>Кафедра комп'ютерної інженерії та інформаційних систем</td>
                        <td>іспит</td>
                        <td>6.00</td>
                        <td>180</td>
                        <td>121</td>
                        <td>4.90</td>
                        <td>A</td>
                        <td>5</td>
                        <td>23.01.2024</td>
                        <td>24/009</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </Table>
            <h3>2 курс</h3>
            <Table bordered responsive className="study-plan-table">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Дисципліна</th>
                        <th>Тип дисц.</th>
                        <th>Кафедра</th>
                        <th>Вид контролю</th>
                        <th>Кредити</th>
                        <th>Кількість годин</th>
                        <th>CPC</th>
                        <th>Бали</th>
                        <th>ECTS</th>
                        <th>Оцінка</th>
                        <th>Дата</th>
                        <th>№ відомості</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Example rows based on the image data */}
                    <tr>
                        <td>MCH</td>
                        <td>Вища математика</td>
                        <td>Звичайна</td>
                        <td>Кафедра вищої математики і комп'ютерних застосувань</td>
                        <td>іспит</td>
                        <td>7.00</td>
                        <td>210</td>
                        <td>108</td>
                        <td>4.21</td>
                        <td>C</td>
                        <td>4</td>
                        <td>16.01.2024</td>
                        <td>24/007</td>
                    </tr>
                    <tr>
                        <td>MCH</td>
                        <td>Дискретна математика</td>
                        <td>Звичайна</td>
                        <td>Кафедра комп'ютерної інженерії та інформаційних систем</td>
                        <td>іспит</td>
                        <td>5.00</td>
                        <td>150</td>
                        <td>82</td>
                        <td>4.80</td>
                        <td>A</td>
                        <td>5</td>
                        <td>11.01.2024</td>
                        <td>24/008</td>
                    </tr>
                    <tr>
                        <td>MCH</td>
                        <td>Програмування</td>
                        <td>Звичайна</td>
                        <td>Кафедра комп'ютерної інженерії та інформаційних систем</td>
                        <td>іспит</td>
                        <td>6.00</td>
                        <td>180</td>
                        <td>121</td>
                        <td>4.90</td>
                        <td>A</td>
                        <td>5</td>
                        <td>23.01.2024</td>
                        <td>24/009</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </Table>
        </section>
    );
}

export default IndividualStudyPlan;