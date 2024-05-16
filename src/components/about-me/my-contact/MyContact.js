import React from 'react';
import s from "./MyContact.module.css";
import avatar from '../../../assets/avatar.png'

const MyContact = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>
                    About me
                </h3>
                <div>
                    Hello, I'm a front-end developer with 2.5 years of experience, I use Vue and React in my work
                </div>
                <div>
                    <img src={avatar}/>
                </div>
                <div>
                    You can contact me
                </div>
                <div>
                    <p>cv</p>
                    <p>email</p>
                    <p>github</p>
                    <p>link</p>
                    <p>whats app</p>

                </div>
            </div>
        </div>
    );
};

export default MyContact;
