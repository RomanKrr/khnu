import { Accordion } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import { LuSquareChartGantt } from "react-icons/lu";
import '../Main/Main.css';

import { IoMdTime } from "react-icons/io";
const Main = () => {
    return (
        <section className='main'>
            <div className="main_container">
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0" className='accordion_item'>
                        <Accordion.Header>
                            <div className="accordion_container">
                                <h2>Навчальний процес</h2>
                                <div className="accordion_icon">
                                    <LuSquareChartGantt />
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <nav className="accordion_navbar">
                                <ul className="accordion_links">
                                        <Link to="/allYears">
                                            <li>Електронний журнал</li>
                                        </Link>
                                    <Link to="/electiveDisciplines">
                                        <li>Вибіркові дисципліни</li>
                                    </Link>
                                    <Link to="/ratingOfSpecialties">
                                        <li>Рейтинг на спеціальності</li>
                                    </Link>
                                </ul>
                            </nav>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion >
                    <Accordion.Item eventKey="1" className='accordion_item'>
                        <Accordion.Header>
                            <div className="accordion_container">
                                <h2>Розклад</h2>
                                <div className="accordion_icon">
                                    <IoMdTime />
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <nav className="accordion_navbar">
                                <ul className="accordion_links">
                                    <Link to="/ScheduleByGroups">
                                        <li>По групах</li>
                                    </Link>
                                    <Link to="/ScheduleByTeachers">
                                        <li>По викладачах</li>
                                    </Link>
                                </ul>
                            </nav>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section >
    );
}

export default Main;