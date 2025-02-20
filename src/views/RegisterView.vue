
<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card p-4 align-items-center shadow" style="width: 100%; max-width: 400px;">
      <h3 class="text-center mb-3">Cadastro</h3>
      <img src="/img/logo-p.png" alt="Logo Sys Santé" class="my-3" width="130" />
      <form @submit.prevent="submitCadastro">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" v-model="nome" class="form-control" id="nome" required />
        </div>
        <div class="mb-3">
          <label for="sexo" class="form-label">Sexo</label>
          <select v-model="sexo" class="form-select" id="sexo" required>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="idade" class="form-label">Idade</label>
          <input type="number" v-model="idade" class="form-control" id="idade" required />
        </div>
        <div class="mb-3">
          <label for="convenio" class="form-label">Convênio</label>
          <input type="text" v-model="convenio" class="form-control" id="convenio" required />
        </div>
        <button type="submit" class="btn btn-success my-3 w-100">Cadastrar</button>
        <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CadastroView',
  data() {
    return {
      nome: '',
      sexo: '',
      idade: '',
      convenio: '',
      message: '',
    };
  },
  methods: {
    submitCadastro() {
      this.message = `Usuário ${this.nome} cadastrado com sucesso!`;
    },
  },
};
</script>

<style scoped>
a {
    text-decoration: none;
}
.card {
  border-radius: 8px;
  margin-top: 50px;
}
form {
    width: 300px;
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