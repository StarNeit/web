import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate
} from 'react-router-dom';
import { Header, Sidebar } from '@components/layout';
import Dashboard from '@pages/Dashboard';
import NotFound from '@pages/NotFound';
import Profile from '@pages/Profile';
import ManagePractises from '@pages/ManagePractises';

function App() {
  return (
    <Router>
      <main className="bg-grey-100 flex pl-0 lg:pl-[280px]">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Header />
          <div className="px-6 sm:px-10 py-6 sm:py-8">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/practises" element={<ManagePractises />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
