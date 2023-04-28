import { getAllEssays } from '@/src/api'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import UnderlineHoverLink from '@/components/atoms/UnderlineHoverLink'
import Link from 'next/link'
import { H1, P } from '@/components/molecules/Typography'
import Essays from '@/components/molecules/sections/Essays'
import ComingSoon from '@/components/organisms/ComingSoon'
import PostsListItem from '@/components/molecules/PostsListItem'
import ReadMore from '@/components/atoms/ReadMore'

export default function Home({ essays }) {
  return (
    <DefaultLayout>
      <main>
        <header id='heroSection'>
          <H1>
            <span className=''>Maggie</span> makes visual essays about
            programming, design, and anthropology.
          </H1>
          <P>
            Designer, anthropologist, and mediocre developer
            <br />
            Currently leading design at{' '}
            <UnderlineHoverLink href='https://kiwi.com'>
              Kiwi.com
            </UnderlineHoverLink>{' '}
          </P>
        </header>
        <Essays
          className='px-2 sm:px-6 mx-auto py-4'
          essays={essays.slice(-5, -1)}
        />
        <ComingSoon
          className='flex justify-between px-2 sm:px-6 mx-auto'
          title='The Fraud Provider Series'
          subtitle='Accelerate your acquisition of business expertise.'
          href='/series/fps'
        />
        <section id='moreEssays'>
          {/* The Next Four Essays */}
          {essays.slice(1, 5).map((essay) => {
            return (
              <PostsListItem
                key={essay.slug}
                href={`essays/${essay.slug}`}
                title={essay.title}
                slug={essay.slug}
                excerpt={essay.excerpt}
                image_source={essay.image_source}
              />
            )
          })}
          <ReadMore href='/essays' />
        </section>
        {/* <section id='library'>
          <Link href='/library'>
            Library
          </Link>
        </section> */}
      </main>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const essays = getAllEssays()
    .slice(0, 5)
    .map((essay) => essay.meta)

  return { props: { essays } }
}
