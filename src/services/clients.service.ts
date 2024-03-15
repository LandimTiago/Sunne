import { getCompanies, getPersons } from "../infra/fakerApi";

interface Person {
  firstname: string;
  lastname: string;
}

interface Company {
  name: string;
  email: string;
  phone: string;
}

class ClietListClass {
  constructor(client?: any) {
    this.name = client?.name;
    this.email = client?.email;
    this.phone = client?.phone;
    this.person = client?.person;
  }

  name: string;
  email: string;
  phone: string;
  person: Person;
}
interface ClientList {
  name: string;
  email: string;
  phone: string;
  person: Person;
}
interface ClientListResponse {
  total: number;
  clients: ClientList[];
}

const clientsList = async (quantity: number) => {
  const companies: Company[] = await getCompanies(quantity);

  if (companies.length > 0) {
    console.log("Resultado ta dando");
    const clientList: ClientList[] = await Promise.all(
      companies.map(async (company: Company) => {
        const personEntity = await getPersons(1);
        const personObject = personEntity[0];

        const person: Person = {
          firstname: personObject.firstname,
          lastname: personObject.lastname,
        };

        const client: ClientList = new ClietListClass();
        client.name = company.name;
        client.email = company.email;
        client.phone = company.phone;
        client.person = person;

        return client;
      })
    );

    const result: ClientListResponse = {
      total: quantity,
      clients: clientList,
    };

    return result;
  }
};

export { clientsList };
