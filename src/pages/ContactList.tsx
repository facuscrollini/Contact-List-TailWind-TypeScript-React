
import { useEffect, useReducer } from "react"
import { ContactCard } from "../components/ContactCard"
import type { StateType } from "../interfaces/ReducerTypes"
import { contactListReducer } from "../reducers/reducers"
import { getAgendaContacts } from "../api/apiContacts"

export const ContactList = () =>{

    const initialValue:StateType = {
        contacts: [],
        slug: ""
    }

    const [listaContactos, dispatch] = useReducer(contactListReducer, initialValue)


    const saveContactsFromApi = async() =>{

    const contacts = await getAgendaContacts('carlos')
    dispatch({type: 'get_contacts', payload: contacts})
     
    } 
    useEffect(()=>{
        saveContactsFromApi()
    },[])






    return( 
        <>
        <ContactCard name="Facundo" lastName="Scrollini" address="Vivienda 16 Granja Cuñetti" phone="692916064" email="facuscrollinic@gmail.com" />
        <ContactCard name="Facundo" lastName="Scrollini" address="Vivienda 16 Granja Cuñetti" phone="692916064" email="facuscrollinic@gmail.com" />
        </>
    )
}