import { useEffect, useState } from "react";
import userDetails from "../data/user.json";

const useCredential = () => {
  const id = localStorage.getItem("uId");
  const [user, setUser] = useState({});

  //getting user Info form bakend api(for this time we are use simple data form frontend)
  const userData = () => {
    const fetchData = async () => {
      try {
        const tempUser = userDetails?.find((user) => user.id === id) || {};

        setUser(tempUser);
      } catch (error) {
        console.log(error.message);
        fetchData();
      }
    };
    fetchData();
  };

  useEffect(() => {
    if (id) {
      userData();
    } else {
      setUser({});
    }
    //eslint-disable-next-line
  }, []);

  const logOut = () => {
    localStorage.removeItem("uId");
    setUser({});
  };

  return {
    user,
    setUser,
    userData,
    logOut,
  };
};

export default useCredential;
