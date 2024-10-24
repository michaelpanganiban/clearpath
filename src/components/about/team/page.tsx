'use client'

import { COLORS } from '@/src/enum/colors';
import { Stack, Typography } from '@mui/material';
import { TeamDetails } from './team-details';

export const OurTeam = () => {
    return (
        <Stack>
			<Stack sx={{
					backgroundColor: COLORS.BACKGROUND,
					scrollMarginTop: {
						xs: 230,
						md: 170,
						lg: 145
					}
				}}
				minHeight={100}
				id='our-team'
			>
				<Typography 
					fontFamily={'sans-serif'}
					variant='h4'
					fontWeight={'bold'}
					marginTop={3}
					fontSize={{
						xs: 'small',
						sm: 20,
						md: 25,
						lg: 30
					}}
				>
					<span className="underline-word">Our</span> Team - Company Profile
				</Typography>
			</Stack>
			<Stack>
				<TeamDetails />
			</Stack>
		</Stack>
    );
}