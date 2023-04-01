import Essays from "@/components/organisms/Essays";
import { getAllEssays } from "@/src/api";
import Head from "next/head";

export default function TagPage({ slug, essays }) {
  return (
    <>
      <Head>
        <title>{`Tag: ${slug}`}</title>
      </Head>

      <h1>Tag: {slug}</h1>
      <Essays essays={essays} />
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const essays = getAllEssays().filter((essay) =>
    essay.meta.tags.includes(slug)
  );

  return {
    props: {
      slug,
      essays: essays.map((essay) => essay.meta),
    },
  };
};

export const getStaticPaths = async () => {
  const essays = getAllEssays();

  const tags = new Set(essays.map((essay) => essay.meta.tags).flat());

  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
