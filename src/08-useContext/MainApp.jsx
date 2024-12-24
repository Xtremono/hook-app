import {Navigate, Route, Routes, Link} from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
  return (
    <>
    <h1>MainApp</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/login">Login</Link>
    <hr />


    <Routes>
      <Route path="/" element={ <HomePage/>  } />
      <Route path="about" element={ <AboutPage/>  } />
      <Route path="login" element={ <LoginPage/>  } />

      {/*<Route path="/*" element={ <LoginPage/> }/>*/}
      <Route path="/*" element={ <Navigate to="/about"/> } />

    </Routes>
    </>
  )
}
