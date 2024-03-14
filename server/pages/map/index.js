import Head from 'next/head';
import styles from '../../styles/css/Map.module.min.css';

export default function Map() {
    return (
        <>
            <Head>
                <title>Map | Pirates of the Caribbean: At Campus' End</title>
                <meta charset="UTF-8" />
                <meta name="darkreader-lock" />
                <meta name="author" content="Tygo van den Hurk" /> 
                {/* Feel free to add yourself to the list. */}
                <meta name="description" content="This is the map where you can see where the treasure is. Solve the puzzle, find the treasure, get the price!"  />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="icon.responsive.svg" />
                <link rel="apple-touch-icon" href="icon.responsive.svg" />
                <link rel="stylesheet" href="/css/main.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" />
            </Head>
            <main className={styles.container}>

                {/* {Utils} */}
            </main>
        </>
    );
}
