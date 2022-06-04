import { Routes, Route } from "react-router-dom";
import { CSS, Figma, Git, Home, Html, Java, JavaScript, Node, Php, ReactJs } from '../pages';

const NavPage = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/css" element={<CSS />} />
      <Route path="/php" element={<Php />} />
      <Route path="/git" element={<Git />} />
      <Route path="/html" element={<Html />} />
      <Route path="/java" element={<Java />} />
      <Route path="/node" element={<Node />} />
      <Route path="/figma" element={<Figma />} />
      <Route path="/react" element={<ReactJs />} />
      <Route path="/javascript" element={<JavaScript />} />
    </Routes>
  )
}

export default NavPage