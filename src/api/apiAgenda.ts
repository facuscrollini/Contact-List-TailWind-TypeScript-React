import { URL_CREATE_AGENDA } from "./urls"


export const createAgenda = async(agenda:string) =>{
const response = await fetch(URL_CREATE_AGENDA(agenda),{
    method: 'POST',
    headers: {
        "accept" : "application/json"
    }
})
if(!response.ok){
    console.log("Ha ocurrido un error al crear la agenda")
} else {
    console.log("Usuario creado correctamente: ")
    const data = await response.json()
    console.log(data)
}
}