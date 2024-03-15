import Head from 'next/head';
import styles from '../styles/css/Home.module.css';
import getFooter from './footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | Pirates of the Caribbean: At Campus' End</title>
                <meta charset="UTF-8" />
                <meta name="darkreader-lock" />
                <meta name="author" content="Tygo van den Hurk" /> 
                {/* Feel free to add yourself to the list. */}
                <meta name="description" content="Solve the puzzle, find the treasure, get the price!"  />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="icon.responsive.svg" />
                <link rel="apple-touch-icon" href="icon.responsive.svg" />
            </Head>
            <main id={styles["main-content"]}>
                <section id="Pirates-of-the-Caribbean-At-Campus-End">
                    {/* <img id="site-icon" src="/icon.responsive.svg" /> */}
                    <h1 id={styles["main-title"]}> 
                        Pirates of the Caribbean: At Campus' End
                    </h1>
                    <p>
                        In this game you'll play the pirate. You'll have to solve puzzles to get hints on where the 
                        treasure is, then you'll be able to find and collect it. You can learn more about how this
                        game work at <a href="#introduction">the introduction</a>. For now you can go 
                        to <a href="/map">the map</a>, or take a look at <a href="/puzzle">the puzzle</a> to get 
                        started. If you have any questions, concerns, or problems, please feel free 
                        to <a href="https://redirects.tygo.van.den.hurk.dev/contact">get in touch</a> with me at all 
                        times.
                    </p>
                </section>
                <section>
                    <h3>
                        The Map
                    </h3>
                    <p>
                        This is the map in real time:
                    </p>
                    <a href="/map" target="_blank">
                        <iframe href="/map" frameborder="0" />
                    </a>
                    <br />
                    <h3>
                        The Puzzle
                    </h3>
                    <p>
                        This is the puzzle in real time:
                    </p>
                    <a href="/puzzle" target="_blank">
                        <iframe href="/puzzle" frameborder="0" />
                    </a>
                </section>
                <section id="introduction">
                    <h2>introduction</h2>
                    <p>
                        In this part, we'll describe how to play the game, and tell you more about it.
                    </p>
                </section>
            </main>
            {getFooter()}
        </>
    );
}
