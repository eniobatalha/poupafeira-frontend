'use client'

import { createContext, useEffect, useState } from 'react';
import { setCookie,parseCookies  } from 'nookies';
import { api } from '@/service/api';

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
    const [user, setUser] = useState();

    useEffect(() => {
        const { 'auth.token': token } = parseCookies();
    
        if (token) {
            api.post('/auth/recover')
                .then((response) => {
                    const { nome, email } = response.data; // Extraia as informações do usuário
                    setUser({ nome, email }); // Defina o estado de 'user' com as informações extraídas
                })
                .catch((error) => {
                    console.error('Erro ao recuperar dados do usuário:', error);
                    setUser(null); // Defina 'user' como null em caso de erro
                });
        } else {
            setUser(null);
        }
    }, []);

    const isAuthenticated = !!user && !!user.token;
    

    async function AuthLogin(data) {
        try {
            const response = await api.post('/auth/login', data);
            console.log('Resposta do servidor:', response.data.message);
            
            const { token , nome, email } = response.data; 

            setUser({
                nome: nome,
                email: email
            });

            setCookie(undefined, 'auth.token', token, {
                maxAge: 60 * 60 * 48, // 48 horas

            });

            api.defaults.headers['Authorization'] = `Bearer ${token}`

          } catch (error) {
            console.error('Erro ao fazer o POST:', error);
          }
          window.location.href = "/produtos";
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, AuthLogin, user }}>
            {children}
        </AuthContext.Provider>
    );
}
