import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useMyContext } from '../components/context/MyContext';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { value, setValue } = useMyContext();

  return (
    <div className={styles.container}>
      <Head>
        <title>EventosU</title>
        <meta name="description" content="Gestión de eventos para la universidad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">EventosU</a>
        </h1>

        <p className={styles.description}>
          Gestiona tus eventos universitarios de forma sencilla
        </p>

        <div className={styles.grid}>
          <Link href="/events" legacyBehavior>
            <a className={styles.card}>
              <h2>Eventos &rarr;</h2>
              <p>Explora los eventos organizados por la universidad.</p>
            </a>
          </Link>

          <Link href="/attendees" legacyBehavior>
            <a className={styles.card}>
              <h2>Asistentes &rarr;</h2>
              <p>Gestiona la lista de asistentes.</p>
            </a>
          </Link>

          <Link href="/facilitators" legacyBehavior>
            <a className={styles.card}>
              <h2>Facilitadores &rarr;</h2>
              <p>Gestiona la lista de facilitadores.</p>
            </a>
          </Link>
          <Link href="/places" legacyBehavior>
            <a className={styles.card}>
              <h2>Lugares &rarr;</h2>
              <p>Gestiona la lista de lugares.</p>
            </a>
          </Link>
        </div>

        
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  );
};

export default Home;
