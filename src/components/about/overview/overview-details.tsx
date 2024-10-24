'use client'

import { COLORS } from '@/src/enum/colors';
import { Box, Grid, Typography } from '@mui/material';

export const OverviewDetails = () => {
    return (
        <Box
            marginLeft='10%'
            marginTop='2%'
            display='flex' 
			alignItems='center' 
			position='relative' 
            width='80%'
        >
            <Grid container columns={1}>
                <Grid item xs={1}>
                    <Typography
                        sx={{
                                alignItems: 'center',
                                overflow: 'hidden',
                                fontWeight: 'bold',
                                whiteSpace: 'normal',
                                marginBottom: 2,
                                fontSize: {
                                    xs: 15,
                                    lg: 20
                                },
                                color: COLORS.BLACK
                            }} 
                        >
                        Want to know more about Finance?
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography
                        sx={{
                            fontSize: 15,
                            alignItems: 'center',
                            overflow: 'hidden',
                            whiteSpace: 'normal',
                        }} 
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}