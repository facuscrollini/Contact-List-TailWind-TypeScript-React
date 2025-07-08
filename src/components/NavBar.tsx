export const NavBar = () =>{
     return( 
        <>
      <div className="bg-[#005d4b] flex justify-between p-2">
            <section>
                <h1 className="text-xl text-neutral-300 py-2"><i className="fa-brands fa-whatsapp"></i> Agenda personal</h1>
            </section>
        <section >
            <button type="button" className="bg-[#054640] text-neutral-300 hover:cursor-pointer hover:bg-[#06625f] rounded-full p-2 m-1 active:bg-emerald-600">
            Agregar contacto
            </button>
        </section>
      </div>
        </>
    )
}