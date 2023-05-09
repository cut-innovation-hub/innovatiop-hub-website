// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import AuthRoute from './hocs/AuthRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AddCompany from './pages/companies/AddCompany';
import Companies from './pages/companies/Companies';
import Dashboard from './pages/Dashboard';
import AddNews from './pages/news/AddNews';
import News from './pages/news/News';
import FAQS from './pages/paqs/FAQS';

export function App() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<AuthRoute Component={<Dashboard />} />}
      />
      <Route
        path="/dashboard/companies"
        element={<AuthRoute Component={<Companies />} />}
      />
       <Route
        path="/dashboard/create-company"
        element={<AuthRoute Component={<AddCompany />} />}
      />
      <Route
        path="/dashboard/news"
        element={<AuthRoute Component={<News />} />}
      />
       <Route
        path="/dashboard/faqs"
        element={<AuthRoute Component={<FAQS />} />}
      />
      <Route
        path="/dashboard/create-news"
        element={<AuthRoute Component={<AddNews />} />}
      />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
