import { useState } from "react"
import { createAgendaContact } from "../api/apiContacts"
import type { ContactType } from "../interfaces/ReducerTypes"
import { useLocation, useNavigate } from "react-router"

export const AddContact = () =>{
    
    const location = useLocation()
    const contacto = location.state
    const navigate = useNavigate()

    const [form, setForm] = useState<ContactType>({
        name: "",
        address: "",
        phone: "",
        email: ""
    })

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
       await createAgendaContact("carlos", form)
        navigate('/contact-list')

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setForm({...form, [e.target.name] : e.target.value })
    }
    
    
  

    return( 
        <div className="flex flex-col items-center">
            <h1>Add contact</h1>
        <form onSubmit={handleSubmit}className="bg-sky-200 p-3 rounded w-3xl h-5xl">
            <div className="my-2">
                <label>Name:</label>
                <input onChange={handleChange} defaultValue={contacto?.name && contacto.name} name="name" className="bg-white rounded ml-2 w-96" type="text"></input>
            </div>
            <div className="my-2">
                <label>Address:</label>
                <input onChange={handleChange}  defaultValue={contacto?.address && contacto.address} name="address" className="bg-white rounded ml-2 w-96" type="text"></input>
            </div>
            <div className="my-2">
                <label>Phone:</label>
                <input onChange={handleChange}  defaultValue={contacto?.phone && contacto.phone} name="phone" className="bg-white rounded ml-2 w-50" type="text"></input>
            </div>
            <div className="my-2">
                <label>E-mail:</label>
                <input  onChange={handleChange} defaultValue={contacto?.email && contacto.email} name="email" className="bg-white rounded ml-2 w-75" type="text"></input>
            </div>
            <div className="bg-sky-100 p-3 rounded flex justify-end">
                <button className="bg-green-500 rounded p-1" type="submit">Save contact</button>
                {!contacto && 
                <button className="bg-amber-100 rounded p-1 ml-2" type="reset">Erase content</button>
                }
            </div>
        </form>
        </div>
    )
}