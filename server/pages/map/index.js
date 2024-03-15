import Head from 'next/head';
import styles from '../../styles/css/Map.module.css';

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
            </Head>
            <main className={styles.container}>
                <p>
                    This is a work in progress.
                </p>
            </main>
        </>
    );
}
