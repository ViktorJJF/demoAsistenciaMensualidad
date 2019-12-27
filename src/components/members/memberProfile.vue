<template>
  <div>
    <d-btn class="m-1" @click.native="showModal=true;">Editar</d-btn>
    <d-modal v-if="showModal" @close="showModal=false;" size="lg">
      <d-modal-header>
        <d-modal-title>
          <h3 class="page-title">Detalle del miembro {{memberId}}</h3>
        </d-modal-title>
      </d-modal-header>
      <d-modal-body>
        <d-container fluid class="main-content-container px-4">
          <d-row>
            <d-col lg="4">
              <d-card class="card-small mb-4 pt-3">
                <!-- Card Header -->
                <d-card-header class="border-bottom text-center">
                  <!-- User Avatar -->
                  <div class="mb-3 mx-auto">
                    <img
                      class="rounded-circle"
                      :src="member.profile_picture"
                      :alt="member.first_name"
                      width="110"
                    />
                  </div>

                  <!-- User Name -->
                  <h4 class="mb-0">{{ member.first_name }} {{ member.last_name }}</h4>

                  <!-- User Job Title -->
                  <span class="text-muted d-block mb-2">{{ member.rank }}</span>

                  <!-- User Follow -->
                  <d-button pill outline size="sm" class="mb-2">
                    <i class="material-icons mr-1">edit</i> Modificar foto
                  </d-button>
                </d-card-header>
              </d-card>
            </d-col>
            <d-col lg="8">
              <d-card class="card-small mb-4">
                <!-- Card Header -->
                <d-card-header class="border-bottom">
                  <h6 class="m-0">Detalles del miembro</h6>
                </d-card-header>

                <d-list-group flush>
                  <d-list-group-item class="p-3">
                    <d-row>
                      <d-col>
                        <d-form>
                          <d-form-row>
                            <!-- First Name -->
                            <d-col md="6" class="form-group">
                              <label for="feFirstName">Nombres</label>
                              <d-form-input
                                type="text"
                                id="feFirstName"
                                placeholder="Nombres"
                                :value="member.first_name"
                              />
                            </d-col>

                            <!-- Last Name -->
                            <d-col md="6" class="form-group">
                              <label for="feLastName">Apellidos</label>
                              <d-form-input
                                type="text"
                                id="feLastName"
                                placeholder="Apellidos"
                                :value="member.last_name"
                              />
                            </d-col>
                          </d-form-row>

                          <d-form-row>
                            <!-- Email -->
                            <d-col md="6" class="form-group">
                              <label for="feEmail">Correo electrónico</label>
                              <d-form-input
                                type="email"
                                id="feEmail"
                                placeholder="ejemplo@example.com"
                                :value="member.email"
                              />
                            </d-col>

                            <!-- Password -->
                            <d-col md="6" class="form-group">
                              <label for="fePassword">Rango</label>
                              <d-form-select
                                v-model="member.rank"
                                :options="['Postulante','Aprendiz Masón','Compañero Masón','Maestro Masón']"
                              />
                            </d-col>
                          </d-form-row>
                          <d-form-row>
                            <!-- Cellphone -->
                            <d-col md="6" class="form-group">
                              <label for="feEmail">Celular</label>
                              <d-form-input
                                type="text"
                                placeholder="+51983624478"
                                :value="member.cell_number"
                              />
                            </d-col>

                            <!-- Phone -->
                            <d-col md="6" class="form-group">
                              <label for="fePassword">Teléfono</label>
                              <d-form-input
                                type="text"
                                placeholder="(484) 2315010"
                                :value="member.phone_number"
                              />
                            </d-col>
                          </d-form-row>

                          <d-form-row>
                            <!-- Country -->
                            <d-col md="5" class="form-group">
                              <label for="feInputState">País</label>
                              <d-form-select
                                v-model="member.country"
                                :options="['Perú','Chile','Bolivia','Colombia']"
                              />
                            </d-col>
                            <!-- City -->
                            <d-col md="7" class="form-group">
                              <label for="feInputCity">Ciudad</label>
                              <d-form-input type="text" placeholder="Ciudad" :value="member.city" />
                            </d-col>
                          </d-form-row>
                          <!-- Address -->
                          <div class="form-group">
                            <label for="feInputAddress">Dirección</label>
                            <d-form-input
                              type="text"
                              id="feInputAddress"
                              placeholder="1234 Distrito Principal"
                              :value="member.address"
                            />
                          </div>
                          <d-button type="submit" class="btn-accent">Actualizar Datos</d-button>
                        </d-form>
                      </d-col>
                    </d-row>
                  </d-list-group-item>
                </d-list-group>
              </d-card>
            </d-col>
          </d-row>
        </d-container>
      </d-modal-body>
    </d-modal>
  </div>
</template>

<script>
export default {
  name: "member-profile",
  props: {
    memberId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      showModal: false,
      member: null
    };
  },
  mounted() {
    this.getMemberById(this.memberId);
  },
  methods: {
    getMemberById(id) {
      this.member = this.$store.state.membersModule.members.find(
        member => member.id == id
      );
    }
  }
};
</script>

