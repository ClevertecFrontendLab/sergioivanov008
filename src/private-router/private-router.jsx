import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRouter = () => {
    const isToken = localStorage.getItem('cleverToken');

    return isToken ? <Outlet /> : <Navigate to='/' />
}
