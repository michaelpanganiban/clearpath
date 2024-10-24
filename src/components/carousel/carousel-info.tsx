import { COLORS } from '@/src/enum/colors';
import { EMAIL } from '@/src/enum/constants';
import { Button, Grid, Stack, Typography } from '@mui/material';

export const CarouselInfo = () => {
  return (
    <Stack sx={{
      position: 'absolute', 
      color: 'white', 
      top: {
        xs: '10%',
        sm: '20%',
        md: '30%'
      }, 
      left: {
        xs: '35%',
        sm: '40%',
        md: '35%',
      }, 
      transform: 'translateX(-50%)',
    }} >
      <Typography  sx={{
        fontSize: {
          xs: '0.5rem',
          sm: '1rem', 
          md: '2.2rem'   
        },
        fontWeight: {
          xs: 400,
          sm: 400,
          md: 1000
        }
      }}>
        We help business <br />
        grow and innovate
      </Typography>
      <Typography  sx={{
        fontSize: {
          xs: '0.3rem',
          sm: '0.5rem',
          md: '1rem' 
        }
      }}>
        With over 10 years of experience helping businesses to find
      </Typography>
      {/* button section */}
      <Grid container columns={7} spacing={1}>
        <Grid item columns={3}>
          <Stack alignItems={{xs: 'center', md: 'start'}} >
            <Button 
              sx={{ 
                backgroundColor: COLORS.SECONDARY, 
                color: COLORS.WHITE,
                fontWeight: 'bold',
                borderRadius: 0,
                minHeight: '20px',
                width: { xs: '5%', md: 'auto' },
                fontSize: {
                  xs: '0.2rem',
                  md: '0.875rem'
                },
                textTransform: 'none'
              }}
              variant='outlined'
            >
              Our Company
            </Button>
          </Stack>
        </Grid>
        <Grid item columns={3}>
          <Stack alignItems={{xs: 'center', md: 'end'}} >
            <Button 
              component='a'
              href={`mailto: ${EMAIL}`}
              sx={{ 
                backgroundColor: COLORS.PRIMARY, 
                color: COLORS.WHITE,
                fontWeight: 'bold',
                borderRadius: 0,
                minHeight: '20px',
                width: { xs: '5%', md: 'auto' },
                fontSize: {
                  xs: '0.2rem',
                  md: '0.875rem'
                },
                textTransform: 'none'
              }}
              variant='outlined'
            >
              Get in Touch
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}