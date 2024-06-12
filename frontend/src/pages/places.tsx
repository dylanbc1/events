// pages/places.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

interface Place {
  id: number;
  name: string;
  address: string;
  city: string;
}

const Places: NextPage = () => {
  const [places, setPlaces] = useState<Place[]>([]);

  useEffect(() => {
    // Aquí se debería hacer la llamada a la API para obtener la lista de lugares
    fetch('/api/places')
      .then((response) => response.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lugares</title>
        <meta name="description" content="Lista de lugares" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lugares</h1>

        <p className={styles.description}>
          Aquí puedes ver todos los lugares registrados.
        </p>

        <Link href="/places/register">
          <button className={styles.button}>Registrar Nuevo Lugar</button>
        </Link>

        <ul className={styles.list}>
          {places.map((place) => (
            <li key={place.id} className={styles.listItem}>
              <Link href={`/places/${place.id}`}>
                <div className={styles.card}>
                  <h2>{place.name}</h2>
                  <p>{place.address}</p>
                  <p>{place.city}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Places;
