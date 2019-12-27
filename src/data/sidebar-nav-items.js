export default function () {
  return [{
    title: 'Tablero de control',
    to: {
      name: 'dashboard',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Blog Posts',
    htmlBefore: '<i class="material-icons">vertical_split</i>',
    to: {
      name: 'blog-posts',
    },
  }, {
    title: 'Add New Post',
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: {
      name: 'add-new-post',
    },
  }, {
    title: 'Forms & Components',
    htmlBefore: '<i class="material-icons">view_module</i>',
    to: {
      name: 'components-overview',
    },
  }, {
    title: 'Tables',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'tables',
    },
  }, {
    title: 'User Profile',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'user-profile-lite',
    },
  }, {
    title: 'Errors',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'errors',
    },
  }, {
    title: 'Asistencia',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'assistControl',
    },
  }, {
    title: 'Control de Pagos',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'paymentControl',
    },
  }, {
    title: 'Miembros',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'members',
    },
  }, {
    title: 'Postulantes',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'postulants',
    },
  }];
}