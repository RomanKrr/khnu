import '../StudentDocs/StudentDocs.css';

import { Link } from 'react-router-dom';

const StudentDocs = () => {
    return (
        <div className="docs_navigation">
            <div className="docs_container">
                <Link to="/studentOrders">
                    <p>Накази</p>
                </Link>
                <Link to="/documents">
                    <p>Документи</p>
                </Link>
                <Link to="/workExperience">
                    <p>Досвід роботи</p>
                </Link>
            </div>
        </div>
    );
}

export default StudentDocs;