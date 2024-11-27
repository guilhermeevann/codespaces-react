import './App.css';

//Firebase
import firebaseConfig from './firebase.ts'
import { initializeApp } from "firebase/app";
import app from './firebase.ts';

//Componentes 
import FirstComp from './components/FirstComp.jsx';
import Login from './components/Login';
import Cadastro from './components/Cadastro';


function App() {

  return (
    <div className="App">
      <FirstComp></FirstComp>
      <Cadastro></Cadastro>
      <Login></Login>
    </div>
  );
}

export default App;
