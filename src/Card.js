const Card = ({ src, title, description, price }) => {
	return (
		<div className='m-3 rounded-xl overflow-hidden drop-shadow-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
			<img className='object-fill w-full min-w-xl min-h-lg' src={src} alt='' />
			<div className='mt-[-5%] rounded-xl p-6 pt-6  border'>
				<h2 className='text-lg font-bold'>{title}</h2>
				<h4 className='text-sm'>{description}</h4>
				<h3 className='italic'>{price}</h3>
			</div>
		</div>
	);
};

export default Card;
