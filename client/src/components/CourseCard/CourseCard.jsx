import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import clockImg from '../../assets/clock.png'
import Button, { BUTTON_VARIANT } from '../Button'

const CourseCardContainer = styled.div`
  width: 310px;
  padding: ${({ theme }) => theme.spacing6} ${({ theme }) => theme.spacing8};
  border-radius: ${({ theme }) => theme.borderRadius1};
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing4};
`

const CourseCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing4};
  color: ${({ theme }) => theme.primary};
`

const CourseCardDuration = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing3};
  align-items: center;
  font-weight: ${({ theme }) => theme.fontMedium};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.darkGray};
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
