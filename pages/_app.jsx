import { AuthProvider, useAuth } from '../src/Auth';

const Layout = ({ children }) => {
  const { initialized, loggedIn, login } = useAuth();

  if (!initialized) {
    return <p>loading...</p>;
  }

  if (!loggedIn) {
    return <button onClick={login}>log in</button>;
  }

  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
