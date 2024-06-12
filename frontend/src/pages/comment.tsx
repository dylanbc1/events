import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { NextPage } from 'next';
import styles from '../../styles/Home.module.css';

const Comments: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [texto, setTexto] = useState('');
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`http://localhost:4000/comments/event/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchComments();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const commentData = {
      texto,
      evento: id,
      persona: "idPersona", // Aquí deberías poner el ID de la persona, asegúrate de obtenerlo adecuadamente
    };

    try {
      const response = await fetch(`http://localhost:4000/comments/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }

      alert('Comment added successfully');
      setTexto('');
      fetchComments(); // Refrescar la lista de comentarios después de añadir uno nuevo
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add comment');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Comentarios del Evento</title>
        <meta name="description" content="Ver y agregar comentarios a un evento" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Comentarios</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Comentario:
            <textarea value={texto} onChange={(e) => setTexto(e.target.value)} />
          </label>
          <button type="submit" className={styles.button}>Agregar Comentario</button>
        </form>

        <div className={styles.comments}>
          {comments.map(comment => (
            <div key={comment._id} className={styles.comment}>
              <p>{comment.texto}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Comments;
