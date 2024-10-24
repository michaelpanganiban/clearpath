import { Box, IconButton, ImageListItem, Stack, Typography } from '@mui/material';
import { TeamInterface } from './types';
import { COLORS } from '@/src/enum/colors';
import { Facebook, Google, LinkedIn } from '@mui/icons-material';

interface TeamItemProps {
    item: TeamInterface
}

// eslint-disable-next-line no-undef
export const TeamItems:React.FC<TeamItemProps> = ({item}) => {
    return (
        <Stack>
            <ImageListItem >
                <Box
                component='img'
                src={item.link}
                alt={`Image ${item.imageName}`}
                sx={{ height: 300, width: 300, objectFit: 'cover', mx: 1 }}
                />
            </ImageListItem>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontWeight: 'light',
                    color: COLORS.GRAY
                }}
            >
                {item.position}
            </Typography>
            <Typography
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: COLORS.BLACK
                }}
            >
                {item.imageName.toLocaleUpperCase()}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    '& > *': {
                        margin: 0,  // Ensure no margins are applied to the child items
                        padding: 0, // Ensure no padding is applied to the child items
                    },
                }}
            >
                <IconButton sx={{ color: '#3a6bb1' }}>
                    <Facebook />
                </IconButton>
                <IconButton sx={{ color: '#0094d3' }}>
                    <LinkedIn />
                </IconButton>
                <IconButton sx={{ color: '#f2623b' }}>
                    <Google />
                </IconButton>
            </Box>
        </Stack>

    );
}