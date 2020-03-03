import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimeBtn from './Components/PrimaryBtn';
import Breadcrumb from './Components/Breadcrumb';
import NavHead from './Components/HeaderNav';
import LogoutBtn from './Components/LogoutBtn';
import Main from './Components/MainContent'
function App() {
  return (
    <div className="App">
      <PrimeBtn
        btnText='test'
      />

      <Breadcrumb/>
      <NavHead
      username="Budi Handoko"
      role="Candidate"
      />
      <LogoutBtn
        btnText='keluar'
      />
      <Main/>
    </div>
  );
}

export default App;
