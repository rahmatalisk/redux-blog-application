import React from "react";
import LikeSaved from "./LikeSaved";

const BlogDetail = ({ blog }) => {
  const { image, likes, title, description, tags, isSaved ,id} = blog;

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag, i) => (
            <span key={i}>#{tag} </span>
          ))}
        </div>

        {<LikeSaved isSaved={isSaved} likes={likes} id={id} />}
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetail;
