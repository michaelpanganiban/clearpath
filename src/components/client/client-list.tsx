import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { COLORS } from '@/src/enum/colors';
import { ClientInterface } from './type';
import { ClientItems } from './client-items';

interface ClientProps {
    images: ClientInterface[]
}

export const ClientList: React.FC<ClientProps> = ({ images }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: string) => {
        if (scrollRef.current) {
        const scrollAmount = direction === 'left' ? -300 : 300;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


  return (
    <Box 
			display='flex' 
			alignItems='center' 
			position='relative' 
			className='sub-body sub-body-items'
    >
        <IconButton
            onClick={() => scroll('left')}
            sx={{ position: 'absolute', left: 0, zIndex: 1 }}
        >
            <ArrowBackIosNew 
                sx={{
                color: COLORS.GRAY
                }}
                fontSize='medium'
            />
        </IconButton>
        <Box
            ref={scrollRef}
            display='flex'
            overflow='auto'
            whiteSpace='nowrap'
            sx={{ scrollBehavior: 'smooth', '&::-webkit-scrollbar': { display: 'none' } }}
            width='90%'
            marginLeft={5}
        >
            {images.map((item:ClientInterface, index: number) => (
                <ClientItems key={index} item={item} />
            ))}
        </Box>
        <IconButton
            onClick={() => scroll('right')}
            sx={{ position: 'absolute', right: 0, zIndex: 1 }}
        >
            <ArrowForwardIos 
            sx={{
                color: COLORS.GRAY
            }}
            fontSize='large'
            />
        </IconButton>
    </Box>
  );
};

