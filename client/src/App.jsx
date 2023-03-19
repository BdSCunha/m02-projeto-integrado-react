import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import PageWrapper from './components/PageWrapper';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';

import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <>
      {/* Ex 5 - Adicionar a configuração das rotas no `App.jsx` por volta de toda a aplicação o BrowserRouter. */}
      <BrowserRouter>
        {/* Ex2 - 5. Exponha no contexto através da prop value do provider as informações da pessoa logada e as funções de auxílio.  */}
        <UserProvider>
          <Navbar />
          <PageWrapper>
            {/*
              Ex 5 - Configurar duas rotas em App.jsx, a rota "/" que deve exibir a lista dos cursos, ou seja, a HomePage e
              outra rota "/course/:id" que deve exibir o novo componente de detalhes de um curso
            */}
            <Routes>
              <Route index element={<HomePage />} />
              <Route element={<CourseDetailsPage />} path="/course/:id" />
            </Routes>
          </PageWrapper>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
