export type NewContactResponse = {
    name: string,
    phone:string,
    email:string,
    address:string,
    id?: number,
    error?:string
}