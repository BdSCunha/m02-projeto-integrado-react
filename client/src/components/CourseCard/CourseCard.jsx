import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import clockImg from '../../assets/clock.png'
import Button, { BUTTON_VARIANT } from '../Button'

const CourseCardContainer = styled.div`
  width: 310px;
  padding: var(--spacing-6) var(--spacing-8);
  border-radius: var(--border-radius-1);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4);
`

const CourseCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  color: var(--primary);
`

const CourseCardDuration = styled.div`
  display: flex;
  gap: var(--spacing-3);
  align-items: center;
  font-weight: var(--font-medium);
  font-size: 16px;
  line-height: 19px;
  color: var(--dark-gray);
`

function CourseCard({ id, imageUrl, name, category, description, duration }) {
  const navigate = useNavigate()

  const handleNavigateDetails = () => {
    navigate(`/course/${id}`)
  }

  return (
    <CourseCardContainer>
      <CourseCardHeader>
        {imageUrl && (
          <img width={50} src={imageUrl} alt={`Imagem curso ${name}`} />
        )}
        <h3>{name}</h3>
      </CourseCardHeader>

      <CourseCardDuration>
        <img src={clockImg} alt="Ícone de relógio" />
        <p>{duration}h</p>
      </CourseCardDuration>

      <Button
        variant={BUTTON_VARIANT.SECONDARY_OUTLINED}
        onClick={handleNavigateDetails}
      >
        Ver detalhes
      </Button>
    </CourseCardContainer>
  )
}

CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string
}

export default CourseCard
