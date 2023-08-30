import { Routes, Route } from "react-router-dom";
import Home from "./general/Home";
import Header from "./general/Header";
import Sidbar from "./general/Sidbar";
import Footer from "./general/Footer";
import Page404 from "./general/Page404";
import { Layout } from "antd";
import About from "./general/About";
const { Content } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header />
      <Layout>
        <Sidbar />
        <Content className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default App;
