<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <!-- Logo -->
      <router-link class="navbar-brand" to="/">
        <img src="/img/logo-p.png" alt="Logo Sys Santé" width="120" />
      </router-link>

      <!-- Botão menu mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="bi bi-three-dots"></i>
      </button>

      <!-- Links da Navbar -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav d-flex justify-content-between align-items-center w-100 ms-auto">
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

          <li class="nav-item"><a class="nav-link" href="#">Unidades</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Especialidades</a></li>
          <li class="nav-item">
            <router-link class="nav-link" to="/exames">Exames e Procedimentos</router-link>
          </li>
          <li class="nav-item"><a class="nav-link" href="#">Resultados de Exames</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Encontre um Médico</a></li>
          
          <!-- Botão Login -->
          <li class="nav-item">
            <router-link class="nav-link btn btn-primary text-white" to="/login">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
a {
    text-decoration: none;
}
.navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: visible;
  z-index: 99;
}

.nav-link {
  font-weight: 500;
  color: var(--cor9);
}

.nav-link:hover {
  color: var(--cor6);
}

.btn {
  padding: 10px 20px;
  border: 1px solid var(--cor9);
  border-radius: 20px;
  background-color: var(--cor9);
  color: var(--cor5);
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: var(--cor6);
  color: var(--cor9);
  border: 1px solid var(--cor6);
  box-shadow: 0 0 5px var(--cor5);
}

@media (max-width: 890px) {
  .navbar-toggler {
    border: none;
  }

  button i.bi {
    color: var(--cor8);
    font-size: 35px;
  }

  button i.bi:hover {
    color: var(--cor6);
  }

  .navbar-collapse {
    position: absolute;
    top: 60px;
    right: 0;
    width: 210px;
    height: auto;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    z-index: 105;
  }

  .navbar-collapse.show {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }

  .nav-link {
    padding: 3px 8px;
  }

  .dropdown-menu {
    position: static;
    background-color: var(--cor7);
    width: 100%;
    margin: 0;
    padding: 3px;
    border: none;
    box-shadow: none;
  }

  a.dropdown-item {
    background-color: var(--cor7);
  }

  a.dropdown-item:hover {
    color: var(--cor6);
  }
}

@media (max-width: 799px) {
  .navbar {
    height: 40px;
    padding: 0;
  }

  .navbar-brand img {
    width: 80px;
    height: 20px;
  }

  button i.bi {
    color: var(--cor8);
    font-size: 25px;
  }

  .navbar-collapse {
    top: 40px;
    width: 170px;
  }

  .nav-link {
    font-size: 0.8rem;
  }

  a.dropdown-item {
    font-size: 0.8rem;
  }
}
</style>
