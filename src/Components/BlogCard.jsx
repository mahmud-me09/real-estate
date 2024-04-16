
function BlogCard({ blog }) {
    console.log(blog)
	return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
			<img
				className="w-full h-48 object-cover"
				src={blog.image}
				alt="Blog Image"
			/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{blog.title}</div>
				<p className="text-gray-700 text-base">
					{blog.content.substring(0, 120)}...
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{blog.tags.map((tag, index) => (
					<span
						key={index}
						className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>
						#{tag}
					</span>
				))}
			</div>
			<div className="px-6 py-4">
				<span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">
					{blog.author}
				</span>
				<span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
					{blog.date}
				</span>
			</div>
			<div className="flex justify-center pb-4">
				<button className="btn btn-primary">Read More</button>
			</div>
		</div>
	);
}

export default BlogCard;
