import './App.css';

//Firebase
import firebaseConfig from './firebase.ts'
import { initializeApp } from "firebase/app";

//Componentes 
import FirstComp from './components/FirstComp.jsx';


function App() {

  const app = initializeApp(firebaseConfig);

  return (
    <div className="App">
      <h1>Teste React</h1>
      <FirstComp></FirstComp>
      <h2>teste</h2>
    </div>
  );
}

export default App;
