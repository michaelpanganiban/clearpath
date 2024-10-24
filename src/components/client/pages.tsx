'use client'

import { COLORS } from '@/src/enum/colors'
import { Stack } from '@mui/material'
import { CLIENTS } from '@/src/enum/clients';
import { ClientList } from './client-list';

export const Clients = () => {
	return (
		<Stack sx={{
			backgroundColor: COLORS.BACKGROUND
		}}
		minHeight={150}
		>
            <ClientList images={CLIENTS}/>
		</Stack>
	);
}