// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import NewsDetails from './components/NewsDetails';
import AuthRoute from './hocs/AuthRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AddCompany from './pages/companies/AddCompany';
import Companies from './pages/companies/Companies';
import Dashboard from './pages/Dashboard';
import AddNews from './pages/news/AddNews';
import News from './pages/news/News';


export function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/companies" element={<Companies />} />
      <Route path="/dashboard/create-company" element={<AddCompany />} />
      <Route path="/dashboard/news" element={<News />} />
      <Route path="/dashboard/dashboard/single-news" element={<NewsDetails />} />
      <Route path="/dashboard/create-news" element={<AddNews />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
