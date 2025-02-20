<template>
  <div class="container d-flex justify-content-center align-items-center vw-100 vh-100">
    <div class="card p-4 align-items-center shadow" style="width: 100%; max-width: 400px;">
      <h3 class="text-center mb-3">Login</h3>
      <img src="/img/logo-p.png" alt="Logo Sys Santé" class="my-3" width="130" />
      <form @submit.prevent="login">
        <div class="mb-3 login-user">
          <label for="email" class="form-label">Email</label>
          <input type="email" v-model="email" class="form-control" id="email" required />
        </div>
        <div class="mb-3 password-user">
          <label for="password" class="form-label">Senha</label>
          <input type="password" v-model="password" class="form-control" id="password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100 my-3">Entrar</button>
        <div v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</div>
        <div v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</div>
      </form>
      <div class="text-center mt-3">
        <router-link to="/cadastro">Cadastre-se</router-link>
        <span class="mx-2">|</span>
        <router-link to="/esqueceu-senha">Esqueceu sua senha?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
      successMessage: '',
      usuariosSimulados: [
        { email: 'user1@example.com', password: '123456' },
        { email: 'user2@example.com', password: 'abcdef' },
      ],
    };
  },
  methods: {
    login() {
      const usuarioValido = this.usuariosSimulados.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (usuarioValido) {
        this.successMessage = 'Login realizado com sucesso!';
        this.errorMessage = '';
      } else {
        this.errorMessage = 'Email ou senha incorretos';
        this.successMessage = '';
      }
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
}
.login-user, .password-user {
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
