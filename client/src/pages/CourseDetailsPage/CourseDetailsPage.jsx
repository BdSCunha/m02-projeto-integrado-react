import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import clockImg from '../../assets/clock.png';

import './CourseDetailsPage.css'

export const CourseDetailsPage = () => {
    // Ex 6 - 2. Obtenha a id do curso com `useParams`
    const { id } = useParams();
    const [course, setCourse] = useState(null);

    // Ex 6 - 3. Faça uma requisição para o JSON server filtrando os cursos pela id   
    useEffect(() => {
        fetch(`http://localhost:8081/courses/${id}`)
            .then(response => response.json())
            .then(data => setCourse(data));
    }, [id]);

    return (
        // Ex 5 - Inicialize o componente com algum texto para identificá-lo
        // <div>Olá, mundo!</div>

        <div>
            {course ? (
                // Ex 6 - 1. Crie em CourseDetailsPage.jsx um h1 para exibir o nome do curso.
                // Ex 6 - 4. Adicione no h1 com o título do curso obtido da requisição.
                <div className="course-details-container">
                    <div className="course-details-header">
                        <span className='course-details-icon-and-name'><img src={course.imageUrl} className="course-details-icon" alt='Ícone de relógio' />{course.name}</span>
                        <span style={{ textTransform: "capitalize" }}>{course.category}</span>
                        <span><img src={clockImg} alt='Ícone de relógio' />{course.duration}h</span>
                    </div>
                    <div className="course-details-description">
                        <p className="course-details-secondary">Descrição:</p>
                        <p>{course.description}</p>
                    </div>
                    <div className="course-details-target-audience">
                        <p className="course-details-secondary">Público alvo:</p>
                        <p>{course.targetAudience}</p>
                    </div>
                    <div className="course-details-content">
                        <p className="course-details-secondary">Conteúdo:</p>
                        <ul style={{ marginLeft: "20px" }}>
                            {course.content.map((element) => (
                                <li key={element}>{element}</li>
                            ))}
                        </ul>
                    </div>
                    <Link to="/">
                        <button type='button' className='back-button'>Voltar</button>
                    </Link>
                </div>
            ) : (
                <h1>Loading course...</h1>
            )}
        </div>
    );
}
