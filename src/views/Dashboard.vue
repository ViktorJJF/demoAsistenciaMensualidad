<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Tablero de control</span>
        <h3 class="page-title">Estadísticas</h3>
      </d-col>
    </d-row>

    <!-- Small Stats Blocks -->
    <d-row>
      <d-col lg v-for="(stats, idx) in smallStats" :key="idx" class="mb-4">
        <small-stats
          :id="`small-stats-${idx}`"
          variation="1"
          :chart-data="stats.datasets"
          :label="stats.label"
          :value="stats.value"
          :percentage="stats.percentage"
          :increase="stats.increase"
          :decrease="stats.decrease"
        />
      </d-col>
    </d-row>

    <d-row>
      <!-- Users Overview -->
      <d-col lg="8" md="6" sm="12" class="mb-4">
        <bo-users-overview title="Total de miembros" />
      </d-col>

      <!-- Users by Device (lite) -->
      <d-col lg="4" md="6" sm="12" class="mb-4">
        <bo-users-by-device title="Distribución de pagos de miembros" />
      </d-col>
    </d-row>

    <d-row>
      <!-- Discussions -->
      <d-col lg="7" md="12" sm="12" class="mb-4">
        <postulants-overview
          title="Nuevos postulantes"
          @approve="handleApprove"
          @reject="handleReject"
          @edit="handleEdit"
          @view-all-comments="handleViewAllComments"
        />
      </d-col>

      <!-- Top Referrals -->
      <d-col lg="5" md="12" sm="12" class="mb-4">
        <bo-top-referrals title="Algún TOP" />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import SmallStats from "@/components/common/SmallStats.vue";
import TopReferrals from "@/components/common/TopReferrals.vue";
import UsersOverview from "@/components/dashboard/UsersOverview.vue";
import UsersByDevice from "@/components/dashboard/UsersByDeviceLite.vue";
import PostulantsOverview from "@/components/dashboard/PostulantsOverview.vue";

export default {
  components: {
    SmallStats,
    boUsersOverview: UsersOverview,
    boUsersByDevice: UsersByDevice,
    PostulantsOverview,
    boTopReferrals: TopReferrals
  },
  data() {
    return {
      dateRange: {
        from: null,
        to: null
      }
    };
  },
  methods: {
    handleApprove(id) {
      alert(`Approving discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleReject(id) {
      alert(`Rejecting discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleEdit(id) {
      alert(`Editing discussion id: ${id}`); // eslint-disable-line no-alert
    },
    handleViewAllComments() {
      alert("Viewing all comments!"); // eslint-disable-line no-alert
    }
  },
  computed: {
    smallStats() {
      return [
        {
          label: "Total de miembros",
          value: "132",
          percentage: "4.7%",
          increase: true,
          labels: ["Label", "Label", "Label", "Label", "Label", "Label"],
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: [1, 2, 1, 3, 5, 4, 7]
            }
          ]
        },
        {
          label: "Porcentaje de asistencias",
          value: "87%",
          percentage: "3.4%",
          increase: true,
          labels: ["Label", "Label", "Label", "Label", "Label", "Label"],
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Porcentaje de mensualidades pagadas",
          value: "67%",
          percentage: "3.8%",
          increase: false,
          decrease: true,
          labels: ["Label", "Label", "Label", "Label", "Label", "Label"],
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgb(255,65,105)",
              data: [1, 7, 1, 3, 1, 4, 8]
            }
          ]
        },
        {
          label: "Postulantes",
          value: "22",
          percentage: "2.4%",
          increase: true,
          decrease: false,
          labels: ["Label", "Label", "Label", "Label", "Label", "Label"],
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgb(0,123,255,0.1)",
              borderColor: "rgb(0,123,255)",
              data: [3, 2, 3, 2, 4, 5, 4]
            }
          ]
        }
      ];
    }
  }
};
</script>

