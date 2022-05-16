import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/headers';
import HomeView from './views/Home/component';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AlbumView from './views/Album/component';
import ArtistView from './views/Artist/component';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/album/:id" element={<AlbumView />}/>
        <Route path="/artist/:id" element={<ArtistView />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
