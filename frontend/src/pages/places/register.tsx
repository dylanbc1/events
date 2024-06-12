// pages/places/register.tsx
import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { createPlace } from '../../services/placeService';

const RegisterPlace: NextPage = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const placeData = { name, address, city };

    try {
      await createPlace(placeData);
      alert('Lugar registrado exitosamente');
    } catch (error) {
      console.error('Failed to create place', error);
      alert('Error al registrar el lugar');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Registrar Lugar</title>
        <meta name="description" content="Registrar un nuevo lugar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrar Nuevo Lugar</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Dirección:
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </label>
          <label>
            Ciudad:
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </label>
          <button type="submit" className={styles.button}>Registrar Lugar</button>
        </form>
      </main>
    </div>
  );
};

export default RegisterPlace;
