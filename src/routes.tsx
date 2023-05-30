import { createBrowserRouter } from 'react-router-dom'
import { browserLocalPersistence, initializeAuth } from 'firebase/auth';
import { redirect } from 'react-router-dom';
import RecipesPage from './pages/Recipes/recipes-page';
import UserPage from './pages/User/user-page';
import ListsPage from './pages/Lists/lists-page';
import LoginPage from './pages/Login/login-page';
import SigninPage from './pages/Signin/signin-page';
import ListView from './pages/ListView/list-view.component';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBwG49qhxOhj4vm1p4zNwM3UGfhHEA2FM0",
    authDomain: "cozinhex.firebaseapp.com",
    projectId: "cozinhex",
    storageBucket: "cozinhex.appspot.com",
    messagingSenderId: "162587160055",
    appId: "1:162587160055:web:4b73e462ffc8402d8952f2",
    measurementId: "G-PRPZBWSNCD"
  };
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });
  console.log(auth)

const redirectIfNotLogged = () => {
    if (!auth.currentUser) {
        return redirect('/login');
    }
    return null;
}

export const router = createBrowserRouter([
    { path: '/', element: <RecipesPage />} ,
    { path: '/user', element: <UserPage />, loader: redirectIfNotLogged},
    { path: '/lists', element: <ListsPage />, loader: redirectIfNotLogged},
    { path: '/list-view', element: <ListView /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signin', element: <SigninPage /> },
]);

