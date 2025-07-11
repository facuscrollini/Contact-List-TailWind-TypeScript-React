import type { BadResponse, NewContactResponse } from "../interfaces/ApiTypes"
import type { ContactType, StateType } from "../interfaces/ReducerTypes"
import { URL_CREATE_AGENDA_CONTACT, URL_GET_AGENDA_CONTACTS } from "./urls"

export const getAgendaContacts = async(agenda:string):Promise<StateType | BadResponse>=>{
    try {
        const response = await fetch(URL_GET_AGENDA_CONTACTS(agenda), {
            method: 'GET',
            headers: {
                "accept": "application/json",
            }
        })
        if(response.ok){
            const data = await response.json()
            const contacts = data?.contacts
            return contacts
        }
        return {message: "Ha ocurrido un error al conseguir la agenda"}
    } catch (error) {
        return {message: `Ha ocurrido un error al conseguir los contactos de la agenda: ${error}`}
    }
}





export const createAgendaContact = async(agenda:string, contact:ContactType):Promise<NewContactResponse | BadResponse> =>{
try {
    const response = await fetch(URL_CREATE_AGENDA_CONTACT(agenda), {
        method: "POST",
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": contact.name,
            "phone": contact.phone,
            "email": contact.email,
            "address": contact.address
        })

    })
    if(response.ok){
        const data = await response.json()
        return data
    } else {
        return {message: "Ha surgido un error al crear el contacto"}
    }
} catch (error) {
    return { message:`Ha surgido el siguiente error al crear el contacto: ${error}`}
}
}
