import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <>
      {/* Ex1 - 5. Exponha no contexto através da prop value do provider as informações da pessoa logada e as funções de auxílio.  */}
      <UserProvider>
        <Navbar />
        <PageWrapper>
          <HomePage />
        </PageWrapper>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
