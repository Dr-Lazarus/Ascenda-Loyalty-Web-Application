import { Card } from "flowbite-react";

const HotelCard = ({ src, title, description, price }) => {
	return (
		<Card imgAlt="" imgSrc={src} className="mt-6 w-96">
			<div>
				<div>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						{title}
					</h5>
				</div>
				{price && (
					<p className="font-normal text-gray-700 dark:text-gray-400">
						{description}
					</p>
				)}
			</div>
		</Card>
	);
};

export default HotelCard;

// {
// 	/* <Card className="mt-6 w-96"> */
// }

// {
// 	/* {price && (
// 	<CardFooter
// 		divider
// 		className="flex items-center justify-between py-3"
// 	>
// 		<Typography variant="small">{price}</Typography>
// 		<Typography
// 			variant="small"
// 			color="grey"
// 			className="flex gap-1"
// 		>
// 			<i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
// 			London
// 		</Typography>
// 	</CardFooter>
// )}
// </Card> */
// }
