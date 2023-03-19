import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
                <h1>{course.name}</h1>
            ) : (
                <h1>Loading course...</h1>
            )}
        </div>
    );
}
