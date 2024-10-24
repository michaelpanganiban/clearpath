'use client'

import { Box } from '@mui/material';
import { SPECIALIZATION } from '@/src/enum/specialization';
import { SpecializationInterface } from './type';
import { SpecializationItems } from './specialization-items';

export const SpecializationList = () => {
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
                {SPECIALIZATION.map((item:SpecializationInterface, index: number) => (
                    <SpecializationItems key={index} item={item} />
                ))}
            </Box>
        
        </Box>
    );
}