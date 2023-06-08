import { createBrowserRouter } from 'react-router-dom'
import { browserLocalPersistence, getAuth, initializeAuth } from 'firebase/auth';
import { redirect } from 'react-router-dom';
import RecipesPage from './pages/Recipes/recipes-page';
import UserPage from './pages/User/user-page';
import ListsPage from './pages/Lists/lists-page';
import LoginPage from './pages/Login/login-page';
import SigninPage from './pages/Signin/signin-page';
import ListView from './pages/ListView/list-view.component';

const redirectIfNotLogged = () => {
  const storedUser = localStorage.getItem('user');
    if (!storedUser) {
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

