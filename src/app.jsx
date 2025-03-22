import { TopicListContainer } from './templates/topic-list-container/topic-list-container.component.jsx';
import ReactDOM from 'react-dom/client'; // Importación desde 'react-dom/client'

// Crear dinámicamente un contenedor para React si no existe
    const rootElement = document.createElement('div');
    rootElement.id = 'react-root'; // Asignar un ID al contenedor
    document.body.appendChild(rootElement);

    // Crear la raíz React usando ReactDOM.createRoot (React 18+)
    try {
          ReactDOM.createRoot(rootElement).render(<TopicListContainer />);
        console.log('React inicializado correctamente');
    } catch (error) {
        console.error('Error al inicializar React:', error);
    }