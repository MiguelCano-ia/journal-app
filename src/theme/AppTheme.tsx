import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { purpleTheme } from "./purpleTheme.ts";
import { ReactNode } from "react";

interface ChildrenProps {
	children: ReactNode;
}

export const AppTheme = ({ children }: ChildrenProps) => {
	return (
		<ThemeProvider theme={ purpleTheme } >
			<CssBaseline />
			{ children }
		</ThemeProvider>
	);
};