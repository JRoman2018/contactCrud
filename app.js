var contacts = [
  {
    id: 8917854334067763,
    firstname: 'Juan',
    lastname: 'Augusto',
    birthDay: '2017-02-10',
    phone: '829-953-7899',
  },
  {
    id: 1517854334067453,
    firstname: 'Antonio',
    lastname: 'Rodriguez',
    birthDay: '2017-02-10',
    phone: '829-653-7899',
  },
  {
    id: 3917854114077763,
    firstname: 'Ramón',
    lastname: 'Santos',
    birthDay: '2017-02-10',
    phone: '809-253-7899',
  },
];

var initialContact = {
  id: Math.random().toString().split('.')[1],
  firstname: '',
  lastname: '',
  birthDay: '',
  phone: '',
};

function findcontact(contactid) {
  return contacts[findcontactKey(contactid)];
}

function findcontactKey(contactid) {
  for (var key = 0; key < contacts.length; key++) {
    if (contacts[key].id == contactid) {
      return key;
    }
  }
}

const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Contacto',
    contacts: contacts,
    isEdit: false,
    newContact: initialContact,
    btnText: 'Agregar Contacto',
  },
  methods: {
    addContact: function () {
      if (!this.isEdit) {
        this.contacts.push({
          ...this.newContact,
        });
        this.newContact = initialContact;
      } else {
        this.contacts[findcontactKey(this.newContact.id)] = {
          id: this.newContact.id,
          firstname: this.newContact.firstname,
          lastname: this.newContact.lastname,
          birthDay: this.newContact.birthDay,
          phone: this.newContact.phone,
        };
        this.newContact = initialContact;
        this.btnText = 'Agregar Contacto';
        this.isEdit = false;
      }
    },
    editContact: function (index) {
      this.isEdit = true;
      this.newContact = { ...this.contacts[findcontactKey(index)] };
    },
    deleteContact: function (contactid) {
      this.contacts.splice(findcontactKey(contactid), 1);
    },
  },
});
