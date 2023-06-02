import PropTypes from "prop-types";

export function ButtonList({ categories, filterCategory }) {
	return (
		/* categories */
		<div className='w-full flex flex-wrap gap-10 justify-center my-12'>
			{categories.map((category) => (
				<button
					className='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
					type='button'
					key={category}
					onClick={() => filterCategory(category)}>
					{category}
				</button>
			))}
		</div>
	);
}

ButtonList.propTypes = {
	categories: PropTypes.array,
	filterCategory: PropTypes.func
};
