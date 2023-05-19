import { createBrowserRouter } from 'react-router-dom'
import RecipesPage from './pages/recipes-page';

export const router = createBrowserRouter([
    { path: '/', element: <RecipesPage /> },
    { path: '/about', element: <div>2</div> },
    { path: '/contact', element: <div>3</div> },
    { path: '/login', element: <div>4</div> },
]);