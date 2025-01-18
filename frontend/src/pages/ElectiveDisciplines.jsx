import Table from 'react-bootstrap/Table';

const ElectiveDisciplines = () => {
    return (
        <section className="elective-page">
            <div className="elective-container">
                <h2>
                    Вибір навчального року та семестру
                </h2>
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th colSpan="3"></th>
                            <th>Навчальний рік</th>
                            <th>Семестр</th>
                            <th>
                                Кількість вибіркових
                                кредитів за планом
                            </th>
                            <th>
                                Кількість кредитів
                                обраних студентом
                            </th>
                            <th>
                                Кількість кредитів
                                затвердж. деканатом
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Рекомендовані</td>
                            <td>усі</td>
                            <td>Вже обрані</td>
                        </tr>
                        <tr>
                            <td>Рекомендовані</td>
                            <td>усі</td>
                            <td>Вже обрані</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Вже обрані</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Вже обрані</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    );
}

export default ElectiveDisciplines; 