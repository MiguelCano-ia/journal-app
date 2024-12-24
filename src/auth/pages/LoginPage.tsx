import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { Alert, Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { startGoogleSignIn, startLoginUser, useAppDispatch, useAppSelector } from '../../store';
import { FormEvent, useMemo } from 'react';
import { Google } from "@mui/icons-material";
import { useForm } from '../../hooks';

export const LoginPage = () => {

	const { status, user: { errorMessage } } = useAppSelector( state => state.auth );
	const dispatch = useAppDispatch();

	const { email, password, onInputChange } = useForm({
		email: '',
		password: '',
	}, {});

	const isAuthenticating = useMemo(() => status === 'checking', [ status ]);

	const onSubmit = ( event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch( startLoginUser( { email, password } ) );
	}

	const onGoogleSignIn = () => {
		dispatch( startGoogleSignIn() );
	}

	return (
		<AuthLayout title='Login'>
			<form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
				<Grid2 container>
					<Grid2 size={{ xs: 12 }} sx={{ mt: 2}}>
						<TextField
							label="Correo"
							type="email"
							placeholder="email@gmail.com"
							fullWidth 
							name='email'
							value={ email }
							onChange={ onInputChange }
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
								disabled={ isAuthenticating }
								variant='contained'
								fullWidth
								type='submit'
							>
								Login
							</Button>
						</Grid2>

						<Grid2 size={{ xs: 12, md: 6 }}>
							<Button 
								disabled={ isAuthenticating }
								variant='contained'
								fullWidth
								onClick={ onGoogleSignIn }
							>
								<Google />
								<Typography sx={{ ml: 1 }} >Google</Typography>
							</Button>
						</Grid2>
					</Grid2>

					<Grid2
						container
						direction='row'
						justifyContent='end'
					>
						<Link component={ RouterLink }  color='inherit' to='/auth/register'>
							Create an account
						</Link>
					</Grid2>

				</Grid2>
			</form>
		</AuthLayout>
	);
};