import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Register.module.css';
import { createEvent } from '../../services/eventService';

const Register: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [attendees, setAttendees] = useState('');
  const [facilitators, setFacilitators] = useState('');
  const [organizingFaculties, setOrganizingFaculties] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eventData = {
      titulo: title,
      descripcion: description,
      categorias: categories.split(','),
      fecha: date,
      lugar: location,
      asistentes: attendees.split(','),
      conferencistas: facilitators.split(','),
      facultades_organizadoras: organizingFaculties.split(','),
      comentarios: comments.split('\n')
    };

    try {
      await createEvent(eventData);
      alert('Event registered successfully');
    } catch (error) {
      console.error('Error:', error);
      if (error.message.includes('Event with the same title already exists')) {
        alert('An event with the same title already exists. Please choose a different title.');
      } else {
        alert('Failed to register event');
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Registrar Evento</title>
        <meta name="description" content="Registrar un nuevo evento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Registrar Nuevo Evento</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Título:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
          </label>
          <label>
            Descripción:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className={styles.textarea} />
          </label>
          <label>
            Categorías:
            <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} className={styles.input} />
          </label>
          <label>
            Fecha:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input} />
          </label>
          <label>
            Lugar:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className={styles.input} />
          </label>
          <label>
            Asistentes:
            <input type="text" value={attendees} onChange={(e) => setAttendees(e.target.value)} className={styles.input} />
          </label>
          <label>
            Facilitadores:
            <input type="text" value={facilitators} onChange={(e) => setFacilitators(e.target.value)} className={styles.input} />
          </label>
          <label>
            Facultades Organizadoras:
            <input type="text" value={organizingFaculties} onChange={(e) => setOrganizingFaculties(e.target.value)} className={styles.input} />
          </label>
          <button type="submit" className={styles.button}>Registrar Evento</button>
        </form>

        <Link href="/events">
          <button className={styles.backButton}>Volver</button>
        </Link>
      </main>
    </div>
  );
};

export default Register;
