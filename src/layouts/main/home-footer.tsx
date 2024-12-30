import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Logo } from 'src/components/logo';

import { Typebot } from 'src/components/typebot/typebot';

import { APP_NAME } from 'lib/constants';

// ----------------------------------------------------------------------

export function HomeFooter({ sx, ...other }: BoxProps) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box component="footer" sx={[{ py: 8 }, ...(Array.isArray(sx) ? sx : [sx])]} {...other}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typebot />
          <Logo isSingle sx={{ mb: 4, justifyContent: 'center', alignContent: 'center' }} />
          <Box component="span" sx={{ color: 'text.secondary', typography: 'caption' }}>
            {currentYear} {APP_NAME} © All rights reserved.
          </Box>
        </Container>
      </Box>
    </>
  );
}
