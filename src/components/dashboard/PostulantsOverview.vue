<template>
  <d-card class="card-small blog-comments">
    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-card-body class="p-0">
      <div v-for="(postulant, idx) in postulants" :key="idx" class="blog-comments__item d-flex p-3">
        <!-- Avatar -->
        <div class="blog-comments__avatar mr-3">
          <img :src="postulant.author.image" :alt="postulant.author.name" />
        </div>

        <!-- Content -->
        <div class="blog-comments__content">
          <!-- Content - Title -->
          <div class="blog-comments__meta text-muted">
            <a class="text-secondary" :href="postulant.author.url">{{ postulant.author.name }}</a>
            <span class="text-muted">&nbsp;– {{ postulant.date }}</span>
          </div>

          <!-- Content - Body -->
          <p class="m-0 my-1 mb-2 text-muted">{{ postulant.body }}</p>

          <!-- Content - Actions -->
          <div class="blog-comments__actions">
            <d-button-group size="small">
              <d-button class="btn-white" @click="handleClick('approve', postulant.id)">
                <span class="text-success">
                  <i class="material-icons">check</i>
                </span> Aprobar
              </d-button>
              <d-button class="btn-white" @click="handleClick('reject', postulant.id)">
                <span class="text-danger">
                  <i class="material-icons">clear</i>
                </span> Rechazar
              </d-button>
              <d-button class="btn-white" @click="handleClick('edit', postulant.id)">
                <span class="text-light">
                  <i class="material-icons">more_vert</i>
                </span> Ver información
              </d-button>
            </d-button-group>
          </div>
        </div>
      </div>
    </d-card-body>

    <d-card-footer class="border-top">
      <d-row>
        <!-- View All Comments -->
        <d-col class="text-center view-report">
          <d-button
            type="submit"
            class="btn-white"
            @click="$router.push({name:'postulants'})"
          >Ver todos los postulantes</d-button>
        </d-col>
      </d-row>
    </d-card-footer>
  </d-card>
</template>

<script>
const postulantsData = [
  {
    id: 1,
    date: "4 días atrás",
    author: {
      image: require("@/assets/images/avatars/1.jpg"),
      name: "John Doe",
      url: "#"
    },
    body: "Perfil revisado"
  },
  {
    id: 2,
    date: "4 días atrás",
    author: {
      image: require("@/assets/images/avatars/2.jpg"),
      name: "John Doe",
      url: "#"
    },
    body: "Perfil por revisar"
  },
  {
    id: 3,
    date: "5 días atrás",
    author: {
      image: require("@/assets/images/avatars/3.jpg"),
      name: "John Doe",
      url: "#"
    },
    body: "Perfil revisado"
  }
];

export default {
  name: "discussions",
  props: {
    /**
     * The component's title.
     */
    title: {
      type: String,
      default: "Discussions"
    },
    /**
     * The discussions data.
     */
    postulants: {
      type: Array,
      default() {
        return postulantsData;
      }
    }
  },
  methods: {
    /**
     * Emits an action and passes the discussions' ID for reference.
     * @param  {String} action The action type. One of: approve,reject,edit,view-all-comments
     */
    handleClick(action, id) {
      this.$emit(action, id);
    }
  }
};
</script>
