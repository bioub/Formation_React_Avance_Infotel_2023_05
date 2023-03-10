import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import TopBar from '../TopBar/TopBar';
import Home from '../Home/Home';
import TryCatchErrorBoundary from '../TryCatchErrorBoundary/TryCatchErrorBoundary';
import { lazy, Suspense } from 'react';
// import ExportExcel from '../ExportExcel/ExportExcel';

const ExportExcel = lazy(() => import('../ExportExcel/ExportExcel'));

export default function App() {
  console.log('refresh App');

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <TryCatchErrorBoundary>
          <Suspense fallback={<p>Loading...</p>}>
            <Routes className="App-Route-Container">
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/export" element={<ExportExcel />} />
              <Route path="users/*" element={<Users />} />
            </Routes>
          </Suspense>
        </TryCatchErrorBoundary>
      </BrowserRouter>
    </div>
  );
}
