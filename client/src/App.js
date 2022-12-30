import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MyNavBar from './components/NavBar/NavBar';
import PostPage from './components/PostPage/PostPage';
import One from './components/One/One';
import Favs from './components/Favs/Favs';

function App() {
  return (
    <Container>
      <>
        <MyNavBar />

        <Routes>
          <Route path="/" element={<PostPage />} />
          <Route path="/one/:id" element={<One />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </>

    </Container>

  );
}

export default App;
