import './App.css';
import { Header } from './components/header/header';
import { WelcomePage } from './components/welcome/welcome';
import { VirtualTour } from './components/virtualTour/virtualTour';
import { PictureExplore } from './components/pictureExplore/pictureExplore';
import { VideoJourney } from './components/videoJourney/videoJourney';
import { ArtGallery } from './components/artGallery/artGallery';
import { BuyTickets } from './components/buyTickets/buyTickets';
import { Parallax } from './components/parallax/parallax';
import { Contacts } from './components/contacts/contacts';
import { Footer } from './components/footer/footer';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <WelcomePage />
      <VirtualTour />
      <PictureExplore />
      <VideoJourney />
      <ArtGallery />
      <BuyTickets />
      <Parallax />
      <Contacts />
      <Footer />
    </div>
  );
}
