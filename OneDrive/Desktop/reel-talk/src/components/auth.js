import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from 'react';

export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = () => {};  
    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}> Sign In </button>
        </div>
    );
};