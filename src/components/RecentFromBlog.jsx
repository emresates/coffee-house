import React from 'react';
import BlogCard from './subcomponents/BlogCard';
import HeaderTitle from './subcomponents/HeaderTitle';
import { BlogItems } from '../data/BlogData';

function RecentFromBlog() {
  return (
    <div className="recentblog">
      <HeaderTitle
        header="Read"
        title="Recent From Blog"
        p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
      <div className="recentblog-gallery">
        {BlogItems.slice(0, 3).map((item) => (
          <BlogCard
            image={item.foodImg}
            date={item.date}
            author={item.author}
            title={item.title}
            comment={item.comment}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentFromBlog;
