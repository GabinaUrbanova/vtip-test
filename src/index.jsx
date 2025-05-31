import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { Joke } from "./pages/Components/Joke";

createRoot(
  document.querySelector('#app'),
).render(<HomePage />);
