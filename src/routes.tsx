import { Navigate, createBrowserRouter } from 'react-router-dom'
import RecipesPage from './pages/Recipes/recipes-page';
import UserPage from './pages/User/user-page';
import ListsPage from './pages/Lists/lists-page';
import CurrentList from './pages/CurrentList/current-list';
import LoginPage from './pages/Login/login-page';
import SigninPage from './pages/Signin/signin-page';
import AuthService from './components/AuthService';

export const router = createBrowserRouter([
    { path: '/', element: <RecipesPage /> },
    { path: '/user', element: <UserPage authService={new AuthService()}/>},
    { path: '/lists', element: <ListsPage /> },
    { path: '/current-list', element: <CurrentList /> },
    //{ path: '/login', element: <LoginPage authService={new AuthService()}/> },
    { path: '/signin', element: <SigninPage /> },
]);

