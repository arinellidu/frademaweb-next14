import type { BoxProps } from '@mui/material/Box';
import type { ICaseStudyProps } from 'src/types/case-study';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from 'src/assets/icons';
import { locale } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';

// ----------------------------------------------------------------------

type Props = BoxProps & Partial<ICaseStudyProps>;

export function MarketingCaseStudyDetailsSummary({
  sx,
  title,
  website,
  category,
  createdAt,
  description,
  ...other
}: Props) {
  const renderSocials = () => (
    <Box sx={{ display: 'flex' }}>
      {_socials.map((social) => (
        <IconButton key={social.label}>
          {social.value === 'twitter' && <TwitterIcon />}
          {social.value === 'facebook' && <FacebookIcon />}
          {social.value === 'instagram' && <InstagramIcon />}
          {social.value === 'linkedin' && <LinkedinIcon />}
        </IconButton>
      ))}
    </Box>
  );

  const renderDivider = () => <Divider sx={{ my: 3, borderStyle: 'dashed' }} />;

  const renderItem = (label: string, value?: string | React.ReactNode) => (
    <Box sx={{ '&:not(:first-of-type)': { mt: 2 } }}>
      <Typography className="text-green-600" variant="overline" sx={{ mb: 1, display: 'block' }}>
        {label}
      </Typography>
      {typeof value === 'string' ? <Typography variant="body2">{value}</Typography> : value}
    </Box>
  );

  // const todaySeconds = new Date().getSeconds();
  const todayHours = new Date().getHours();
  const todayMinutes = new Date().getMinutes();

  return (
    <Box
      sx={[
        {
          p: 5,
          display: 'flex',
          borderRadius: 2,
          flexDirection: 'column',
          bgcolor: 'background.neutral',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {/* <Typography
        className="hover:text-green-600"
        variant="overline"
        sx={{ mb: 2, color: 'text.disabled' }}
      ></Typography> */}
      <Typography className="text-green-600" variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
      {renderDivider()}
      {renderItem(
        'WhatsApp',

        <Link className="hover:text-green-600" variant="body2" color="inherit">
          botar função whatsapp API {website}
        </Link>
      )}
      {renderItem('Informação Atualizada Em:')}
      {todayHours}h{todayMinutes}min
      {renderDivider()}
      <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">Compartilhe:</Typography>
        {renderSocials()}
      </Box>
    </Box>
  );
}
