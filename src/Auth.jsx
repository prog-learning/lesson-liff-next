import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    let unmounted = false;
    const func = async () => {
      const liff = (await import('@line/liff')).default;
      console.log('import liff');
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID });
      if (!unmounted) {
        setUser(liff);
      }
    };
    func();
    return () => {
      unmounted = true;
    };
  }, []);
  console.log(user);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const user = useContext(AuthContext);

  if (!user) {
    return {
      initialized: false,
      loggedIn: false,
      login: () => {},
    };
  }

  return {
    initialized: true,
    loggedIn: liff.isLoggedIn(),
    login: liff.login,
    userId: liff.getContext().userId,
  };
};
