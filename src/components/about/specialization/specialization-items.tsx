import { Box, ImageListItem, Stack, Typography } from '@mui/material';
import { SpecializationInterface } from './type';
import { COLORS } from '@/src/enum/colors';

interface SpecializationProps {
    item: SpecializationInterface
}

// eslint-disable-next-line no-undef
export const SpecializationItems:React.FC<SpecializationProps> = ({item}) => {
    return (
        <Stack>
            <ImageListItem >
                <Box
                    component='img'
                    src={item.link}
                    alt={`Image ${item.imageName}`}
                    sx={{
                    height: 300,
                    width: 300,
                    objectFit: 'cover',
                    mx: 1,
                    transition: 'transform 0.3s ease', // Smooth transition for the hover effect
                        '&:hover': {
                            transform: 'scale(1.1)', // Scale the image on hover
                            marginBottom: 5
                        },
                    }}
                />
            </ImageListItem>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: COLORS.SECONDARY
                }}
            >
                {item.imageName.toLocaleUpperCase()}
            </Typography>
            <Box
                width='95%'
            >
                <Typography
                    sx={{
                        fontSize: 13,
                        alignItems: 'center',
                        textAlign: 'center',
                        overflow: 'hidden',
                        whiteSpace: 'normal',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                    }} 
                >
                    {item.details}
                </Typography>
            </Box>
        </Stack>

    );
}