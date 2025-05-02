import WrapperLayout from "./components/layout/WrapperLayout";
import Achievement from "./features/home/sections/Achievment";
import Documentation from "./features/home/sections/Documentation";
import Sejarah from "./features/home/sections/aboutSection/sejarah";
import VisiMisi from "./features/home/sections/aboutSection/visiMisi";
import Faq from "./features/home/sections/faq";
import ArtiLogo from "./features/home/sections/aboutSection/artiLogo";
import Hero from "./features/home/sections/hero";

function App() {
  return (
    <>
      <WrapperLayout>
        <Hero />
        <Sejarah />
        <VisiMisi />
        <ArtiLogo />
        <Achievement />
        <Documentation />
        <Faq />
      </WrapperLayout>
    </>
  );
}

export default App;
