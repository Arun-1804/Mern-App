import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import DashboardPage from './pages/Dasboard';
import  reportWebVitals  from './reportWebVitals';

function App() {
  // Measure Web Vitals
  reportWebVitals((metric) => {
      // console.log(metric);
  });
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;