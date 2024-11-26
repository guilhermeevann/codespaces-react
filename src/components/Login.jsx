import React from "react";
import { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    return(
        <div>
            <input type="text"  placeholder="digite seu email"/>
            <input type="text" placeholder= "digite sua senha"/>
        </div>
    )
}

export default  Login;