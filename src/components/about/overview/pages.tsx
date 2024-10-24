'use client'

import { COLORS } from '@/src/enum/colors';
import { Stack, Typography } from '@mui/material';
import { CarouselOverview } from './carousel-overview';
import { OverviewDetails } from './overview-details';

export const AboutOverview = () => {
    return (
		<>
			<Stack sx={{
					backgroundColor: COLORS.BACKGROUND,
					scrollMarginTop: {
						xs: 230,
						md: 170,
						lg: 145
					}
				}}
				id='overview'
				minHeight={100}
			>
				<Typography 
					fontFamily={'sans-serif'}
					variant='h4'
					fontWeight={'bold'}
					marginTop={3}
					fontSize={{
						xs: 'small',
						sm: 35,
					}}
				>
					<span className="underline-word">Overview</span>
				</Typography>
			</Stack>
			<Stack>
				<CarouselOverview />
				<OverviewDetails />
			</Stack>
		</>
    );
}