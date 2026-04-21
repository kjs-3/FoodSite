import React, { createContext, useEffect, useReducer, useState } from 'react'
import foodlisting from '../JSONFILE/items.json';
export const Fooditems = createContext();
// state value
export const initialstate = { cart: [] }
// reducer function
export const cartreducer = (state, action) => {
    switch (action.type) {
        case 'Lets Eat':
            const exsistitem = state.cart.find((item) => item.id === action.payload.id);
            if (exsistitem) {
                return { ...state, cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item) }
            }
            else {
                return { ...state, cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity }] }
            }
            break;
        case 'Remove':
            return { ...state, cart: state.cart.filter((item) => item.id != action.payload.id) }
            break;
        case 'decrease':
            return { ...state, cart: state.cart.map((item) => item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item) }
            break;
        case 'increase':
            return { ...state, cart: state.cart.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item) }
            break;
        default:
            return state;
    }
}
const Providerr = ({ children }) => {
    const[search,setsearch]=useState('');
    const [state, dispatch] = useReducer(cartreducer, initialstate, (initial) => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : initial
    });
    useEffect(() => { localStorage.setItem('cart', JSON.stringify(state)), [state] })
    const [count, setcount] = useState(0);
    return (
        <>
            <Fooditems.Provider value={{ foodlisting, state, dispatch, count, setcount,search,setsearch }}>
                {children}
            </Fooditems.Provider>
        </>

    )
}

export default Providerr