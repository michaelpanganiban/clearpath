import { Open_Sans } from 'next/font/google';
import { createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { HeaderComponent } from './header-theme';
import { NavBarComponent } from './navigation-bar';


// define openSans font style
const openSans = Open_Sans({
    weight: ['300','400', '500', '700'],
    subsets: ['latin'],
    display: 'swap'
})

declare module '@mui/material/styles' {
    // eslint-disable-next-line no-unused-vars
    interface Components {
        HeaderComponent: {}
        NavBarComponent: {}
    }
}

// import custom theme styling
export const theme = createTheme({
    palette: {
        mode: 'light'
    },
    typography: {
        fontFamily: openSans.style.fontFamily
    },
    breakpoints: {
        values: {
         xs: 50,
         sm: 300,
         md: 600,
         lg: 1280,
         xl: 1920,
       }
    },

    components: {
        HeaderComponent,
        NavBarComponent
    }
})