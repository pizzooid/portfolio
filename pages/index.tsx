import Head from 'next/head'
import Image from 'next/image'
import { PropsWithChildren } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const Project: React.FC<PropsWithChildren<{ link?: string, img: { src: string, alt: string }, title: string }>> = (props) => <a href={props.link || "#"}>
    <div className='my-8 w-full rounded-lg overflow-hidden bg-black/10 shadow-lg hover:bg-black/20 hover:shadow-2xl lg:flex lg:flex-row'>
      <div className='w-full bg-white lg:w-1/2'>
        <picture>
          <img src={props.img.src} alt={props.img.alt}></img></picture></div>
      <div className='p-2'>
        <h3>{props.title}</h3>
        {props.children}
      </div>
    </div>
  </a>

  return (
    <div className="bg-gradient-to-bl from-rose-900 via-sky-900 to-slate-900 shadow-lg">
      <Head>
        <title>Pietro Palmesi - Portfolio Website</title>
        <meta name="description" content="Portfolio website for Pietro Palmesi" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className='py-5 min-h-screen p-2'>
        <div className='bg-white/30 w-fit mx-auto rounded-2xl p-10 text-slate-900 max-w-4xl'>
          <div>
            <h1 className="text-4xl md:text-8xl font-extrabold text-center mb-10">
              pietro palmesi
            </h1>
            <p className='text-center'>
              fullstack developer - frontend specialist
            </p>
            <hr className='border-slate-900 mt-4 mb-8' />
            <p>Physics Ph.D. turned digital nomad.</p>
            <p>17+ years of software development experience.</p>
            <h2 className='mt-10'>projects</h2>
            <Project key={0} {...{
              link: "https://0xplace-frontend.vercel.app/",
              title: "web3 frontend",
              img: {
                src: "/0xplace.png",
                alt: "preview of 0xplace project"
              }
            }}>
              <p>next.js, IPFS, typescript, react, ethers.js</p><p>5-star&nbsp;review</p>
            </Project>
            <Project key={1} {...{
              title: "PDF annotation tool",
              img: {
                src: "/moneycare-screenshot.png",
                alt: "preview of the money:care PDF tool"
              }
            }}>
              <p>next.js, typescript, tailwind.css, PDF.js</p>
              <p>tRPC, Azure, terraform</p>
            </Project>
            <Project key={2} {...{
              link: "https://movendos.at",
              title: "website for physical therapist",
              img: {
                src: "/movendos.png",
                alt: "preview of the website"
              }
            }}>
              <p>gatsby, typescript, css, netlify</p>
            </Project>

          </div>
        </div >
      </main >
    </div >
  )
}
