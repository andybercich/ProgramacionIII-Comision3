import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { App } from './App'
import {store} from '../src/Redux/Store/Store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>

      <Provider store={store}>

        <App></App>

      </Provider>
    </BrowserRouter>

  </StrictMode>,
)
