import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigation';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import ProfileScreen from './screens/profile';
import RegisterScreen from './screens/register';
import SearchScreen from './screens/search';
// import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { AuthProvider } from './contexts/auth-context';
import firebaseConfig from "./firebase-config"
import Media from './screens/media';

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <div className="container">
          <h1>adop
            <span style={{position: 'relative', top: '9px', transform: 'rotate(180deg)', display: 'inline-block'}}>a</span>
          </h1>
          <BrowserRouter>
            <div className="row">
              <div className="col-2">
                <NavigationBar/>
              </div>
              <div className="col-10">
                <Routes>
                  <Route index element={<Navigate to='/home'/>}/>
                  <Route path="/media" element={<Media/>}/>
                  <Route path='/home' element={<HomeScreen/>}/>
                  <Route path='/login' element={<LoginScreen/>}/>
                  <Route path='/profile' element={<ProfileScreen/>}/>
                  <Route path='/register' element={<RegisterScreen/>}/>
                  <Route path='/search' element={<SearchScreen/>}/>
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </AuthProvider>
  );
}

export default App;
