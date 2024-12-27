// import { NoteView } from "../views/NoteView";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { startNewNote } from "../../store/journal";
import { useAppDispatch } from "../../store";

export const JournalPage = () => {

	const dispatch = useAppDispatch();

	const onClickNewNote = () => {
		dispatch( startNewNote() );
	}

	return (
		<JournalLayout>

			<NothingSelectedView />
			{/* <NoteView /> */}

			<Fab
				onClick={ onClickNewNote }
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