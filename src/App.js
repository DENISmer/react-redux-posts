import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import {PostsList} from "./Components/base/MainPage/PostsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AboutMe} from "./Components/AboutMe";
import {Users} from "./Components/base/usersPage/Users";
import {Albums} from "./Components/base/albumsPage/Albums";


function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={ <PostsList /> }/>
            <Route exac path='/AboutMe' element={ <AboutMe /> }/>
            <Route exac path={'/Users'} element={<Users />} />
            <Route exac path={'/Albums'} element={<Albums />} />
        </Routes>
    </>
  );
}

export default App;
