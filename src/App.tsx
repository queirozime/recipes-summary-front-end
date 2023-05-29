import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Loading from "./components/Loading";
import AuthService from './components/AuthService';
import {useState,useEffect} from 'react';
import { Login } from "@mui/icons-material";
import LoginPage from "./pages/Login/login-page";
import RecipesPage from "./pages/Recipes/recipes-page";
import UserPage from "./pages/User/user-page";
import ListsPage from "./pages/Lists/lists-page";
import CurrentList from "./pages/CurrentList/current-list";
import SigninPage from "./pages/Signin/signin-page";


type AppProps = {
  authService: AuthService;
}

function App(props:AppProps) {

  const [user, setUser] = useState(null as any); 
  const [isLoadingLoggerUser,setIsloadingLoggedUser] = useState(true);

  useEffect(() => {
    props.authService.getLoggedUser()
        .then(user =>{
            setIsloadingLoggedUser(false);
            setUser(user);
        })
        .catch(() => {
            setIsloadingLoggedUser(false);
        })
  },[]);

  return (
    <>
      {
        !isLoadingLoggerUser &&
        <BrowserRouter>
        <Routes>
          <Route path = '/'
                 element = {<RecipesPage/>}/>
          <Route path = '/user'
                 element = {user? <UserPage authService = {props.authService}/>:<Navigate to ="/login"/>}/>
          <Route path = '/lists'
                 element = {<ListsPage/>}/>
          <Route path = '/current-list'
                 element = {<CurrentList />}/>
          <Route path = '/login'
                 element = {!user? <LoginPage authService = {props.authService}/>:<Navigate to ="/user"/>}/>
          <Route path = '/signin'
                 element = {<SigninPage />}/>
        </Routes>
      </BrowserRouter>
      }
      {isLoadingLoggerUser && <Loading />}
    </>
  );
};

export default App;
