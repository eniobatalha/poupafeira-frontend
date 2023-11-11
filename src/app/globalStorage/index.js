import { create } from 'zustand'
import banana from '../banana.png'
import batata from '../batata.png'
import refri from '../refri.png'
import carne from '../carne.png'

export const carrinhoStorage = create((set) => ({

    mercadorias: [],
    categorias: [
        {nome: 'vegetal', img: batata, selected: false},
        {nome: 'carne', img: carne, selected: false},
        {nome: 'fruta', img: banana, selected: false},
        {nome: 'bebida', img: refri, selected: false},
    ],
    setMercadorias: (payload) => set((state) => ({ mercadorias: state.mercadorias = payload })), 
    setCategorias: (payload) => set((state) => ({ categorias: state.categorias = payload })), 
}))