import { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import '../Message/Message.css';
import { useAuthStore } from '../../store/useAuthStore';
import addNotification from 'react-push-notification';

const Message = () => {
    const {authUser} = useAuthStore();

    const handleNotification = () => {
        addNotification({
          title: 'New Grade Added',
          message: 'A new grade has been added to your subject.',
          theme: 'darkblue',
          native: true
        });
      };
      
      useEffect(() => {
        if (authUser.subjects) {
            authUser.subjects.forEach(subject => {
                if (subject.marks.length > 0) {
                    const latestMark = subject.marks[subject.marks.length - 1];
                    handleNotification(subject.name, latestMark);
                }
            });
        }
    }, [authUser.subjects]);

    return (
        <div className='message'>
            <div className="message_container">
                <p className="subjectName">
                    {authUser.subjects && authUser.subjects.length > 0 ? authUser.subjects[0].name : 'Англійська мова'}
                </p>
                <h3 className="message_text">
                    {authUser.subjects && authUser.subjects.length > 0 ? `Нова оцінка: ${authUser.subjects[0].marks[authUser.subjects[0].marks.length - 1]}` : 'Нова оцінка: 2'}
                </h3>
                <RxCross2 className='cross' />
                <p className="date">
                    17.01.2024
                </p>
            </div>
        </div>
    );
};

export default Message;