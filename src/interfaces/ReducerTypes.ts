
export interface ContactType {
    name: string,
    phone: string,
    email: string,
    address: string,
    id?:number
}


export type StateType = {
    slug:string,
    contacts: ContactType[],
    error?:string
}


export type DeleteContactType = {
    id:number
}


export type CreateContactType = {
    agenda: string,
    contact: ContactType
}


export type ActionType = 
|   {type:'get_contacts'; payload: StateType}
|   {type:'add_contact'; payload: ContactType }
|   {type: 'delete_contact'; payload: DeleteContactType}
|   {type: 'edit_contact'; payload:ContactType}




