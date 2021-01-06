import React, {useEffect, useState, createContext, useContext } from 'react';
import firebase from 'firebase/app';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [session, setSession] = useState({user: null, loading: true});

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setSession({loading: false, user})
    })
    return () => unsubscribe();     // for removing memory leaks
  }, []);

  return (
    <UserContext.Provider value={session}>
      {!session.loading && props.children}
    </UserContext.Provider>
  )
}

// create a hook to allow other components to access the user context
export const useSession = () => {
  const session = useContext(UserContext);
  return session;
}