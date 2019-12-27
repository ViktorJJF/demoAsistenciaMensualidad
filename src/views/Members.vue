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
        <d-button class="mr-1" @click="exportPDF">Generar reporte</d-button>
        <d-button class="mr-1" @click="exportExcel">Exportar a EXCEL</d-button>
        <d-button>Agregar miembro</d-button>
      </d-row>
    </d-container>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Miembros activos/postulantes</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table id="my-table" class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">ID</th>
                  <th scope="col" class="border-0">Perfil</th>
                  <th scope="col" class="border-0">Nombres</th>
                  <th scope="col" class="border-0">Apellidos</th>
                  <th scope="col" class="border-0">Correo</th>
                  <th scope="col" class="border-0">Rango</th>
                  <th scope="col" class="border-0">Contacto</th>
                  <th scope="col" class="border-0">País</th>
                  <th scope="col" class="border-0">Ciudad</th>
                  <th scope="col" class="border-0">Dirección</th>
                  <th scope="col" class="border-0">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="member in members" :key="member.id">
                  <td>{{ member.id }}</td>
                  <td>
                    <d-img
                      class="border-image"
                      height="150"
                      width="150"
                      rounded
                      :src="member.profile_picture"
                      fluid
                    />
                  </td>
                  <td data-label="ga" class="align-middle">
                    {{ member.first_name }}
                  </td>
                  <td class="align-middle">{{ member.last_name }}</td>
                  <td class="align-middle">{{ member.email }}</td>
                  <td class="align-middle">
                    <d-badge v-if="member.rank == 'Postulante'" theme="danger"
                      >Postulante</d-badge
                    >
                    <p v-else>{{ member.rank }}</p>
                  </td>
                  <td class="align-middle">{{ member.cell_number }}</td>
                  <td class="align-middle">{{ member.country }}</td>
                  <td class="align-middle">{{ member.city }}</td>
                  <td class="align-middle">{{ member.address }}</td>
                  <td class="align-middle">
                    <member-profile :memberId="member.id"></member-profile>
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
import memberProfile from "@/components/members/memberProfile";
import XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
export default {
  components: {
    memberProfile
  },
  data() {
    return {
      showModal: false,
      members: []
    };
  },
  async mounted() {
    await this.$store.dispatch("membersModule/fetchMembers");
    this.initialData();
  },
  methods: {
    initialData() {
      this.members = this.$store.state.membersModule.members;
    },
    exportExcel() {
      let data = XLSX.utils.json_to_sheet(this.members);
      const workbook = XLSX.utils.book_new();
      const filename = "miembros-logia";
      XLSX.utils.book_append_sheet(workbook, data, filename);
      XLSX.writeFile(workbook, `${filename}.xlsx`);
    },
    exportPDF() {
      // Default export is a4 paper, portrait, using milimeters for units
      var doc = new jsPDF({
        orientation: "landscape"
      });
      doc.text(
        "Listado de miembros de la logia: Francisco de Paula Gonzáles Vigil N° 38",
        15,
        10
      );
      doc.autoTable({
        theme: "grid",
        headStyles: { fillColor: [25, 53, 93] },
        styles: { fontSize: 9 },
        columnStyles: { europe: { halign: "center" } }, // European countries centered
        body: this.members,
        columns: [
          { header: "Nombres", dataKey: "first_name" },
          { header: "Apellidos", dataKey: "last_name" },
          { header: "Correo", dataKey: "email" },
          { header: "Celular", dataKey: "cell_number" },
          { header: "Teléfono", dataKey: "phone_number" },
          { header: "Dirección", dataKey: "address" },
          { header: "País", dataKey: "country" },
          { header: "Ciudad", dataKey: "city" },
          { header: "Rango", dataKey: "rank" }
        ]
      });
      doc.save("reporte_miembros_logia.pdf");
    }
  }
};
</script>

<style lang="scss" scoped>
.border-image {
  border-style: solid;
  border-width: 1px;
}
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
