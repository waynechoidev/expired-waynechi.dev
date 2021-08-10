import React from "react";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import styles from "./blog.module.css";

import PostCard from "../../components/blog/post_card";

const sortByDate = (a, b) => {
  return new Date(b.frontMatter.date) - new Date(a.frontMatter.date);
};

export default function index({ posts, prefix }) {
  return (
    <div className={styles.container}>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} prefix={prefix} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
