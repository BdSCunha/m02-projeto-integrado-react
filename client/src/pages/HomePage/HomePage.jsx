import { Spinner } from 'phosphor-react';

import CourseFilter from '../../components/CourseFilter';
import CourseList from '../../components/CourseList';
import useCourseList from '../../hooks/useCourseList';
import emptyState from '../../assets/empty.svg';

import './HomePage.css';

import { useUserContext } from '../../contexts/UserContext';

function HomePage() {
  const { courses, error, isLoading, fetchData } = useCourseList();

  // Ex 4 - No componente de HomePage:
  //     Adicione o hook criado e obtenha dele as informações da pessoa usuária
  const { name, isAdmin, showCourseRegistrationButton, initializeUser, clearUser, isUserAdmin } = useUserContext();

  return (
    <div className='homePageContainer'>
      <CourseFilter onFilter={fetchData} />

      {isLoading && <Spinner width={100} />}

      {!isLoading && !!error && <p>{error}</p>}

      {!isLoading && !error && !!courses.length && <CourseList list={courses} />}

      {!isLoading && !error && !courses.length && (
        <img height={500} src={emptyState} alt='Imagem de nenhum item encontrado' />
      )}

      {/* Ex 4 - Altere o jsx para exibir um botão de cadastro de curso, apenas se a pessoa logada tiver informação admin como `true` */}
      {showCourseRegistrationButton && (
        <button className='button primary'>Registrar novo curso</button>
      )}
    </div>
  );
}

export default HomePage;
