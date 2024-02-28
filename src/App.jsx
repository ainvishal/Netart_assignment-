import { Heading } from '../components/heading'
import { Image } from '../components/image'
import { Section } from '../components/section'
import { Summary } from '../components/summary'
import { Article } from '../components/article'
import { Footer } from '../components/footer'
import './App.css'

function App() {


  return (
    <>
      <div className='body'>
          <Heading/>
          <div className='main'>
            <Image imgclass={"awardimg"} imgsrc={"../src/assets/1.png"} imgalt={"award"}/>
            <Section />
          </div>
          <Summary />
          <Article />
          <Footer />
      </div>

    </>
  )
}

export default App
