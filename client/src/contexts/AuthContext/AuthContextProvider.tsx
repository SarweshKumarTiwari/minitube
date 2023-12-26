import { useState } from 'react';
import AuthContext from './AuthContext';
import { props } from '../../types/JsxElementTypes';
import authtype from '../../types/authType';
import { ApiGetHandlerHook } from '../../hooks/ApiHandlerHook';
import axios from 'axios';

export default function AuthContextProvider({ children }: props) {
    const [user, setuser] = useState<authtype | null>(null);
    ApiGetHandlerHook(()=>axios.get('/auth/authenticate'),{
        onSuccess:(data)=>{
            setuser({
                isAuth:true,
                data:{
                    name:data.success.name
                }
            })
        },
        onError:()=>{
            setuser({isAuth:false})
        }
    })
    return (
        <AuthContext.Provider value={{ user, setuser }}>
            {children}
        </AuthContext.Provider>
    )
}
