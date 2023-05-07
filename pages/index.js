import { getAllEssays } from '@/src/api'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import UnderlineHoverLink from '@/components/atoms/UnderlineHoverLink'
import { H4, P } from '@/components/molecules/Typography'
import Essays from '@/components/molecules/sections/Essays'
import ComingSoon from '@/components/organisms/ComingSoon'
import PostsListItem from '@/components/molecules/PostsListItem'
import ReadMore from '@/components/atoms/ReadMore'

export default function Home({ essays }) {
  return (
    <DefaultLayout>
      <header id='heroSection' className='px-2 sm:px-6 mx-auto py-2 sm:py-6'>
        <h1 className='font-family-lora text-3xl max-w-full mb-4 leading-tighter md:max-w-lg md:text-5xl'>
          <span className='font-bold'>Álvaro</span> is an online payments expert
          specialised in the travel industry.
        </h1>
        <P>
          Product-minded, Test-obsessed, Improvement-driven.
          <br />
          Part of the Fintech Acquiring team at{' '}
          <UnderlineHoverLink
            href='https://kiwi.com'
            className='text-kiwi-product-normal hover:text-kiwi-product-darker'
          >
            Kiwi.com
          </UnderlineHoverLink>
          .
        </P>
      </header>
      <Essays
        className='px-2 sm:px-6 mx-auto py-6'
        essays={essays.slice(0, 4)}
      />
      <ComingSoon
        className='flex justify-between w-full'
        title='The Fraud Provider Series'
        subtitle='How merchants straddle the line between crime and payment experience.'
        href='/series/fps'
      />
      <section className='flex md:flex-row flex-col px-2 sm:px-6 mx-auto py-6'>
        <div id='moreEssays' className='px-2 sm:px-6 py-6 mx-auto'>
          <H4>More Essays</H4>
          {/* The Next Four Essays */}
          {essays.slice(4, 8).map((essay) => {
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
        </div>
      </section>

      {/* <section id='library'>
          <Link href='/library'>
            Library
          </Link>
        </section> */}
    </DefaultLayout>
  )
}

export function getStaticProps() {
  const essays = getAllEssays().map((essay) => essay.meta)

  return { props: { essays } }
}
