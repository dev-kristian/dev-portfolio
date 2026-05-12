import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Websites } from '@/components/Websites'
import { Contact } from '@/components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Websites />
      <Contact />
    </>
  )
}
