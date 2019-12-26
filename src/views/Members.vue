<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Resumen</span>
        <h3 class="page-title">Listado de miembros de la orden</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <d-container fluid>
      <d-row align-h="end">
        <d-button>Importar CSV</d-button>
        <d-button>Agregar registro</d-button>
      </d-row>
    </d-container>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Miembros activos/postulantes</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">ID</th>
                  <th scope="col" class="border-0">Perfil</th>
                  <th scope="col" class="border-0">Primer Nombre</th>
                  <th scope="col" class="border-0">Segundo Nombre</th>
                  <th scope="col" class="border-0">Correo</th>
                  <th scope="col" class="border-0">Estado</th>
                  <th scope="col" class="border-0">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(member,propertyName,index) in members" :key="member.id">
                  <td>{{ member.id }}</td>
                  <td>
                    <d-img height="150" width="150" rounded :src="member.picture" fluid />
                  </td>
                  <td
                    :data-label="ga"
                    class="align-middle"
                  >{{propertyName}} {{index}} : {{member.first_name}}</td>
                  <td class="align-middle">{{ member.last_name }}</td>
                  <td class="align-middle">{{ member.email }}</td>
                  <td class="align-middle">
                    <d-badge v-if="member.status" theme="primary">Activo</d-badge>
                    <d-badge v-else theme="danger">Postulante</d-badge>
                  </td>
                  <td class="align-middle">
                    <d-button class="m-1" v-d-tooltip="'Editar'">Editar</d-button>
                    <d-button theme="danger">Eliminar</d-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: []
    };
  },
  async mounted() {
    await this.$store.dispatch("members/fetchMembers");
    this.initialData();
  },
  methods: {
    initialData() {
      this.members = this.$store.state.members.members;
    }
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 1px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  /*
	Label the data
	*/
  td:nth-of-type(1):before {
    content: attr(data-label);
  }
  td:nth-of-type(2):before {
    content: attr(data-label);
  }
  td:nth-of-type(3):before {
    content: attr(data-label);
  }
  td:nth-of-type(4):before {
    content: attr(data-label);
  }
  td:nth-of-type(5):before {
    content: "Wars of Trek?";
  }
  td:nth-of-type(6):before {
    content: "Secret Alias";
  }
  td:nth-of-type(7):before {
    content: "Date of Birth";
  }
  td:nth-of-type(8):before {
    content: "Dream Vacation City";
  }
  td:nth-of-type(9):before {
    content: "GPA";
  }
  td:nth-of-type(10):before {
    content: "Arbitrary Data";
  }
}
</style>
