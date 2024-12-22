import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/router/AuthRoutes.tsx";
import { JournalRoutes } from "../journal/router/JournalRoutes.tsx";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='auth/*' element={ <AuthRoutes /> } />

			<Route path='/*' element={ <JournalRoutes /> } />
		</Routes>
	);
};