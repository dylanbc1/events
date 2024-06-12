// src/pages/attendees.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Attendees: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asistentes</title>
        <meta name="description" content="Lista de facilitatorsx" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Facilitators
        </h1>

        <p className={styles.description}>
          Aquí puedes ver la lista de asistentes a los eventos.
        </p>
      </main>
    </div>
  );
};

export default Attendees;
