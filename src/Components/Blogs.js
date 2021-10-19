import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";
import "./Cform.js";
import "../styling/blogs.css";
import Cform from "./Cform.js";

const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=74da443369bd202a1f3146a275d761fc`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();
  const [formOpen, setFormOpen] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(blog_url)
      .then((response) => {
        dispatch(setBlogData(response.data));
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchInput]);

  return (
    <div className="blog__page">
      <button style={{float:"right",marginLeft:"-100px",backgroundColor:"green",color:"white"}} onClick={() => setFormOpen(!formOpen)} className="blog__page__header">
        New Post
      </button>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      {formOpen && <Cform/>}
      <form/>
      <div className="blogs">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" href={blog.url}>
            <div>
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                {/* <p>{blog.publishedAt}</p> */}
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1 className="no__blogs">
            No blogs available. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
