import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Event {
  titulo: string;
  descripcion: string;
  categorias: string[];
  fecha: string;
  lugar: string;
  asistentes: string[];
  conferencistas: string[];
  facultades_organizadoras: string[];
  comentarios: string[];
}

const EventDetails: NextPage<{ event: Event | null }> = ({ event }) => {
  if (!event) {
    return <div>No se encontró el evento.</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Detalles del Evento</title>
        <meta name="description" content="Detalles del evento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{event.titulo}</h1>

        <p className={styles.description}>{event.descripcion}</p>
        <ul>
          <li>Categorías: {event.categorias ? event.categorias.join(', ') : 'No disponible'}</li>
          <li>Fecha: {event.fecha}</li>
          <li>Lugar: {event.lugar}</li>
          <li>Asistentes: {event.asistentes ? event.asistentes.join(', ') : 'No disponible'}</li>
          <li>Conferencistas: {event.conferencistas ? event.conferencistas.join(', ') : 'No disponible'}</li>
          <li>Facultades Organizadoras: {event.facultades_organizadoras ? event.facultades_organizadoras.join(', ') : 'No disponible'}</li>
          <li>Comentarios: {event.comentarios ? event.comentarios.join('\n') : 'No disponible'}</li>
        </ul>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  try {
    const response = await fetch(`http://localhost:4000/events/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch event: ${response.statusText}`);
    }
    const event = await response.json();

    return {
      props: { event },
    };
  } catch (error) {
    console.error('Failed to fetch event:', error);
    return {
      props: { event: null },
    };
  }
};



export default EventDetails;
