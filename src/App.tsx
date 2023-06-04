import "./App.css";
import { Header } from "./components/header";
import { WelcomePage } from "./components/welcome";
import { VirtualTour } from "./components/virtualTour";
import { PictureExplore } from "./components/pictureExplore";
import { VideoJourney } from "./components/videoJourney";

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