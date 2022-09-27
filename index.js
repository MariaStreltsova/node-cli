const argv = require("yargs").argv;
const operations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await operations.listContacts();
      console.table(contacts);
      break;

    case "get":
      const oneContact = await operations.getContactById(id);
      if (!oneContact) {
        throw new Error(`Contact with id=${id} not found`);
      }
      console.log(oneContact);
      break;

    case "add":
      const newContact = await operations.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await operations.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
invokeAction(argv);
