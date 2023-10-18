import './assets/scroll.css'
import { Content } from "./components/Content";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { LargeBar } from "./components/LargeBar";
import { Carousel } from "./components/Carousel ";
import { Slider } from "./components/Slider";
import { setting } from "./config";
import { Product } from "./components/Product";
import { Banner } from "./components/Banner";
import { QNA } from "./components/QNA";
import { Offer } from "./components/Offer";
import { Brand } from "./components/Brand";
import { Blog } from "./components/Blog";
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="w-full min-h-screen bg-default scroll-smooth">
      <AnnouncementBar text={'FREE SHIPPING ON ALL U.S ORDERS $50+'} />
      <LargeBar />
      <Content>
        <Carousel />
        <Product />
        <Slider title={'Our Bestsellers'} data={setting.slider} />
        <Slider title={'Under $25'} data={setting.slider2} />
        <Banner />
        <QNA />
        <Offer />
        <Brand />
        <Blog />
      </Content>
      <Footer />
    </div>
  )
}

export default App
