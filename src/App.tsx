import ThemeContext from './providers/ThemeContext'
import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './providers/Auth/AuthContext'
import ProviderRoutes from './routes/useRoutes'

export enum RoutesPath {
  LOGIN = "/login",
  OAUTH = "/login/oauth",
  HOME  = "/"
}


function App() {
  
  return (
    <ThemeContext>
      <BrowserRouter>
        <AuthProvider>
          <ProviderRoutes/>
        </AuthProvider>
      </BrowserRouter>
    </ThemeContext>
  )
}

export default App
