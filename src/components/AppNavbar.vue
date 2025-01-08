<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="/img/logo.png" alt="Logo Sys Santé" width="120" />
      </a>

      <!-- Botão para versão mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links da Navbar -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              O Grupo
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Sobre Nós</a></li>
              <li><a class="dropdown-item" href="#">Missão e Valores</a></li>
              <li><a class="dropdown-item" href="#">Nossa História</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">Unidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Especialidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Exames e Procedimentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resultados de Exames</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Encontre um Médico</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped>

.navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 99;
}

.nav-link {
  font-weight: 500;
  color: #333;
}

.nav-link:hover {
  color: #0056b3;
}
</style>
