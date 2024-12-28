import { NoteView } from "../views/NoteView";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView } from "../views/NothingSelectedView";
import { startNewNote } from "../../store/journal";
import { useAppDispatch, useAppSelector } from "../../store";

export const JournalPage = () => {

	const dispatch = useAppDispatch();
	const { isSaving, active } = useAppSelector( state => state.journal );

	const onClickNewNote = () => {
		dispatch( startNewNote() );
	}

	return (
		<JournalLayout>

			{
				( active.id )
				 ? <NoteView /> 
				 : <NothingSelectedView />
			}

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
					right: 50,
				}}
				disabled={ isSaving }
			>
				<Add />
			</Fab>
		</JournalLayout>
	);
};