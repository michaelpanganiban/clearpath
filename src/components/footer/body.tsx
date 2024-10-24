'use client'

import { COLORS } from '@/src/enum/colors';
import { Box, Grid, Typography } from '@mui/material';
import { NAV_ITEMS } from '@/src/enum/constants';
import PlayArrow from '@mui/icons-material/PlayArrow';
import React, { Dispatch, SetStateAction } from 'react';

interface FooterInterface {
	setViewComponents: Dispatch<SetStateAction<string>>;
}

export const FooterBody:React.FC<FooterInterface> = ({setViewComponents}) => {
    const navItems = NAV_ITEMS.map((item, index) => {
        return (
            <Box 
                key={index} 
                sx={{ 
                    display: 'flex',
                }}
            >
                <Typography
                    sx={{
                        color: COLORS.WHITE,
                        fontSize: 13,
                        marginTop: 2,
                        textAlign: 'left',
                        marginLeft: {
                            xs: 2,
                            md: 15
                        },
                        transition: 'color 0.3s ease', 
                        '&:hover': {
                            color: COLORS.SECONDARY,
                            cursor: 'pointer'
                        },
                        textDecoration: 'none'
                    }}
                    component='a'
                    href={`${item.id}`}
                    onClick={() => setViewComponents('/')}
                >
                    <PlayArrow 
                        sx={{
                            color: 'white',
                            fontSize: 12,
                            marginRight: 1,
                            transition: 'color 0.3s ease', 
                            '&:hover': {
                                color: COLORS.SECONDARY,
                                cursor: 'pointer'
                            },
                        }}
                    />
                    { item.name }
                </Typography>
            </Box>
        )
    })

    return (
        <Grid container columns={2} spacing={0}>
            <Grid item xs={2} md={1}>
                <Typography
                    sx={{
                        color: COLORS.WHITE,
                        fontSize: 13,
                        marginTop: 2,
                        textAlign: 'left',
                        marginLeft: {
                            xs: 2,
                            md: 15
                        }
                    }}
                >
                    Lorem ipsum dolor sit consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna veniam aliqua.Ut enim ad minim veniam <br /><br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                </Typography>
            </Grid>
            <Grid item xs={2} md={1}>
                { navItems }
            </Grid>
        </Grid>
    );
} 