import { About, Contact, Footer, Header, Home, Service, Work } from "./components"
import { useEffect, useState } from "react";

const App = () => {

  const [themeToggling, setThemeToggling] = useState(false);


  useEffect(() =>
    themeToggling
      ? window.document.body.classList.add('dark')
      : window.document.body.classList.remove('dark'),
    [themeToggling]
  )


  return (
    <>
      <Header themeToggling={themeToggling} setThemeToggling={setThemeToggling} />
      <Home themeToggling={themeToggling} />
      <About />
      <Service />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App;