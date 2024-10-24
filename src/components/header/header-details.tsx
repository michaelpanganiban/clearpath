import { Grid, Stack, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import HelpSharpIcon from '@mui/icons-material/HelpSharp';
import Button from '@mui/material/Button';
import { COLORS } from '@/src/enum/colors';
import { CONTACT_NUMBER, EMAIL } from '@/src/enum/constants';

export const HeaderDetails = () => {
    return (
        <Toolbar variant='dense'>
          <Grid container columns={6} spacing={1} alignItems={'center'}>
            <Grid item xs={6} md={3} lg={2}>
              <Stack alignItems={{xs: 'center', md: 'end' }}>
                <Typography style={{ fontSize: 'small', borderSpacing: '0px 10px' }} borderRight={{ xs: 'none', sm: 'none', md: '1px solid #7194b7' }}>
                  <CallSharpIcon 
                    style={{ fontSize: 'small'}}
                  /> &nbsp;
                  Call us: { CONTACT_NUMBER }&nbsp;&nbsp;
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3} lg={2}>
              <Stack alignItems={{xs: 'center', md: 'start' }}>
                <Typography style={{ fontSize: 'small' }} >
                  <EmailSharpIcon 
                    style={{ fontSize: 'small' }} 
                  /> &nbsp;
                  Email: { EMAIL }
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={6} md={3} lg={1}>
              <Stack alignItems={{xs: 'center', md: 'end'}}>
                <Typography style={{ fontSize: 'small' }} >
                  <HelpSharpIcon 
                    style={{ fontSize: 'small' }} 
                  /> &nbsp;
                  Have any questions?
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} md={3} lg={1}>
              <Stack alignItems={{xs: 'center', md: 'start'}} >
                <Button 
                  component='a'
                  href={`mailto: ${EMAIL}`}
                  sx={{ 
                    backgroundColor: COLORS.SECONDARY, 
                    color: COLORS.WHITE,
                    fontWeight: 'bolder',
                    borderRadius: 0,
                    minHeight: '47px',
                    width: { xs: '100%', sm: 'auto' }
                  }}
                  variant='outlined'
                >
                  GET AN APPOINTMENT
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Toolbar>
    );
}