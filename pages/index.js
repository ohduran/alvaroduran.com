import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { getAllEssays } from "@/src/api";
import Essays from "@/components/organisms/Essays";

export default function Home({ essays }) {
  return (
    <>
      <h1>Essays</h1>
      <Essays essays={essays} />
    </>
  );
}

export async function getStaticProps() {
  const essays = getAllEssays()
    .slice(0, 5)
    .map((essay) => essay.meta);

  return { props: { essays } };
}
