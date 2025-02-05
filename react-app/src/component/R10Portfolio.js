import React from 'react'
import styles from './R10Portfolio.module.css'

function R10Portfolio() {
    return (
        <>
            <header>
                <nav>
                <ul>
                    <li>
                    <a href="#about">About</a>
                    </li>
                    <li>
                    <a href="#projects">Projects</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                </ul>
                </nav>
                <h1>Hi, I am a React Web Developer</h1>
                <p>Building dynamic and interactive web experiences</p>
            </header>
            <main>
                <section id="about">
                <h2>About Me</h2>
                <p>
                    Hi, I'm [Your Name], a passionate React web developer with experience in
                    creating modern, responsive web applications. I enjoy turning ideas into
                    reality using cutting-edge technologies and best practices.
                </p>
                </section>
                <section id="projects">
                <h2>Projects</h2>
                <div className={styles.projectCard}>
                    <h3>Project One</h3>
                    <p>
                    A brief description of your project goes here. It can include the
                    technologies used, features, and your role in the project.
                    </p>
                </div>
                <div className={styles.projectCard}>
                    <h3>Project Two</h3>
                    <p>
                    A brief description of your project goes here. It can include the
                    technologies used, features, and your role in the project.
                    </p>
                </div>
                </section>
                <section id="contact">
                <h2>Contact</h2>
                <p>
                    Feel free to get in touch via email at
                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                </p>
                </section>
            </main>
            <footer>
                <p>© 2025 [Your Name]. All rights reserved.</p>
            </footer>
        </>

    )
}

export default R10Portfolio