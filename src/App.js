import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList'
import Episodelist from './components/EpisodeList'
import {Route, NavLink} from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <NavLink to='/'>Characters</NavLink>
        <NavLink to='/location'>Location</NavLink>
        <NavLink to='/episodes'>Episodes</NavLink>
      </nav>
      <Route exact path='/' component={CharacterList}/>
      <Route path='/location' component={LocationList}/>
      <Route path='/episodes' component={Episodelist}/>
      {/* <TabNav /> */}
    </main>
  );
}
