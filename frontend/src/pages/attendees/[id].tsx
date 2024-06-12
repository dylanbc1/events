// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import Head from 'next/head';
// import styles from '../../styles/Home.module.css';
// import { getAttendeeById } from '../../services/attendeeService';

// interface Attendee {
//   id: number;
//   identifier: string;
//   username: string;
//   fullName: string;
//   relationshipType: string;
//   email: string;
//   city: string;
// }

// const AttendeeDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [attendee, setAttendee] = useState<Attendee | null>(null);

//   useEffect(() => {
//     if (id) {
//       getAttendeeById(id)
//         .then((data) => setAttendee(data))
//         .catch((error) => console.error('Failed to fetch attendee', error));
//     }
//   }, [
