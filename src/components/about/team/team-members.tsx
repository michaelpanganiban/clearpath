'use client'

import { Box } from '@mui/material';
import { TEAM } from '@/src/enum/team';
import { TeamInterface } from './types';
import { TeamItems } from './team-items';

export const TeamMembers = () => {
    return (
        <Box 
			display='flex' 
			alignItems='center' 
			position='relative' 
			className='sub-body sub-body-items'
        >
            <Box
                display='flex'
                overflow='auto'
                whiteSpace='nowrap'
                sx={{ scrollBehavior: 'smooth', '&::-webkit-scrollbar': { display: 'none' } }}
            >
                {TEAM.map((item:TeamInterface, index: number) => (
                    <TeamItems key={index} item={item} />
                ))}
            </Box>
        
        </Box>
    );
}