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
import AddFaqs from './pages/paqs/AddFaqs';
import FAQS from './pages/paqs/FAQS';
import Settings from './pages/settings/Settings';
import Team from './pages/team/Team';
import Mail from './pages/mail/Mail';
import EditNews from './pages/news/EditNews';

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
        path="/dashboard/edit-news"
        element={<AuthRoute Component={<EditNews />} />}
      />
       <Route
        path="/dashboard/faqs"
        element={<AuthRoute Component={<FAQS />} />}
      />
       <Route
        path="/dashboard/add-faqs"
        element={<AuthRoute Component={<AddFaqs />} />}
      />
      <Route
        path="/dashboard/create-news"
        element={<AuthRoute Component={<AddNews />} />}
      />
        <Route
        path="/dashboard/team"
        element={<AuthRoute Component={<Team />} />}
      />
      <Route
        path="/dashboard/mail"
        element={<AuthRoute Component={<Mail />} />}
      />
       <Route
        path="/password"
        element={<AuthRoute Component={<Settings />} />}
      />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
