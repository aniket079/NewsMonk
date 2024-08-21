import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Log from './components/Log'
import Signup from './components/Signup'
import Jssnss from './components/Jssnss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './components/Landing'
import { auth, onAuthStateChanged } from './firebase'
import { setPersistence, browserLocalPersistence, signInWithRedirect, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
import Jsslanding from './components/Jsslanding'
import Jsscse from './components/Jsscse'
import Jssise from './components/Jssise'
import Passwordreset from './components/Passwordreset'
import Search from './components/Search'
import Yoga from './components/Yoga'
import Startanime from './components/Startanime'
import { AuthProvider } from './components/AuthContext';
import Prefer from './components/Prefer'
import Fetch from './components/Fetching'
const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log(user.displayName);

    // You can access user information like user.displayName, user.email, etc.
  } else {
    // User is signed out
    unsubscribe();
  }
});
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Local persistence set successfully");
  })
  .catch((error) => {
    console.error("Error setting local persistence:", error);
  });

const user = auth.currentUser;
const userId = user ? user.uid : "qCtuUbSskzdVAr5JzXoECDFzl8Z2";



export class App extends Component {
  render() {

    return (
      <div>


        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/Recommend" element={<Fetch userId={userId} />}></Route>
              <Route path="/" element={<Startanime />}></Route>
              <Route path="/Prefer" element={<Prefer />}></Route>
              <Route path="/Home" element={<Landing />}></Route>
              <Route path="/Business" element={<News key='business' pageSize={12} country="us" category="business" />}></Route>
              <Route path="/Entertainment" element={<News key='entertainment' pageSize={12} country="us" category="entertainment" />}></Route>
              <Route path="/Top-Headlines" element={<News key='top-headlines' pageSize={12} country="in" category="general" />}></Route>
              <Route path="/Health" element={<News key='health' pageSize={12} country="in" category="health" />}></Route>
              <Route path="/Science" element={<News key='science' pageSize={12} country="in" category="science" />}></Route>
              <Route path="/Sports" element={<News key='sports' pageSize={12} country="in" category="sports" />}></Route>
              <Route path="/Technology" element={<News key='technology' pageSize={12} country="in" category="technology" />}></Route>
              <Route path="/Log" element={<Log />}></Route>
              <Route path="/Signup" element={<Signup />}></Route>
              <Route path="/Jsslanding" element={<Jsslanding />}></Route>
              <Route path="/Jsscse" element={<Jsscse />}></Route>
              <Route path="/Jssise" element={<Jssise />}></Route>
              <Route path="/Jssnss" element={<Jssnss />}></Route>
              <Route path="/Yoga" element={<Yoga />}></Route>
              <Route path="/Forgot" element={<Passwordreset />}></Route>
              <Route path="/Search" element={<Search />}></Route>


            </Routes>

          </AuthProvider>
        </BrowserRouter>


      </div>
    )
  }
}

export default App
