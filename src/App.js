import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MemberCreate from './components/MemberCreate';
import LoginPage from './components/LoginPage';
import { AuthContextProvider } from './context/UserContext';

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <Header />
        <div className='content-wrapper'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/member/create' element={<MemberCreate />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
