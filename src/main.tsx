import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

if (container.hasChildNodes()) {
  try {
    hydrateRoot(
      container,
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (err) {
    console.warn('Hydration fallback to client render:', err);
    createRoot(container).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
} else {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

