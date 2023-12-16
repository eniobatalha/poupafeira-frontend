import { create } from 'zustand'
// Imagens das categorias:
import banana from '../../assets/img/produtos/frutas/banana.png'
import batata from '../../assets/img/produtos/vegetais/batata.png'
import refri from '../../assets/img/produtos/bebidas/refri.png'
import carne from '../../assets/img/produtos/carne/carne.png'

export const carrinhoStorage = create((set) => ({

    mercadorias: [],
    selectedMercado: [],
    categorias: [
        {nome: 'vegetal', img: batata, selected: false},
        {nome: 'carne', img: carne, selected: false},
        {nome: 'fruta', img: banana, selected: false},
        {nome: 'bebida', img: refri, selected: false},
     
    ],
    setSelectedMercados: (payload) => set((state) => ({ selectedMercado: state.selectedMercado = payload })), 
    setMercadorias: (payload) => set((state) => ({ mercadorias: state.mercadorias = payload })), 
    setCategorias: (payload) => set((state) => ({ categorias: state.categorias = payload })), 
}))