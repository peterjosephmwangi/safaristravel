import BackTop from "./components/BackTop";
import Footer from "./components/Footer";
import HeaderMain from "./components/HeaderMain";

import Main from "./components/Main";
import "./globals.css";
export default function Home() {
  return (
    <div>
      <HeaderMain />
      <Main />
      <Footer />
      <BackTop />
    </div>
  );
}
