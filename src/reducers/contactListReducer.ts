import type { ActionType, StateType } from "../interfaces/ReducerTypes";

export const initialValue: StateType = {
  contacts: [],
  slug: "",
};

export const contactListReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "get_contacts":
      return {
        slug: action.payload.slug ?? "",
        contacts: action.payload.contacts ?? [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

// const ContactosContext = createContext(null)

// export function ContactosProvider({children}){
//   const [listaContactos, dispatch] = useReducer(contactListReducer, initialValue)

//   return <ContactosContext.Provider value={{listaContactos, dispatch}}>
// }
