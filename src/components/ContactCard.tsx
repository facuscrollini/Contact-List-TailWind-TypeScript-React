import type { ContactCardProps } from "../interfaces/ContactCard"

export const ContactCard = ({name, lastName,address,phone,email}:ContactCardProps) => {


    return (
        <>
            <div className="bg-neutral-300 border-2 mt-2 mx-2 p-2 flex justify-between rounded-2xl">
                <div className="flex">
                    <div className="contact-image">
                        <div className="h-50 w-50 rounded-full overflow-hidden">
                            <img className="object-cover w-full h-full" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Itachi-ANBU-Featured.jpg" />
                        </div>
                    </div>
                    <div className="contact-info">
                        <span>
                            <p>{name} {lastName}</p>
                        </span>
                        <span>
                            <p>
                                {address}
                            </p>
                        </span>
                        <span>
                            <p>
                                {phone}
                            </p>
                        </span>
                        <span>
                            <p>
                                {email}
                            </p>
                        </span>
                    </div>
                </div>
                <div className="buttons mx-2">
                    <button className="bg-amber-800 py-2 px-5 rounded-l-lg hover:cursor-pointer"><i className="fa-solid fa-pencil"></i></button>
                    <button className="bg-amber-200 py-2 px-5 rounded-r-lg hover:cursor-pointer"><i className="fa-solid fa-trash"></i></button>
                </div>
            </div>
        </>
    )
}