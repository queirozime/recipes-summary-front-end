import { createBrowserRouter } from 'react-router-dom'
import RecipesPage from './pages/Recipes/recipes-page';
import UserPage from './pages/User/user-page';
import ListsPage from './pages/Lists/lists-page';
import CurrentList from './pages/CurrentList/current-list';
import LoginPage from './pages/Login/login-page';

export const router = createBrowserRouter([
    { path: '/', element: <RecipesPage /> },
    { path: '/user', element: <UserPage /> },
    { path: '/lists', element: <ListsPage /> },
    { path: '/current-list', element: <CurrentList /> },
    { path: '/login', element: <LoginPage /> },
]);