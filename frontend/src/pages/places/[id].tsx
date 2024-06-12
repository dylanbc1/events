// pages/places/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

interface Place {
  id: number;
  name: string;
  address: string;
  city: string;
}

const PlaceDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [place, setPlace] = useState<Place | null>(null);

  useEffect(() => {
    if (id) {
      // Aquí se hace la llamada a la API para obtener los detalles del lugar
      fetch(`/api/places/${id}`)
        .then((response) => response.json())
        .then((data) => setPlace(data));
    }
  }, [id]);

  if (!place) return <div>Cargando...</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>{place.name}</title>
        <meta name="description" content={place.address} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{place.name}</h1>
        <p className={styles.description}>{place.address}</p>
        <p><strong>Ciudad:</strong> {place.city}</p>
      </main>
    </div>
  );
};

export default PlaceDetail;
