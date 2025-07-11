import type { ActionType, StateType } from "../interfaces/ReducerTypes";

export const contactListReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "add_contact":
      return { ...state, contacts: [...state.contacts, action.payload] };

    case "delete_contact":
      return {
        ...state,
        contacts:
          state.contacts.filter((contact) => contact.id != action.payload.id),
        
      };

    case "get_contacts":
      return action.payload;

    case "edit_contact":
     return {
      ...state,
      contacts: state.contacts.map(contact => 
        contact.id == action.payload.id ? action.payload : contact
      )
     }
    default:
      return state;
  }
};
