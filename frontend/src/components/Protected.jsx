import { Navigate, Outlet } from "react-router-dom";
import { isExpired } from "react-jwt"
import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
	let localStorageToken = localStorage.getItem("tkn");
  const isMyTokenExpired = isExpired(localStorageToken);
	const user = useSelector(state => state.auth)

	if(isMyTokenExpired || user.user === null) {
		localStorage.removeItem('tkn')
		localStorageToken = null
	}

	return localStorageToken ? <Outlet /> : <Navigate to="/login"  replace />;
};

export default ProtectedRoutes;
