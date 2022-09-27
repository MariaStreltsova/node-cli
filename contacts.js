const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

const contsctsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contsctsPath);
  const contacts = data ? JSON.parse(data) : [];
  return contacts;
}

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const result = allContacts.find((item) => item.id === contactId);
  return result;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => Number(item.id) === contactId);
  const newContactsList = allContacts.filter(
    (item) => Number(item.id) !== contactId
  );
  await fs.writeFile(contsctsPath, JSON.stringify(newContactsList));
  const removedContact = allContacts[index];
  return removedContact;
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  allContacts.push(newContact);
  await fs.writeFile(contsctsPath, JSON.stringify(allContacts, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
