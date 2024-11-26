import React from "react";
import { useState } from "react";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login(){

    const [emailLogin ,setEmailLogin] = useState('')
    const [senhaLogin ,setSenhaLogin] = useState('')

    const enviaForm =  (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailLogin, senhaLogin).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
          });
    }

    return(
        <form onSubmit={enviaForm}>
            <div>
                <input type="text"  placeholder="digite seu email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)}/>
                <input type="text" placeholder= "digite sua senha" value={senhaLogin} onChange={(e) => setSenhaLogin(e.target.value)}/>
                <input type="submit" value="Login"/>
            </div>
        </form>

    )
}

export default  Login;