import { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
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
      title,
      description,
      categories: categories.split(','),
      date,
      location,
      attendees: attendees.split(','),
      facilitators: facilitators.split(','),
      organizingFaculties: organizingFaculties.split(','),
      comments: comments.split('\n')
    };
    await createEvent(eventData);
     
    alert('Event registered successfully');
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
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Descripción:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Categorías:
            <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} />
          </label>
          <label>
            Fecha:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <label>
            Lugar:
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </label>
          <label>
            Asistentes:
            <input type="text" value={attendees} onChange={(e) => setAttendees(e.target.value)} />
          </label>
          <label>
            Facilitadores:
            <input type="text" value={facilitators} onChange={(e) => setFacilitators(e.target.value)} />
          </label>
          <label>
            Facultades Organizadoras:
            <input type="text" value={organizingFaculties} onChange={(e) => setOrganizingFaculties(e.target.value)} />
          </label>
          <label>
            Comentarios:
            <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
          </label>
          <button type="submit" className={styles.button}>Registrar Evento</button>
        </form>
      </main>
    </div>
  );
};

export default Register;
