import { useParams } from 'react-router-dom'
import useCourseDetails from '../../hooks/useCourseDetails'
// import './CourseDetailsPage.css'

import styled from 'styled-components'

const CourseDetailsPageContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing5};
`

const CourseDetailsCenterBox = styled.div`
  width: 629px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing6} ${({ theme }) => theme.spacing8};
  gap: ${({ theme }) => theme.spacing6};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 ${({ theme }) => theme.spacing2} ${({ theme }) => theme.spacing2} rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius1};
`

function CourseDetailsPage() {
  const { id } = useParams()
  const { course } = useCourseDetails(id)

  return (
    <CourseDetailsPageContainer>
      <CourseDetailsCenterBox>
        <h2>Detalhes do Curso</h2>
        <img src={course?.imageUrl} alt={`Imagem do curso ${course?.name}`} />
        <p>
          <strong>Nome:</strong> <span>{course?.name}</span>
        </p>
        <p>
          <strong>Categoria:</strong> <span>{course?.category}</span>
        </p>
        <p>
          <strong>Descrição:</strong> <span>{course?.description}</span>
        </p>
        <p>
          <strong>Duração:</strong> <span>{course?.duration}h</span>
        </p>
      </CourseDetailsCenterBox>
    </CourseDetailsPageContainer>
  )
}

export default CourseDetailsPage
