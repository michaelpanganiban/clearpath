'use strict'

import { COLORS } from '@/src/enum/colors'
import { Stack, Typography } from '@mui/material'
import { AboutUsList } from './about-us-list';
import React, { Dispatch, SetStateAction } from 'react';

interface AboutUsInterface {
	setViewComponents: Dispatch<SetStateAction<string>>;
}

export const AboutUs:React.FC<AboutUsInterface> = ({setViewComponents}) => {
    return (
		<Stack sx={{
				backgroundColor: COLORS.WHITE,
				scrollMarginTop: {
					xs: 230,
					md: 170,
					lg: 145
				}
			}}
			minHeight={500}
			id="about"
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
				<span className="underline-word">About</span> Us
			</Typography>
            <AboutUsList setViewComponents= {setViewComponents} />
		</Stack>
    );
}