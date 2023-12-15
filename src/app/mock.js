import banana from '../assets/img/produtos/frutas/banana.png'
import batata from '../assets/img/produtos/vegetais/batata.png'
import refri from '../assets/img/produtos/bebidas/refri.png'
import carne from '../assets/img/produtos/carne/carne.png'
import uva from '../assets/img/produtos/frutas/uva.png'
import brocolis from '../assets/img/produtos/vegetais/brocolis.png'
import cenoura from '../assets/img/produtos/vegetais/cenoura.png'
import porco from '../assets/img/produtos/carne/porco.png'
import suco from '../assets/img/produtos/bebidas/suco.png'

export const produtosMercado = [
    {id: 1, nome: 'Banana', img: banana, preco: 11.39, medida: 'kg', categoria: 'fruta'},
    {id: 2, nome: 'Refrigerante', img: refri, preco: 10.00, medida: 'und', categoria: 'bebida'},
    {id: 3, nome: 'Batata', img: batata, preco: 5.99, medida: 'kg', categoria: 'vegetal'},
    {id: 4, nome: 'Uva', img: uva, preco: 9.49, medida: 'kg', categoria: 'fruta'},
    {id: 5, nome: 'Bife', img: carne, preco: 34.50, medida: 'kg', categoria: 'carne'},
    {id: 6, nome: 'Brocolis', img: brocolis, preco: 8.50, medida: 'kg', categoria: 'vegetal'},
    {id: 7, nome: 'Cenoura', img: cenoura, preco: 7.50, medida: 'kg', categoria: 'vegetal'},
    {id: 8, nome: 'Porco', img: porco, preco: 24.50, medida: 'kg', categoria: 'carne'},
    {id: 9, nome: 'Suco', img: suco, preco: 8.50, medida: 'und', categoria: 'bebida'},
]

export const mercados = [
    {nome: 'Atacadão Jaboatão', logradouro: 'PE-007, Vargem Fria, Jaboatão dos Guararapes, PE', info: 'Aberto agora - Fecha às 18h hoje.', valor: '227,50'},
    {nome: 'Supermercado Leão', logradouro: 'PE-007, Vargem Fria, Jaboatão dos Guararapes, PE', info: 'Aberto agora - Fecha às 18h hoje.', valor: '240,17'},
    {nome: 'SuperNordeste Mercado', logradouro: 'PE-007, Vargem Fria, Jaboatão dos Guararapes, PE', info: 'Aberto agora - Fecha às 18h hoje.', valor: '291,33'},
]