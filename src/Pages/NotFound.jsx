import { Link } from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>404 - Oldal nem található</h1>
      <p>A keresett oldal nem létezik.</p>
      <Link href="/">Vissza a főoldalra</Link>
    </div>
  );
};

export default NotFound;
