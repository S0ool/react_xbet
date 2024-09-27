import {createBrowserRouter} from 'react-router-dom'
import {MinesPage} from "../pages/MinesPage";
import {CasesPage} from "../pages/CasesPage";
import {HomePage} from "../pages/HomePage";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/cases',
        element: <CasesPage/>
    },
    {
        path: '/mines',
        element: <MinesPage/>
    }
])