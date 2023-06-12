import { Experience } from './components/experience/experience'
import { Header } from './components/header/header'
import { EmailIcon } from './components/icons/email-icon'
import { Info } from './components/information/information'
import { SocialBtns } from './components/social-btns/social-btns'
import './styles/home.scss'
import Image from 'next/image'
export default function Home() {
  return (
    <main className='container'>
    
    <Header/>

    <Experience/>

    <Info/>

        <div className="buttons">
          <SocialBtns/>
          <a className='btn-primary' href="mailto:gabriel.desouzasilva2014@gmail.com">
            Contact Me
           <EmailIcon/>
          </a>
        </div>
    </main>
  )
}
