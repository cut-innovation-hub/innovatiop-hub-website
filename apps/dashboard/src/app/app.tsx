// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import Companies from './pages/companies/Companies';
import Dashboard from './pages/Dashboard';
import News from './pages/news/News';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard/companies" element={<Companies />} />
      <Route path="/dashboard/news" element={<News />} />

    </Routes>
  );
}

export default App;
