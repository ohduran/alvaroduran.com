import { getAllEssays } from '@/src/api'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import UnderlineHoverLink from '@/components/atoms/UnderlineHoverLink'
import Link from 'next/link'
import { H1, H2 } from '@/components/molecules/Typography'
import EssaySection from '@/components/molecules/sections/essaySection'

export default function Home({ essays }) {
  return (
    <DefaultLayout>
      <main>
        <header id='heroSection'>
          <H1>
            <span className='font-semibold'>Maggie</span> makes visual essays
            about programming, design, and anthropology.
          </H1>
          <H2>
            Designer, anthropologist, and mediocre developer
            <br />
            Currently leading design at{' '}
            <UnderlineHoverLink href='https://ought.org'>
              Ought
            </UnderlineHoverLink>{' '}
          </H2>
        </header>
        <section
          id='Essays'
          style={{
            gridArea: 'essays',
          }}
        >
          <Link href='/essays'>
            <SectionHeader>Essays</SectionHeader>
          </Link>
          <SubHeader>
            Opinionated, longform narrative writing with an agenda
          </SubHeader>
          <EssaySection essays={essays.slice(0, 4)} />
        </section>
        <section id='library'>
          <Link href='/library'>
            <SectionHeader>Library</SectionHeader>
          </Link>
        </section>
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

function SectionHeader({ children }) {
  return <h3>{children}</h3>
}

function SubHeader({ children }) {
  return <p>{children}</p>
}
