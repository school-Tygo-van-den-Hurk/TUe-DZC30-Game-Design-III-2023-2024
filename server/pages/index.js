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
            </Head>
            <main className={styles.container}>
                {`This is some text bla bla bla bla`}
                <img src="/icon.responsive.svg" />
            </main>
        </>
    );
}
