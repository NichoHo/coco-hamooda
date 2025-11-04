import '../styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import "react-tooltip/dist/react-tooltip.css";
import 'flag-icons/css/flag-icons.min.css';


export const metadata = {
  title: 'Coco Hamooda | Global Supplier of Premium Natural Charcoal',
  description: 'Crafting premium natural charcoal and delivering it worldwide since 1995.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-gray-900 scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
