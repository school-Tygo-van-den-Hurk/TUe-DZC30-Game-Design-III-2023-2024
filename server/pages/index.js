import Head from 'next/head';
import styles from '../styles/css/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Pirates of the Caribbean: At Campus' End</title>
                <meta charset="UTF-8" />
                <meta name="darkreader-lock" />
                <meta name="author" content="Tygo van den Hurk" /> 
                {/* Feel free to add yourself to the list. */}
                <meta name="description" content="Solve the puzzle, find the treasure, get the price!"  />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="icon.responsive.svg" />
                <link rel="apple-touch-icon" href="icon.responsive.svg" />
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" />
            </Head>
            <main id={styles["main-content"]}>
                <section id="Pirates-of-the-Caribbean-At-Campus-End">
                    <img id={"site-icon"} src="/icon.responsive.svg" />
                    <h1 id={styles["main-title"]}> 
                        Pirates of the Caribbean: At Campus' End
                    </h1>
                    <p>
                        This is some text bla bla bla bla
                    </p>
                </section>
                <section id={"introduction"}>
                    <h2>introduction</h2>
                    <p>
                        In this part, we'll desribe how to play the game
                    </p>
                </section>
            </main>
            <footer id={"footer"}>
                Copyright &copy; 
                {(new Date().getFullYear() === 2024) ? (`2024`) : (`2024 - ${new Date().getFullYear()}`)}&nbsp;
                &middot; Group 4 for Game Design
                &middot; All rights reserved
            </footer>
        </>
    );
}
