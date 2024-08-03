import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import ChatWindow from './components/ChatWindow';
import OptionBar from './components/OptionBar';
import Sidebar from './components/Sidebar';
import Register from './pages/Register';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';

  return (
    <AuthProvider>
      <div className="App flex h-screen bg-black ">
        {!isAuthRoute && (
          <>
            <OptionBar />
            <Sidebar  /> 
          </>
        )}
        <div className="flex-1 h-screen">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/"
              element={
                // <ProtectedRoute>
                  <Home />
                // {/* </ProtectedRoute> */}
              }
            />
            <Route path="/chat/:username" element={<ProtectedRoute><ChatWindow /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
