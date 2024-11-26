import React from "react";
import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login(){

    const [email ,setEmail] = useState('')
    const [senha ,setSenha] = useState('')

    const enviaForm = async (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha).then(
        ( userCredential ) => {
        const user = userCredential.user;
        console.log ( user ) ;
        });
    }

    return(
        <form onSubmit={enviaForm}>
            <div>
                <input type="text"  placeholder="digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder= "digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <input type="submit" />
            </div>
        </form>

    )
}

export default  Login;