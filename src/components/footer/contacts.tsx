'use client'
import { Grid, IconButton, Typography } from '@mui/material';
import { ADDRESS, CONTACT_NUMBER, EMAIL } from '@/src/enum/constants'
import { COLORS } from '@/src/enum/colors';
import { Mail, Phone, Room } from '@mui/icons-material';

export const Contacts = () => {
    return (
        <Grid
            container
            columns={{
                xs:3,
                md:4,
            }}
            spacing={0}
            marginTop={3}
        >
            <Grid item xs={3} md={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: {
                        xs: 'left',
                        md: 'center'
                    },
                    marginBottom: {
                        xs: 1
                    }
                }}
                marginLeft={{
                    xs: 1,
                    sm: 3,
                    md: 5
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: COLORS.SECONDARY,
                    }}
                >
                    <Mail
                        sx={{
                            color: COLORS.WHITE,
                        }}
                    />
                </IconButton>
                <Typography
                    fontFamily={'sans-serif'}
                    sx={{
                        color: COLORS.WHITE,
                        fontSize: {
                            xs: 14,
                        },
                        padding: 0,
                        margin: 0,
                        marginLeft: 0.5, // Reduce space between icon and text
                        transition: 'color 0.3s ease', 
                        '&:hover': {
                            color: COLORS.SECONDARY,
                            cursor: 'pointer'
                        },
                    }}
                >
                    {EMAIL}
                </Typography>
            </Grid>
            
            <Grid item xs={3} md={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: {
                        xs: 'left',
                        md: 'center'
                    },
                    marginBottom: {
                        xs: 1
                    },
                }}
                marginLeft={{
                    xs: 1,
                    sm: 3,
                    md: 5
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: COLORS.SECONDARY,
                    }}
                >
                    <Phone
                        sx={{
                            color: COLORS.WHITE,
                        }}
                    />
                </IconButton>
                <Typography
                    fontFamily={'sans-serif'}
                    sx={{
                        color: COLORS.WHITE,
                        fontSize: {
                            xs: 14,
                        },
                        padding: 0,
                        margin: 0,
                        marginLeft: 0.5, // Reduce space between icon and text
                        transition: 'color 0.3s ease', 
                        '&:hover': {
                            color: COLORS.SECONDARY,
                            cursor: 'pointer'
                        },
                    }}
                    
                >
                    {CONTACT_NUMBER}
                </Typography>
            </Grid>

            <Grid item xs={3} md={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: {
                        xs: 'left',
                        md: 'center'
                    },
                    marginBottom: {
                        xs: 1
                    }
                }}
                marginLeft={{
                    xs: 1,
                    sm: 3,
                    md: 5
                }}
            >
                <IconButton
                    sx={{
                        backgroundColor: COLORS.SECONDARY,
                    }}
                >
                    <Room
                        sx={{
                            color: COLORS.WHITE,
                        }}
                    />
                </IconButton>
                <Typography
                    fontFamily={'sans-serif'}
                    sx={{
                        color: COLORS.WHITE,
                        fontSize: {
                            xs: 14,
                        },
                        padding: 0,
                        margin: 0,
                        marginLeft: 0.5, // Reduce space between icon and text
                        transition: 'color 0.3s ease', 
                        '&:hover': {
                            color: COLORS.SECONDARY,
                            cursor: 'pointer'
                        },
                    }}
                >
                    {ADDRESS}
                </Typography>
            </Grid>
        </Grid>
    );
}