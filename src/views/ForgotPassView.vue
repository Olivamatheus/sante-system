<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 shadow" style="width: 100%; max-width: 400px;">
      <h3 class="text-center mb-3">Recuperar Senha</h3>
      <form @submit.prevent="recuperarSenha">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" id="email" required />
        </div>
        <button type="submit" class="btn btn-warning my-3 w-100">Recuperar Senha</button>
        <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EsqueceuSenhaView',
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    recuperarSenha() {
      this.message = `Um email de recuperação foi enviado para ${this.email}`;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 8px;
}

button.btn {
  padding: 10px 20px;
  border: 1px solid var(--cor9);
  border-radius: 20px;
  background-color: var(--cor9);
  color: var(--cor5);
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button.btn:hover {
  background-color: var(--cor6);
  color: var(--cor9);
  border: 1px solid var(--cor6);
  box-shadow: 0 0 5px var(--cor5);
}

</style>
