import React, { useState, useEffect } from 'react';
import { auth, db ,onAuthStateChanged} from '../firebase';
import { doc, runTransaction } from 'firebase/firestore';

const User = () => {
  const [userId, setUserId] = useState(null);
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
     setUserId(auth.currentUser.uid);
      // You can access user information like user.displayName, user.email, etc.
    } else {
      // User is signed out
      unsubscribe();
    }
  });

  useEffect(() => {
    // Function to log page visit to Firestore
    const logPageVisit = async () => {
      const user = auth.currentUser; // Get current user
      const currentPage = window.location.pathname; // Get current page URL

      if (user) {
        const uid = user.uid; // Set the userId state once the UID is available
        const userVisitRef = doc(db, 'users', uid);
        await runTransaction(db, async (transaction) => {
          const docSnapshot = await transaction.get(userVisitRef);
          let userData = docSnapshot.exists() ? docSnapshot.data() : { visits: [] };
          if (!Array.isArray(userData.visits)) {
            userData.visits = [];
          }
          // Append new visit to the visits array
          userData.visits.push({
            page: currentPage,
          });

          // Update the user's visit data document
          transaction.set(userVisitRef, userData);
        });

        console.log('Page visit logged successfully for user:', uid);
      }
      else{
        console.log("not");
      }
    };
    {
        logPageVisit(); // Log page visit when component mounts

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run effect only once (on component mount)

  // Render the component content based on whether userId is available
  return (
    <div>
      {userId ? (
        <div>
          <h2>User ID: {userId}</h2>
          {/* Render other content based on authentication status */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;
