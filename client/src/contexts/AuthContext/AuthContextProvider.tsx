import { useState } from 'react';
import AuthContext from './AuthContext';
import { props } from '../../types/JsxElementTypes';
import authtype from '../../types/authType';
import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export default function AuthContextProvider({ children }: props) {
    const [user, setuser] = useState<authtype | null>(null);
   
    useQuery({
        queryKey: [user?.isAuth,document.cookie],
        retry: false,
        queryFn: () => {
            if (document.cookie.split("=")[0]==="isLogged") {
                return axios.get("/auth/authenticate", {
                    withCredentials: true}
            )}
            throw new Error("can not request");
        },
        onSuccess: ({ data }) => {
            setuser({
                isAuth: true,
                data:{ 
                  name:data.success
                }
            })
        },
        onError: (err:AxiosError<any>) => {
            setuser({
                isAuth:false,
                data:undefined
            })
            if (err.response?.data.token_expired) {
                axios.get("/auth/access_token").then(({data})=>{
                    setuser({
                        isAuth: true,
                        data:{ 
                          name:data.success
                        }
                    })
                }).catch(()=>{
                    setuser({
                        isAuth:false,
                        data:undefined
                    })
                })
            }
            setuser({
                isAuth: false,
                data: undefined
            })
        },
        retryOnMount:false
    })
    return (
        <AuthContext.Provider value={{ user, setuser }}>
            {children}
        </AuthContext.Provider>
    )
}
