import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import Desktop from "./components/Desktop";
import Header from "./components/Header";

function App() {

  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes className="App">
        <Route path="/" element={<Desktop />}>
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


{/* <div className="App">
<Desktop></Desktop>
</div> */}


