import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import {PostsList} from "./Components/MainPage/PostsList";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {AboutMe} from "./Components/AboutMe";
import {Header} from "./Components/Header";
import {useDispatch, useSelector} from "react-redux";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={ <PostsList /> }/>
            <Route exac path='/AboutMe' element={ <AboutMe /> }/>
        </Routes>
    </>
  );
}

export default App;
