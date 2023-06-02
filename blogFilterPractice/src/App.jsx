import { ButtonList, ArticleList } from "./components";
import data from "./data/data";
import { useState } from "react";

function App() {
	const allCategories = [
		"All",
		...new Set(data.map((article) => article.category))
	];

	/* lo comenté porque hasta ahora fue innecesario */
	// const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === "All") {
			setArticles(data);
			return;
		}
		const filteredData = data.filter(
			(article) => article.category === category
		);
		setArticles(filteredData);
	};

	return (
		<>
			{/* title */}
			<div className='w-full h-auto min-h-screen bg-gray-900'>
				<h1 className='text-3xl font-thin text-center pt-5 text-white'>
					Filter <span>Blog</span> Basics
				</h1>
				<ButtonList
					categories={allCategories}
					filterCategory={filterCategory}
				/>
				<ArticleList articles={articles} />
			</div>
		</>
	);
}

export default App;
