import NotificationNav from "../components/NotificationNav/NotificationNav";
import "../pageStyles/Notification.css"

const NotificationCenter = () => {
    return (
        <section className="notification-center-page">
            <div className="notification_container">
                <NotificationNav/>
                <div className="notification_toggle">
                    <div className="toggle_container">
                        <p>Увімкнути повідомлення</p>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotificationCenter;