'use client'

import { Stack, Typography } from '@mui/material'
import ServicesList from './services-list'

export const Services = () => {
	return (
		<Stack minHeight={400} id='services'
			sx={{
				scrollMarginTop: {
					xs: 220,
					md: 180,
					lg: 145
				}
			}}
		>
			<Typography 
				fontFamily={'sans-serif'}
				variant='h4'
				fontWeight={'bold'}
				marginTop={5}
				fontSize={{
					xs: 'small',
					sm: 35,
				}}
			>
				<span className="underline-word">Our</span> Services
			</Typography>
			<ServicesList />
		</Stack>
	)
}
