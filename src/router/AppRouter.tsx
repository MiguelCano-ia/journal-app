import { AuthRoutes } from "../auth/router/AuthRoutes.tsx";
import { CheckingAuth } from "../ui/index.ts";
import { JournalRoutes } from "../journal/router/JournalRoutes.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth.ts";

export const AppRouter = () => {

	const { status } = useCheckAuth();

	if ( status === 'checking' ) return <CheckingAuth />;

	return (
		<Routes>

			{
				(status === 'authenticated')
				 ? <Route path='/*' element={ <JournalRoutes /> } />
				 : <Route path='auth/*' element={ <AuthRoutes /> } />
			}

			<Route path='/*' element={ <Navigate to='auth/login' /> } />

			{/* <Route path='auth/*' element={ <AuthRoutes /> } /> */}

			{/* <Route path='/*' element={ <JournalRoutes /> } /> */}
		</Routes>
	);
};