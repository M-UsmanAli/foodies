import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import StoredContextProvider from './context/StoredContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoredContextProvider>
      <App />
    </StoredContextProvider>
  </BrowserRouter>

)
