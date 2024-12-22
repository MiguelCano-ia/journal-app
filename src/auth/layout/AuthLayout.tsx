import { Grid2, Typography } from "@mui/material"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
}

export const AuthLayout = ({ children, title = '' }: AuthLayoutProps) => {
  return (
    <Grid2
			container
			spacing={ 0 }
			direction='column'
			justifyContent='center'
			alignItems='center'
			sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
		>
			<Grid2
				className='box-shadow'
				size={{ xs: 3 }}
				sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, width: { sm: 450, xs: 250 } }}
			>
				<Typography variant='h5' sx={{ mb: 1 }} >{ title }</Typography>

        { children }

      </Grid2>
    </Grid2>
  )
}
