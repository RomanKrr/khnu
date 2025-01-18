import Table from 'react-bootstrap/Table';
import "../pageStyles/ScheduleBy.css"

const ScheduleByGroups = () => {
    return (
        <section className='scheduleBy'>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Навчальний рік</th>
                        <th>Семестр</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Факультети</td>
                        <td>2024-2025</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2024-2025</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2023-2024</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2023-2024</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2022-2023</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2022-2023</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2021-2022</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Факультети</td>
                        <td>2021-2022</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </Table>
        </section>
    );
}

export default ScheduleByGroups;