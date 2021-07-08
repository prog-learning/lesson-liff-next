import Link from 'next/link';
import { useAuth } from '../src/Auth';

export default function Home() {
  const { loggedIn } = useAuth();
  return (
    <div>
      <main>
        <h1>Lesson LIFF by Next.js</h1>
        <h2>Other Authenticated Page</h2>
        <button>{loggedIn ? 'Log out' : 'Log in'}</button>
        <Link href='/'>Home page</Link>
      </main>
    </div>
  );
}
