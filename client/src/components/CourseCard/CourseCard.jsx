import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clockImg from '../../assets/clock.png';
import Button, { BUTTON_VARIANT } from '../Button';

import './CourseCard.css';

function CourseCard({ id, imageUrl, name, category, description, duration }) {
  return (
    <div className='courseCardContainer'>

      <div className='courseCardHeader'>
        {imageUrl && <img width={50} src={imageUrl} alt={`Imagem curso ${name}`} />}
        <h3>{name}</h3>
      </div>

      <div className='courseCardDuration'>
        <img src={clockImg} alt='Ícone de relógio' />
        <p>{duration}h</p>
      </div>

      {/* Ex 7 - 1. Alterar a tag <button> “Ver detalhes“ para Link e adicionar o path como “/course/{id}” para o curso sendo renderizado. */}
      <Link to={`/course/${id}`}>
        <Button variant={BUTTON_VARIANT.SECONDARY_OUTLINED}>
          Ver detalhes
        </Button>
      </Link>
    </div>
  );
}

CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

export default CourseCard;
