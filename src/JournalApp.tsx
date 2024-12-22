import { AppRouter } from "./router/AppRouter.tsx";
import {AppTheme} from "./theme";

export const JournalApp = () => {
	return (
		<AppTheme>
			<AppRouter />
		</AppTheme>
	);
};