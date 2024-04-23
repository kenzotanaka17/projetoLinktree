import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";

import { auth } from '../../services/firebaseConnection'
import { signInWithEmailAndPassword } from "firebase/auth";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if(email !== '' || password !== '') {
            signInWithEmailAndPassword(auth, email, password)
            .then( () => {
                navigate("/admin", {replace: true})
                console.log("Logado com sucesso!")
            } )
            .catch( (error) => {
                console.log('Erro ao fazer o login:')
                console.log(error)
            })
        }
        else {
            alert("Preencha todos os campos!")
            return;
        }
    }

    return(
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Dev
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
                </h1>
            </Link>
            <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col px-2">
                <Input
                    placeholder="Digite seu email..."
                    type="email"
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Digite sua senha..."
                    type="password"
                    value={password}
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <button 
                type="submit"
                className="h-9 bg-blue-600 rounded border-0 text-lg font-medium text-white">
                    Acessar
                </button>
            </form>
        </div>
    )
}