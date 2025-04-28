import WrapperLayout from "./components/layout/WrapperLayout";
import Achievement from "./features/home/sections/Achievment";
import Documentation from "./features/home/sections/Documentation";
import VisiMisi from "./features/home/sections/aboutSection/visiMisi";

function App() {
  return (
    <>
      <WrapperLayout>
        <h1 className="text-3xl font-bold text-blue-800 underline">HMTI UNTAD!</h1>
        <VisiMisi />
        <Achievement />
        <Documentation />
      </WrapperLayout>
    </>
  );
}

export default App;
