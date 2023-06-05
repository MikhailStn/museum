import "./App.css";
import { Header } from "./components/header/header";
import { WelcomePage } from "./components/welcome/welcome";
import { VirtualTour } from "./components/virtualTour/virtualTour";
import { PictureExplore } from "./components/pictureExplore/pictureExplore";
import { VideoJourney } from "./components/videoJourney/videoJourney";

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <WelcomePage />
      <VirtualTour />
      <PictureExplore />
      <VideoJourney />
    </div>
  );
}