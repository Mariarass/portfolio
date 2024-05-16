import React from 'react';
import s from './MyExperience.module.css'
const MyExperience = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h3>
                    My experience
                </h3>
                <div>
                    <p>
                        Frontend developer  | Vue/React/Electron/Vuex/RTK June 2023 – Present
                    </p>
                    <p>
                        • Developed functionality leveraging artificial intelligence to provide data on suitable partners for interaction.<br/>
                        • Development of a chatbot based on artificial intelligence that facilitates communication and interaction with friends
                        in the gaming community in real time.<br/>
                        • Developed voice and text chats for the gaming communit<br/>
                    </p>

                </div>
                <div>
                    <p>
                        Frontend developer | Vue/Vuex/QraphQL December 2022 – June 2023
                    </p>
                    <p>
                        • Development of front-end components for web applications using JavaScript, Vue.js.<br/>
                        • Participation in the development of product architecture.<br/>
                        • I developed additional functionality (booking, shopping cart, ordering, likes for users, product search and much
                        more<br/>
                        • Worked with Mapbox maps
                    </p>

                </div>
                <div>
                    <p>
                        Frontend developer | Next JS/TS/RTK September 2022 – December 2022
                    </p>
                    <p>
                        • Developed authentication functionality for the application, ensuring secure user access to personal data.<br/>
                        • Created a system for creating and managing user profiles, including the ability to add personal information and
                        images.<br/>
                        • Implemented functionality for creating and publishing posts, allowing users to share content with other network
                        participants.<br/>

                    </p>
                </div>
                <div>
                    <p>
                        QA ENGINEER July 2021 – December 2021
                    </p>
                    <p>
                        • Manual and automatic testing of the software product. Using the selenium library in Python.<br/>
                    </p>

                </div>



            </div>

        </div>
    );
};

export default MyExperience;
