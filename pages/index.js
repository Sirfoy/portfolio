import About from "../edreya/src/components/About";
import Contact from "../edreya/src/components/Contact";
import Home from "../edreya/src/components/Home";
import News from "../edreya/src/components/News";
import Portfolio from "../edreya/src/components/Portfolio";
import Layout from "../edreya/src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      {/* HOME */}
      <Home />
      {/* /HOME */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* PORTFOLIO */}
      <Portfolio />
      {/* /PORTFOLIO */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact />
    </Layout>
  );
};
export default Index;
