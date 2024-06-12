import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Events.module.css';
import { useRouter } from 'next/router';

interface Event {
  _id: string;
  titulo: string;
  fecha: string;
  lugar: string;
}

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Eventos</title>
        <meta name="description" content="Lista de eventos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Eventos</h1>

        <p className={styles.description}>
          Aquí puedes ver todos los eventos organizados por la universidad.
        </p>

        <Link href="/events/register">
          <button className={styles.button}>Registrar Nuevo Evento</button>
        </Link>

        <div className={styles.grid}>
          {events.map((event) => (
            <div key={event._id} className={styles.cardContainer}>
              <Link href={`/events/${event._id}`}>
                <div className={styles.card}>
                  <h2>{event.titulo}</h2>
                  <p>{event.fecha}</p>
                  <p>{event.lugar}</p>
                </div>
              </Link>
              <Link href={`/comments/${event._id}`}>
                <button className={styles.commentButton}>Agregar Comentario</button>
              </Link>
            </div>
          ))}
        </div>
        
        <Link href="/">
          <button className={styles.backButton}>Volver</button>
        </Link>
      </main>
    </div>
  );
};

export default Events;
