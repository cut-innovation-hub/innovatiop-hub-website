/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, ReactNode, useReducer } from 'react';
import Cookies from 'js-cookie';

const initialState = {
  darkMode: false,
  ihub_user: Cookies.get('ihub_user')
    ? // @ts-ignore
      JSON.parse(Cookies.get('ihub_user'))
    : null,
  search_query: '',
  chat_state: 'close',
};

// @ts-ignore
export const Store = createContext();

function reducer(
  state: { ihub_user: null },
  action: { type: any; payload: any }
) {
  switch (action.type) {
    // changing theme from  dark to light
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    // for loggin in
    case 'USER_LOGIN':
      Cookies.set('ihub_user', JSON.stringify(action.payload), { expires: 7 });
      return { ...state, ihub_user: action.payload };

    // for loggin out and emptying cart
    case 'USER_LOGOUT':
      Cookies.remove("ihub_user");
      return { ...state, ihub_user: null };

    // set searchy query over all components
    case 'SET_SEARCH_QUERY':
      return { ...state, search_query: action.payload };

    default:
      return state;
  }
}

interface Props {
  children?: ReactNode;
}

export function StoreProvider(props: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  // @ts-ignore
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
