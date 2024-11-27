import React from "react";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//CSS
import '../estilos/Cadastro.css'


function Cadastro(){

    const [email ,setEmail] = useState('')
    const [senha ,setSenha] = useState('')

    const enviaFormCadastro = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha).then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          });
    }

    return(
    <form onSubmit={enviaFormCadastro}>
        <div className="container-cadastro">
            <h2>Cadastro</h2>
            <input type="text"  placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder= "digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <input type="submit" value="Cadastro"/>
        </div>
    </form>

    );
}

export default  Cadastro;