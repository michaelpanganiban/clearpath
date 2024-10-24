import React, { useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { ImageInterface, Image } from './types';
import { ProjectItems } from './project-items';
import { COLORS } from '@/src/enum/colors';

export const ProjectList: React.FC<ImageInterface> = ({ images }) => {
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
          color: COLORS.SECONDARY
        }}
        fontSize='large'
      />
      </IconButton>
      <Box
        ref={scrollRef}
        display='flex'
        overflow='auto'
        whiteSpace='nowrap'
        sx={{ scrollBehavior: 'smooth', '&::-webkit-scrollbar': { display: 'none' } }}
      >
        {images.map((item:Image, index: number) => (
          <ProjectItems key={index} item={item} />
        ))}
      </Box>
      <IconButton
        onClick={() => scroll('right')}
        sx={{ position: 'absolute', right: 0, zIndex: 1 }}
      >
        <ArrowForwardIos 
          sx={{
            color: COLORS.SECONDARY
          }}
          fontSize='large'
        />
      </IconButton>
    </Box>
  );
};

