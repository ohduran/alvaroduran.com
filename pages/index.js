import { getAllEssays } from '@/src/api'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import UnderlineHoverLink from '@/components/atoms/UnderlineHoverLink'
import { P } from '@/components/molecules/Typography'
import Essays from '@/components/molecules/sections/Essays'
import ComingSoon from '@/components/organisms/ComingSoon'
import PostsListItem from '@/components/molecules/PostsListItem'
import ReadMore from '@/components/atoms/ReadMore'

export default function Home({ essays }) {
  return (
    <DefaultLayout>
      <main>
        <header id='heroSection'>
          <h1 className='font-family-lora text-3xl max-w-full mb-4 leading-tighter md:max-w-lg md:text-5xl'>
            <span className='font-semibold'>Álvaro</span> is an online payments
            expert specialised in the travel industry.
          </h1>
          <P>
            Product-minded, Test-obsessed, Improvement-driven.
            <br />
            Currently part of the Fintech Acquiring team at{' '}
            <UnderlineHoverLink
              href='https://kiwi.com'
              className='text-kiwi-product-normal hover:text-kiwi-product-darker'
            >
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

export function getStaticProps() {
  const essays = getAllEssays()
    .slice(0, 5)
    .map((essay) => essay.meta)

  return { props: { essays } }
}
