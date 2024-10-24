import { Grid, Stack, Typography } from '@mui/material';
import * as Icon from '@mui/icons-material';
import { servicesItems } from './types';
import { COLORS } from '@/src/enum/colors';

interface ServiceItemProps {
  obj: servicesItems;
}

// eslint-disable-next-line no-undef
export const ServiceItems: React.FC<ServiceItemProps> = ({ obj }) => {
		const IconComponent = Icon[obj.icon as keyof typeof Icon];
    return (
			<>
				<Grid item>
					<Stack alignItems={{ xs: 'start' }}>
						<IconComponent
							sx={{
								color: COLORS.SECONDARY,
								'&:hover': { color: COLORS.PRIMARY},
								fontSize: {
									xs: 'medium',
									sm: 50,
									lg: 100
								}
							}} />
					</Stack>
				</Grid>
				<Grid item xs={8} md={2}>
					<Stack alignItems={{ xs: 'start' }}>
						<Typography
							variant='h5'
							fontWeight='bold'
							fontSize={{
								xs: 10,
								sm: 'large'
							}}
						>
							{obj.title}
						</Typography>
						<Typography
							fontWeight='light'
							alignItems={{ xs: 'center', md: 'start' }}
							fontSize={{
								xs: 10,
								sm: 'medium'
							}}
						>
							{obj.description}
						</Typography>
					</Stack>
				</Grid>
			</>
    );
}