import PropTypes from "prop-types";
export function ArticleList({ articles }) {
	return (
		/* container */
		<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center'>
			{articles.map((article) => (
				/* card */
				<div
					key={article.id}
					className='w-full max-w-[360px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800'>
					<img
						className='object-cover w-full h-56'
						src={article.image}
						alt='avatar'
					/>
					{/* title + description */}
					<div className='py-5 px-3 text-center'>
						<h2 className='block text-xl font-bold text-gray-800 dark:text-white'>
							{article.title}
						</h2>
						<p className='text-sm text-gray-700 dark:text-gray-200'>
							{article.description}
						</p>
					</div>
					{/* footer */}
					<div className='w-full flex justify-between text-xs text-gray-400 px-3 pb-3'>
						<span>{article.date}</span>
						<span>{article.ReadingTime}</span>
					</div>
				</div>
			))}
		</div>
	);
}

ArticleList.propTypes = {
	articles: PropTypes.array
};
