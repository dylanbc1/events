import { NextApiRequest, NextApiResponse } from 'next';

const events = [
  {
    id: 1,
    title: 'Evento 1',
    description: 'Descripción del Evento 1',
    categories: 'Categoría 1',
    date: '2024-05-01',
    location: 'Aula Magna',
    attendees: 'Asistentes 1',
    facilitators: 'Facilitadores 1',
    organizingFaculties: 'Facultad 1',
    comments: 'Comentarios 1'
  },
  {
    id: 2,
    title: 'Evento 2',
    description: 'Descripción del Evento 2',
    categories: 'Categoría 2',
    date: '2024-06-01',
    location: 'Auditorio',
    attendees: 'Asistentes 2',
    facilitators: 'Facilitadores 2',
    organizingFaculties: 'Facultad 2',
    comments: 'Comentarios 2'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const event = events.find((e) => e.id === parseInt(id as string));
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: 'Evento no encontrado' });
  }
}
