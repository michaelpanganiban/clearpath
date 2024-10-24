import { Box, Grid, IconButton, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Image } from './types';

interface ProjectItemProps {
    item: Image
}

// eslint-disable-next-line no-undef
export const ProjectItems:React.FC<ProjectItemProps> = ({item}) => {
    return (
        <ImageListItem 
            sx={{
              position: 'relative', // Ensure the bar can be positioned absolutely
              '&:hover .MuiImageListItemBar-root': {
                opacity: 1, // Show the ImageListItemBar on hover
              },
            }}
          >
            <Box
              component='img'
              src={item.imageLink}
              alt={`Image ${item.imageAlt}`}
              sx={{ height: 300, width: 400, objectFit: 'cover', mx: 1 }}
            />
            <ImageListItemBar
              actionIcon={
                <Box
                    sx={{
                        position: 'absolute',
                        margin: 3,
                        top: 0,
                        left: 0,
                        right: 0,
                        color: 'white',
                        overflow: 'hidden', // Hide any overflow
                    }} 
                >
                  <Grid container columns={6} spacing={2}>
                      <Grid item xs={5}>
                          <Typography
                              sx={{
                                      alignItems: 'center',
                                      overflow: 'hidden',
                                      fontWeight: 'bold',
                                      whiteSpace: 'normal',
                                      display: '-webkit-box',
                                      WebkitBoxOrient: 'vertical',
                                      WebkitLineClamp: 3, // Limit to 3 lines, adjust as needed
                                      marginBottom: 2
                                  }} 
                              >
                              {item.imageTitle}
                          </Typography>
                      </Grid>
                      <Grid item xs={1}>
                          <IconButton
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${item.imageTitle}`}
                              title= {item.imageAlt}
                              >
                              <InfoIcon />
                          </IconButton>
                      </Grid>
                  </Grid>
                  <Typography
                      sx={{
                          fontSize: 12,
                          alignItems: 'center',
                          overflow: 'hidden',
                          whiteSpace: 'normal',
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                          WebkitLineClamp: 3, // Limit to 3 lines, adjust as needed
                      }} 
                  >
                      {item.imageAlt}
                  </Typography>
                </Box>
              }
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(0, 0, 0, 0.5)', // Optional: background color for visibility
                opacity: 0, // Hide the bar by default
                transition: 'opacity 0.3s', // Smooth transition
                height: 150
              }}
            />
          </ImageListItem>
    );
}