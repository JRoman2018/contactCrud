const app = new Vue({
  el: '#app',
  data: {
    titulo: 'Contacto',
    contacts: [],
    newContact: {
      firstname: '',
      lastname: '',
      birthDay: '',
      phone: '',
    },
    btnText: 'Agregar Contacto',
  },
  methods: {
    addContact: function () {
      this.contacts.push({
        ...this.newContact,
        estado: false,
      });
      console.log(this.contacts);
      this.newContact = {
        firstname: '',
        lastname: '',
        birthDay: '',
        phone: '',
      };
    },
    editContact: function () {
      console.log('editar');
    },
  },
});
