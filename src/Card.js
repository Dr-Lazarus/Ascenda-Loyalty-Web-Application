import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
} from "@material-tailwind/react";

const HotelCard = ({ src, title, description, price }) => {
	return (
		<Card className="mt-6 w-96">
			<CardHeader className="relative h-56">
				<img className="h-full w-full" src={src} alt="" />
			</CardHeader>
			<CardBody>
				<Typography variant="h5" className="mb-2">
					{title}
				</Typography>
				<Typography>{description}</Typography>
			</CardBody>
			{price && (
				<CardFooter
					divider
					className="flex items-center justify-between py-3"
				>
					<Typography variant="small">{price}</Typography>
					<Typography
						variant="small"
						color="grey"
						className="flex gap-1"
					>
						<i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
						London
					</Typography>
				</CardFooter>
			)}
		</Card>
	);
};

export default HotelCard;
