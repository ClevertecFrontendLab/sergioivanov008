import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';


export const PrivateRouter = () => {
    const isAuth = useSelector(state => state.apiAuth.isAuth);

    return isAuth ? <Outlet /> : <Navigate to='/' />
}
