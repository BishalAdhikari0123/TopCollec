import React from 'react';
import './BlogList.css'; // Importing CSS

const BlogList = () => {
  return (
    <div className="blog-list">
      <h2 className="blog-title">Blog Title: 1</h2>
      <p className="blog-meta">Published By: Author Name, Date</p>
      <p className="popular">Popular</p>
      <div className="blog-content">
        <p>This is a blog description or content that will be displayed.</p>
        <img src="/path-to-featured-photo.jpg" className="featured-photo" alt="Featured" />
      </div>
    </div>
  );
};

export default BlogList;
