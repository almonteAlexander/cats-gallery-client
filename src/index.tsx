import { createRoot } from 'react-dom/client';
import App from './App';
import './public/styles/normalize.css';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(<App />);