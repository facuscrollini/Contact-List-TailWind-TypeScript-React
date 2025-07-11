export const Welcome = () =>{
    return(
        <>
        <div className="m-3 p-5 rounded bg-sky-300">
            <label htmlFor="agenda">Nombre agenda:
            </label>
            <input className="bg-white rounded ml-2" id="agenda" type="text"></input>
            <button className="bg-sky-900 text-white rounded ml-2 px-2 hover:cursor-pointer">Entrar</button>
        </div>
        </>
    )
}