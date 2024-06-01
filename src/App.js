import Certificate from "./components/Certificate";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinUs from "./components/JoinUs";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <HeroSection />
      <JoinUs />
      <Certificate />
      <Header />
    </Wrapper>
  );
}

export default App;
