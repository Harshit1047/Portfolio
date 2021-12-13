import React from 'react'
import Typical from 'react-typical'
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <a href='https://www.linkedin.com/in/harshit-pratap-singh-36258a1b1/'>
                            <i class="fa fa-linkedin-square"></i>
                        </a>
                        <a href='harshit79055@gmail.com'>
                            <i class="fa fa-google"></i>
                        </a>
                        <a href='https://github.com/Harshit1047'>
                            <i class="fa fa-github" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Harshit</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Full Stack Web Developer",
                                    1000,
                                    "Java Developer",
                                    1000,
                                    "MERN Stack Developer",
                                    1000,

                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Creating servers and databases for functionality.

                            </span>
                        </span>
                    </div>
                    <div className='profile-optins'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href="Resume.pdf" download='Harshit Resume.pdf'>
                        <button className='btn high'>Get Resume</button></a>
                   
                    </div>
                </div>
            </div>
        </div>
    )
}