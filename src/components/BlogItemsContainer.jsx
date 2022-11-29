import React, { useState } from 'react';
import { BlogItems } from '../data/BlogData';
import BlogCard from './subcomponents/BlogCard';

function BlogItemsContainer() {
  const postPerPage = 6;
  const [start, setStart] = useState(0);
  const [finish, setFinish] = useState(6);

  const size = Object.keys(BlogItems).length;
  const nextPage = () => {
    if (finish >= size) {
      setFinish(size);
    } else {
      setStart(start + postPerPage);
      setFinish(finish + postPerPage);
      window.scrollTo(0, 700);
    }
    if (start === size - postPerPage) {
      setStart(size - postPerPage);
    }
  };
  const prevPage = () => {
    if (start === 0) {
      setStart(0);
    } else {
      setStart(start - postPerPage);
      setFinish(finish - postPerPage);
      window.scrollTo(0, 700);
    }
    if (finish === postPerPage) {
      setFinish(6);
    }
  };

  return (
    <div className="blog-container">
      {BlogItems.slice(start, finish).map((item, index) => (
        <BlogCard
          key={index}
          image={item.foodImg}
          title={item.title}
          date={item.date}
          author={item.author}
          comment={item.comment}
          text={item.text}
        />
      ))}

      <div className="button-container">
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default BlogItemsContainer;
