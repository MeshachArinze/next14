"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Input from "./Input";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import Post from "./Post";

type posts = {
  _id: number;
  userImg: string;
  username: string;
  email: string;
  createdAt: string;
  input: string;
  photoUrl: string;
  modalPost: boolean;
};

type AppProps = {
  posts: Array<posts>;
};

function Feed({ posts }: AppProps) {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    fetchPosts();
  }, [handlePost, setHandlePost, setUseSSRPosts]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input src={""} />
      {/* Posts */}
      {!useSSRPosts
        ? realtimePosts.map((post: any) => (
            <Post key={post._id} post={post} modalPost={false} />
          ))
        : posts.map((post) => (
            <Post key={post._id} post={post} modalPost={false} />
          ))}
    </div>
  );
}

export default Feed;
