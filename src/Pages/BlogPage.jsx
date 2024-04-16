import React, { useEffect, useState } from "react";
import BlogCard from "../Components/BlogCard";

const BlogPage = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch("./blog.json")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-6">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
};

export default BlogPage;
