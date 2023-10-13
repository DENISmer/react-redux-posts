import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AboutMe} from "./Components/AboutMe";


function App() {
    const PostList = lazy(() =>
            import("./Components/base/MainPage/PostsList")
    )

  return (
      <>
      <Router>
              <Routes>
                  <Route path="/" element={
                      <Suspense fallback={
                          <div>Loading...</div>}>
                          <PostList />
                      </Suspense>
                  }/>

              </Routes>
      </Router>
      </>
  );
}

export default App;
