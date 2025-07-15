import type { ContactType } from "./ReducerTypes";

export interface ContactCardProps {
contacto:ContactType,
agenda:string,
actualizarLista: (agenda:string)=> Promise<void>
}