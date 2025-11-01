import Hero from '@/components/Hero'
import Services from '@/components/Services'
import "react-tooltip/dist/react-tooltip.css";

export default function Home() {
  return (
    <main>
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
    </main>
  )
}