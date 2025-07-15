
import { useEffect, useReducer } from "react"
import { ContactCard } from "../components/ContactCard"
import { contactListReducer, initialValue } from "../reducers/contactListReducer"
import { getAgendaContacts } from "../api/apiContacts"

export const ContactList = () => {

   
    const [listaContactos, dispatch] = useReducer(contactListReducer, initialValue)


    const saveContactsFromApi = async (agenda: string) => {
        const contacts = await getAgendaContacts(agenda)
        dispatch({ type: 'get_contacts', payload: contacts })
    }


    useEffect(() => {
        saveContactsFromApi("carlos")
    }, [])

 

    return (
        <>
            {
                listaContactos.contacts?.map(contacto => (

                    <ContactCard actualizarLista={saveContactsFromApi} agenda={listaContactos.slug} contacto={contacto}/>

                ))
            }
        </>
    )
}