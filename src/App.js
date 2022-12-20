import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter} from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <ToastContainer autoClose={3000}/>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
