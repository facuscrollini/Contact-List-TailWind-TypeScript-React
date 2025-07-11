export const URL_CREATE_AGENDA  = (agenda:string) => `https://playground.4geeks.com/contact/agendas/${agenda}`

export const URL_GET_AGENDA = (agenda:string)=> `https://playground.4geeks.com/contact/agendas/${agenda}`

export const URL_GET_AGENDA_CONTACTS = (agenda:string) => `https://playground.4geeks.com/contact/agendas/${agenda}/contacts`

export const URL_CREATE_AGENDA_CONTACT = (agenda:string) => `https://playground.4geeks.com/contact/agendas/${agenda}/contacts`

export const URL_UPDATE_AGENDA_CONTACT = (agenda:string, contactId:number)=> `https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${contactId}`

export const URL_DELETE_AGENDA_CONTACT = (agenda:string, contactId:number)=> `https://playground.4geeks.com/contact/agendas/${agenda}/contacts/${contactId}`