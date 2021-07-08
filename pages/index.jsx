import Link from 'next/link';
import { useAuth } from '../src/Auth';

export default function Home() {
  const { loggedIn, userId } = useAuth();
  return (
    <div>
      <h1>Lesson LIFF by Next.js</h1>
      <h2>Welcome Home Page!!</h2>
      {loggedIn && <p>userId:{userId}</p>}
      <button>{loggedIn ? 'Log out' : 'Log in'}</button>
      <Link href='/other'>Other page</Link>
    </div>
  );
}
