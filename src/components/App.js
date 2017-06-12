import React from 'react';
import CharacterList from './characters/list';
import CharacterProfile from './character/profile';
import CharacterWorld from './character/world';
import CharacterMovies from './character/movies';

const App = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className='row'>
      <CharacterWorld />
      <CharacterMovies />
    </div>
  </div>;

export default App;
