import { Fab } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views/NoteView";
// import { NothingSelectedView } from "../views/NothingSelectedView";
import { Add } from "@mui/icons-material";

export const JournalPage = () => {
	return (
		<JournalLayout>

			{/* <NothingSelectedView /> */}
			<NoteView />

			<Fab
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': {
						backgroundColor: 'error.main', opacity: 0.8
					},
					position: 'fixed',
					bottom: 50,
					right: 50
				}}
			>
				<Add />
			</Fab>
		</JournalLayout>
	);
};