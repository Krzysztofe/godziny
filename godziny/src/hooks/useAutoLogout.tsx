// import { useEffect, useState } from "react";
// import { auth } from "../data/firebaseConfig";

// const useAutoLogout = () => {
//   const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null);
//   const [counter, setCounter] = useState(5);

//   console.log("ooo", counter);

//   useEffect(() => {
//     const resetLogoutTimer = () => {
//       if (logoutTimer) clearTimeout(logoutTimer);
//       setLogoutTimer(
//         setTimeout(() => {
//           auth.signOut();
//         }, 5000)
//       );

//     //   const interval = setInterval(() => {
//     //     setCounter(prevCounter => prevCounter + 1);
//     //   }, 1000);
//     //   return () => clearInterval(interval);
//     };

//     const handleUserActivity = () => {
//       resetLogoutTimer();
//     };

//     document.addEventListener("mousemove", handleUserActivity);
//     document.addEventListener("keydown", handleUserActivity);

//     return () => {
//       document.removeEventListener("mousemove", handleUserActivity);
//       document.removeEventListener("keydown", handleUserActivity);
//       if (logoutTimer) clearTimeout(logoutTimer);
//     };
//   }, [logoutTimer]);

//   return <></>;
// };

// export default useAutoLogout;

// import { useEffect, useState } from "react";
// import { auth } from "../data/firebaseConfig";

// const useAutoLogout = () => {
//   const [logoutTimer, setLogoutTimer] = useState<NodeJS.Timeout | null>(null);
//   const [counter, setCounter] = useState(5);

//   console.log("ooo", counter);

//   useEffect(() => {
//     const resetLogoutTimer = () => {
//       if (logoutTimer) clearTimeout(logoutTimer);
//       setLogoutTimer(
//         setTimeout(() => {
//           auth.signOut();
//         }, 5000)
//       );

//       //   const interval = setInterval(() => {
//       //     setCounter(prevCounter => prevCounter + 1);
//       //   }, 1000);
//       //   return () => clearInterval(interval);
//     };

//     const handleUserActivity = () => {
//       resetLogoutTimer();
//     };

//     document.addEventListener("mousemove", handleUserActivity);
//     document.addEventListener("keydown", handleUserActivity);

//     return () => {
//       document.removeEventListener("mousemove", handleUserActivity);
//       document.removeEventListener("keydown", handleUserActivity);
//       if (logoutTimer) clearTimeout(logoutTimer);
//     };
//   }, []);

//   return <></>;
// };

// export default useAutoLogout;

import { useEffect,  } from "react";
import { auth } from "../data/firebaseConfig";

const useAutoLogout = () => {
  let expireTime = 0;

  const checkInactivity = () => {
    if (expireTime < Date.now()) {
      auth.signOut();
    }
  };

  const updateExpireTime = () => {
    // expireTime = Date.now() + 5 * 1000;
    // console.log("xxcc", expireTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkInactivity();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateExpireTime();
    const events = ["mousemove", "keypress", "click", "scroll"];

    events.map(event => {
      return document.addEventListener(event, updateExpireTime);
    });
   

    return () => {
      events.map(event => {
        return document.addEventListener(event, updateExpireTime);
      });
      
    };
  }, []);

//   console.log("xx", expireTime);
};

export default useAutoLogout;
