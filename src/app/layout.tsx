import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import { Stack } from '@mui/material'
import ThemeRegistry from '../components/theme/ThemeRegistry'
import Header from '../components/header/page'
import { DefaultComponents } from '../components/pages';

export const metadata: Metadata = {
  title: 'ClearPath Bookkeeping',
  description: 'Hello there',
}


export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <Stack sx={{ minHeight: '5vh' }}>
            <Stack>
              {children}
            </Stack>
            <Header />
            <DefaultComponents />
          </Stack>
        </body>
      </ThemeRegistry>
    </html>
  )
}
