import  { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { FormEvent, useMemo, useState } from 'react';
import { startCreatingUser, useAppDispatch, useAppSelector } from '../../store';

const formData = {
	email: '',
	password: '',
	displayName: '',
};

const formValidations = {
	email: [ ( value ) => value.includes('@') && value.includes('.'), 'Email needs an @'] as [(value: string) => boolean, string],
	password: [ ( value ) => value.length > 5, 'Password must be at least 6 characters'] as [(value: string) => boolean, string],
	displayName: [ ( value ) => value.trim().length >= 4, 'Full name is required'] as [(value: string) => boolean, string],
};

export const RegisterPage = () => {

	const dispatch = useAppDispatch();
	const [ formSubmitted, setFormSubmitted ] = useState( false );
	const { status, user: { errorMessage } } = useAppSelector( state => state.auth );
	const isCheckingAuth = useMemo(() => status === 'checking', [ status ]);

	const { formState, displayName, password, email, onInputChange, formValidation, isFormValid } = useForm( formData, formValidations );

	const { displayNameValid, emailValid, passwordValid } = formValidation;

	const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
		event.preventDefault();
		setFormSubmitted( true );

		if ( !isFormValid ) return;
		dispatch( startCreatingUser( formState ) );
	}

	return (
		<AuthLayout title='Create Account'>
			<form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
				<Grid2 container>
					<Grid2 size={{ xs: 12 }} sx={{ mt: 2}}>
						<TextField
							label="Full name"
							type="text"
							placeholder="Your full name"
							fullWidth
							name='displayName'
							value={ displayName }
							onChange={ onInputChange }
							error={ formSubmitted && !!displayNameValid }
							helperText={ formSubmitted && displayNameValid }
						/>
					</Grid2>

					<Grid2 size={{ xs: 12 }} sx={{ mt: 2}}>
						<TextField
							label="Correo"
							type="email"
							placeholder="email@gmail.com"
							fullWidth
							name='email'
							value={ email }
							onChange={ onInputChange } 
							error={ formSubmitted && !!emailValid }
							helperText={ formSubmitted && emailValid }
						/>
					</Grid2>

					<Grid2 size={{ xs: 12 }} sx={{ mt: 2}} >
						<TextField
							label="Password"
							type="password"
							placeholder="Password"
							fullWidth
							name='password'
							value={ password }
							onChange={ onInputChange }
							error={ formSubmitted && !!passwordValid }
							helperText={ formSubmitted && passwordValid }
						/>
					</Grid2>

					<Grid2
						container
						size={ 12 }
						spacing={ 2 }
						sx={{ mb: 2, mt:1 }}
					>
						<Grid2
							size={{ xs: 12, md: 6 }}
							display={ errorMessage === null ? 'none' : '' }
						>
							<Alert severity='error' >  
								{ errorMessage }
							</Alert>
						</Grid2>

						<Grid2 size={{ xs: 12, md: 6 }}>
							<Button 
								variant='contained'
								fullWidth
								type='submit'
								disabled={ isCheckingAuth }
							>
								Create Accout
							</Button>
						</Grid2>

					</Grid2>

					<Grid2
						container
						direction='row'
						justifyContent='end'
					>
						<Typography sx={{ mr: 1 }} >Already have an account?</Typography>
						<Link component={ RouterLink }  color='inherit' to='/auth/login'>
							Login
						</Link>
					</Grid2>

				</Grid2>
			</form>
		</AuthLayout>
	);
};