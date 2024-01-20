import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const VARIANTS_CONFIG = {
	small: {
		headerMb: 0,
		titleMb: 0.5,
		titleVariant: 'h5',
	},
	medium: {
		headerMb: 3,
		titleMb: 1,
		titleVariant: 'h4',
	},
	large: {
		headerMb: 3,
		titleMb: 1,
		titleVariant: 'h3',
	},
};

export default function CardHeader({ children, title, subtitle, size = 'medium', sx }) {
	return (
		<Stack
			mb={VARIANTS_CONFIG?.[size]?.headerMb}
			direction="row"
			justifyContent="space-between"
			flexWrap="wrap"
			sx={sx}
		>
			<Stack>
				<Typography
					variant={VARIANTS_CONFIG?.[size]?.titleVariant}
					mb={VARIANTS_CONFIG?.[size]?.titleMb}
					fontWeight="500"
					textTransform="cammelcase"
				>
					{title}
				</Typography>
				<Typography variant="body1" color="text.secondary">
					{subtitle}
				</Typography>
			</Stack>
			{children}
		</Stack>
	);
}
