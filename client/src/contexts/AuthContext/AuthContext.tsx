import {createContext,useState} from "react";
import authtype from "../../types/authType";

type authContext={
    user:authtype|null;
    setuser:React.Dispatch<React.SetStateAction<authtype|null>>
}

const AuthContext=createContext<authContext>({user:null,setuser:useState});

export default AuthContext;