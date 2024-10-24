'use strict'

import { COLORS } from '@/src/enum/colors';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { EMAIL } from '@/src/enum/constants'

export const ContactUs = () => {
    return (
		<Stack 
            sx={{
                backgroundColor: COLORS.DARK,
                scrollMarginTop: {
					xs: 230,
					md: 180,
					lg: 145
				}
            }}
            minHeight={250}
            id='contact-us'
		>
			<Grid 
                container
                columns={2}
                spacing={10}
            >
                <Grid item xs={1} 
                    sx={{ textAlign: 'right' }}
                >
                    <Typography
                        variant='h5'
                        fontWeight='bold'
                        fontFamily={'sans-serif'}
                        sx={{
                            color: COLORS.WHITE,
                            fontSize: {
                                xs: 12,
                                sm: 'large',
                            },
                            marginTop: {
                                xs: '80%',
                                sm:'50%',
                                md: '15%',
                                lg: '8%'
                            }
                        }}
                    >
                        GET IN TOUCH
                    </Typography>
                    <Typography
                        fontWeight='light'
                        fontFamily={'sans-serif'}
                        sx={{
                            color: COLORS.WHITE,
                            fontSize: {
                                xs: 9,
                                sm: 'small',
                                md:  15
                            }
                        }}
                        marginTop='5%'
                    >
                        If you need to speak to us about a general query fill <br />
                        in the form below and we will call you back within <br /> 
                        the same working day.
                    </Typography>
                </Grid>
                <Grid item xs={1} sx={{ textAlign: 'left' }}>
                    <Typography
                        fontWeight='bold'
                        fontFamily={'sans-serif'}
                        sx={{
                            color: COLORS.GRAY,
                            fontSize: {
                                xs: 13,
                            },
                            marginTop: {
                                xs: '80%',
                                sm:'50%',
                                md: '15%',
                                lg: '8%'
                            }
                        }}
                    >
                        Want to know more? <br />
                        Send us a message <br />
                        and we will get back to you
                    </Typography>
                    <Button 
                        component="a" 
                        href={`mailto:${EMAIL}`} 
                        sx={{ 
                            backgroundColor: COLORS.SECONDARY, 
                            color: COLORS.WHITE,
                            fontWeight: 'bolder',
                            borderRadius: 0,
                            minHeight: '47px',
                            width: { xs: 'auto' },
                            fontSize: {
                                xs: 7,
                                md: 13
                            },
                            marginTop: 2
                        }}
                        variant='outlined'
                        >
                        SEND US AN EMAIL
                    </Button>
                </Grid>
            </Grid>
		</Stack>
	);
}