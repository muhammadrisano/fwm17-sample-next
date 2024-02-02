import React from "react";
import {getPost} from '@/service/post'
const PostSection = async() => {

  const posts = await getPost()
  return (
    <div>
      <h2>Judul Post : </h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostSection;
