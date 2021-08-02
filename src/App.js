import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModeContext from './Context/index'
import Header from './components/Header';
import Projects from './components/Projects';

import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  state = {
    activeMode: false
  }

  changeMode = () => {
    this.setState(prevState => ({activeMode: !prevState.activeMode}))
  }

  render(){
    const {activeMode} = this.state
    return (
      <ModeContext.Provider value={{
        activeMode,
        changeMode: this.changeMode
      }}>
        <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </BrowserRouter>
      </ModeContext.Provider>
    )
  }
}

export default App;
