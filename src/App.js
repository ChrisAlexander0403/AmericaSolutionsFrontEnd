import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';

import ScrollToTop from './hooks/useScrollToTop';
import { ThemeContext } from './context/ThemeContext';

import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Sora", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background: ${props => props.isDark ? '#181818' : '#fff'};
  }

  body::-webkit-scrollbar {
    width: 10px;
    background: #3d3d3d;
  }

  body::-webkit-scrollbar-thumb {
    background: #ffef00;
    border-radius: 4px;
  }
`;

function App() {

  const [isDark, setIsDark] = useState(false);

  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/> 
      </Helmet>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <GlobalStyle isDark={isDark}/>
        <NavBar />
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
