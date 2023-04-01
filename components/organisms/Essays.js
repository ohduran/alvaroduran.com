import React from "react";
import Link from "next/link";

export default function Essays({ essays }) {
  return (
    <>
      <ul>
        {essays.map((essay) => (
          <li key={essay.slug}>
            <div>
              <Link href={`/essays/${essay.slug}`}>{essay.title}</Link>
              <p>{essay.excerpt}</p>
              <p>
                {essay.tags.map((tag) => (
                  <Link href={`/tags/${tag}`} key={tag}>
                    {tag}
                  </Link>
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
