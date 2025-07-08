export const ContactCard = () => {
    return (
        <>
            <div className="bg-red-700 mt-2 mx-2">
                <div className="contact-image">
                    <div className="image-container aspect-square w-48">
                        <img className="h-48 w-96 object-scale-down" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/12/Itachi-ANBU-Featured.jpg" />
                    </div>
                </div>
                <div className="contact-info">
                    <span>
                        <p>Nombre Apellido</p>
                    </span>
                    <span>
                        <p>
                            Dirección
                        </p>
                    </span>
                    <span>
                        <p>
                            Teléfono
                        </p>
                    </span>
                    <span>
                        <p>
                            Email
                        </p>
                    </span>
                </div>
            </div>
        </>
    )
}