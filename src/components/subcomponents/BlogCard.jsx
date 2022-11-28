import React from 'react';

function BlogCard(props) {
  return (
    <div className="blogcard">
      <img src={props.image} alt={props.title} />
      <div className="details">
        <h3 className="date">{props.date}</h3>
        <h3 className="author">{props.author}</h3>
        <div className="comment">
          <i className="fa-regular fa-message"></i>
          <h3>{props.comment}</h3>
        </div>
      </div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default BlogCard;
