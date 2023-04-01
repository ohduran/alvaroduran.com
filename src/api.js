«import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

const ESSAYS_PATH = path.join(process.cwd(), "posts", "essays");

export const getSlugs = () => {
  const paths = sync(`${ESSAYS_PATH}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    const [slug, _extension] = filename.split(".");
    return slug;
  });
};

export const getAllEssays = () => {
  const essays = getSlugs()
    .map((slug) => getEssayFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1;
      if (b.meta.date < a.meta.date) return -1;
      return 0;
    })
    .reverse();

  return essays;
};

export const getEssayFromSlug = (slug) => {
  const essayPath = path.join(ESSAYS_PATH, `${slug}.mdx`);

  const source = fs.readFileSync(essayPath);

  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? "",
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      date: data.date.toString(),
    },
  };
};
