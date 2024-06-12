import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { getAttendees } from '../services/attendeeService';

interface Attendee {
  id: number;
  username: string;
  fullName: string;
  relationshipType: string;
  email: string;
}

const Attendees: NextPage = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);

  useEffect(() => {
    getAttendees()
      .then((data) => setAttendees(data))
      .catch((error) => console.error('Failed to fetch attendees', error));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Asistentes y Conferencistas</title>
        <meta name="description" content="Lista de asistentes y conferencistas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Asistentes y Conferencistas</h1>

        <p className={styles.description}>
          Aquí puedes ver la lista de asistentes y conferencistas.
        </p>

        <Link href="/attendees/register">
          <button className={styles.button}>Registrar Nuevo Asistente o Conferencista</button>
        </Link>

        <ul className={styles.list}>
          {attendees.map((attendee) => (
            <li key={attendee.id} className={styles.listItem}>
              <Link href={`/attendees/${attendee.id}`}>
                <div className={styles.card}>
                  <h2>{attendee.username}</h2>
                  <p>{attendee.fullName}</p>
                  <p>{attendee.relationshipType}</p>
                  <p>{attendee.email}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Attendees;

