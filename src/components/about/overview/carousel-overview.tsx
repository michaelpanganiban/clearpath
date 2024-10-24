'use client'

import { CAROUSEL_IMAGES } from '@/src/enum/constants';
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CarouselContent } from '../../carousel/carousel-content';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { COLORS } from '@/src/enum/colors';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const CarouselOverview = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };
    const carouselConfig = {
        width: '100%',
        includeContent: false
    }
    return (
        <Box
            marginLeft='10%'
            marginTop='2%'
            display='flex' 
			alignItems='center' 
			position='relative' 
            width='80%'
        >
            <IconButton
                onClick={() => setActiveStep(prev => Math.max(prev - 1, 0))}
                sx={{ position: 'absolute', left: 0, zIndex: 1 }}
            >
                <ArrowBackIosNew 
                    sx={{
                        color: COLORS.SECONDARY,
                        fontSize: {
                            xs: 5,
                            sm: 'small',
                            md: 30
                        }
                    }}
                />
            </IconButton>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {CAROUSEL_IMAGES.map((step, index) => (
                    <CarouselContent 
                        key={index}
                        image={step.imagePath} 
                        index={index} 
                        activeStep={activeStep}      
                        carouselConfig={carouselConfig}      
                    />
                ))}
            </AutoPlaySwipeableViews>
            <IconButton
                onClick={() => setActiveStep(prev => Math.min(prev + 1, CAROUSEL_IMAGES.length - 1))}
                sx={{ position: 'absolute', right: 0, zIndex: 1 }}
            >
                <ArrowForwardIos 
                sx={{
                    color: COLORS.SECONDARY,
                    fontSize: {
                        xs: 5,
                        sm: 'small',
                        md: 30
                    }
                }}
                />
            </IconButton>
        </Box>
      );
}