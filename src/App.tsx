import ThemeContext from './providers/ThemeContext'
import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './providers/Auth/AuthContext'
import ProviderRoutes from './routes/useRoutes'
import { NotifyContainer } from './notify'

function App() {
  
  return (
    <ThemeContext>
      <BrowserRouter>
        <AuthProvider>
          <ProviderRoutes/>
          <NotifyContainer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeContext>
  )
}

export default App
