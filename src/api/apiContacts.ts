// import type { NewContactResponse } from "../interfaces/ApiTypes";
import type { NewContactResponse } from "../interfaces/ApiTypes";
import type {
  ContactType,
  // ContactType,
  StateType,
} from "../interfaces/ReducerTypes";
import {
  URL_CREATE_AGENDA,
  URL_DELETE_AGENDA_CONTACT,
    URL_CREATE_AGENDA_CONTACT,
  URL_GET_AGENDA_CONTACTS,
} from "./urls";

export const getAgendaContacts = async (agenda: string): Promise<StateType> => {
  try {
    const response = await fetch(URL_GET_AGENDA_CONTACTS(agenda));
    if (response.ok) {
      const data = await response.json();
      const contacts = data?.contacts;
      return {
        contacts: contacts,
        slug: agenda,
      };
    }
    const createAgenda = await fetch(URL_CREATE_AGENDA(agenda), {
      method: "POST",
      headers: {
        accept: "application/json",
      },
    });

    if (createAgenda.ok) {
      const data = await response.json();
      const contacts = data?.contacts;
      return {
        contacts: contacts,
        slug: agenda,
      };
    }

    return {
      slug: "",
      contacts: [],
      error: "Ha ocurrido un error",
    };
  } catch (error) {
    return {
      slug: "",
      contacts: [],
      error: `Ha ocurrido un error ${error}`,
    };
  }
};

export const deleteAgendaContact = async (agenda: string, id: number) => {
  await fetch(URL_DELETE_AGENDA_CONTACT(agenda, id), {
    method: "DELETE",
  }).then(
    (resp) =>
      !resp.ok && console.log("Ha ocurrido un error al eliminar el contacto")
  );
};

export const createAgendaContact = async (
  agenda: string,
  contact: ContactType
): Promise<NewContactResponse> => {
  try {
    const response = await fetch(URL_CREATE_AGENDA_CONTACT(agenda), {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return {
        name: "",
        phone: "",
        email: "",
        address: "",
        error: "Ha ocurrido un error"
      };
    }
  } catch (error) {
    return {
      name: "",
        phone: "",
        email: "",
        address: "",
        error: "Ha ocurrido un error"
    };
  }
};
