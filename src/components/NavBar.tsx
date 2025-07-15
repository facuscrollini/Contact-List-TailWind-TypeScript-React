import { Link } from "react-router"

export const NavBar = () =>{
     return( 
        <>
      <div className="bg-[#005d4b] flex justify-between py-2 px-4">
            <section>
                <Link to="contact-list">
                <h1 className="text-xl text-neutral-300 py-2"><i className="fa-brands fa-whatsapp"></i> Personal agenda</h1>
                </Link>
            </section>
        <section >
            <Link to="add-contact">
            <button type="button" className="bg-[#054640] text-neutral-300 hover:cursor-pointer hover:bg-[#06625f] rounded-full p-2 m-1 active:bg-emerald-600">
           Add contact
            </button>
            </Link>
        </section>
      </div>
        </>
    )
}