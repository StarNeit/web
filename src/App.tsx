import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from '@pages/Dashboard';
import { Header, Sidebar } from '@components/layout';

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
            </Routes>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
