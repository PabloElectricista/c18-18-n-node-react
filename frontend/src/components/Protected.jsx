import { Navigate, Outlet } from "react-router-dom";
import { isExpired } from "react-jwt"

const ProtectedRoutes = () => {
	let localStorageToken = localStorage.getItem("tkn");
  const isMyTokenExpired = isExpired(localStorageToken);

	if(isMyTokenExpired) {
		localStorage.removeItem('tkn')
		localStorageToken = null
	}

	return localStorageToken ? <Outlet /> : <Navigate to="/login"  replace />;
};

export default ProtectedRoutes;
