<template>
  <div class="mainI-container">
    <div class="mb-4 searchUni">
      <div class="text-center">
        <h3 class="fw-bold">Encontre uma unidade Santé</h3>
        <h5 class="text-muted">Onde será mais perto para você?</h5>
      </div>
      <div class="row justify-content-center mt-4">
        <div class="col-md-6">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Digite o nome da cidade ou unidade"
              aria-label="Pesquisar unidade"
            />
            <button class="btn" type="button">Buscar</button>
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-sm" type="button">
              Usar minha localização
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container col-12 my-5 homeCards">
      <div class="row">
        <!-- Card de Resultados de Exames -->
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div
              class="card-body d-flex flex-column justify-content-between align-items-center text-center"
            >
              <img
                src="/img/card-exames.png"
                alt="exames-card"
                class="exames-img"
              />
              <div class="card-info">
                <h5 class="card-title">Resultados de Exames</h5>
                <p class="card-text">
                  Consulte seus resultados de exames online de forma rápida e
                  segura.
                </p>
                <a href="#" class="btn btn-card mt-auto">
                  Consultar Resultados
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Card de Planos de Saúde -->
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow-sm">
            <div
              class="card-body d-flex flex-column justify-content-between align-items-center text-center"
            >
              <img
                src="/img/card-redesante.png"
                alt="plano-card"
                class="card-img"
              />
              <div class="card-info">
                <h5 class="card-title">Planos de Saúde</h5>
                <p class="card-text">
                  Verifique o credenciamento do seu plano de saúde.
                </p>
                <a href="#" class="btn btn-card mt-auto">
                  Verificar Cobertura
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainIPart",
};
</script>

<style scoped>
.mainI-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.searchUni {
  height: 30vh;
  background-color: var(--cor7);
  padding: 15px;
}

.container .homeCards {
  height: 70vh;
}

.searchUni h3,
.searchUni h5 {
  color: var(--cor9);
}

.searchUni input::placeholder {
  font-size: 0.7rem;
}

.btn {
  background-color: var(--cor9);
  color: var(--cor7);
}

.btn:hover {
  background-color: var(--cor5);
  color: var(--cor9);
}

.btn-card {
  width: 200px;
  height: 40px;
}

.card {
  border: 5px solid var(--cor7);
  border-radius: 10px;
}

.exames-img {
  max-width: 90%;
  max-height: 45%;
  margin: 45px 0 10px;
  box-shadow: 0 0 5px var(--cor5);
  border-radius: 10px;
}

.card-img {
  max-width: 350px;
  max-height: 160px;
  box-shadow: 0 0 5px var(--cor5);
  border-radius: 10px;
  margin: 35px 0 10px;
}

h5.card-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--cor9);
}

p.card-text {
  font-size: 1rem;
  color: var(--cor9);
}

@media (max-width: 890px) {
  .searchUni {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .searchUni h3 {
    margin-bottom: 30px;
    font-size: 2rem;
  }
  .container.col-12.my-5.homeCards {
    margin-top: 0 !important;
  }
  .homeCards .row {
    display: grid !important;
    grid-template-columns: 1fr;
  }
  .col-md-6.mb-4 {
    margin: auto;
  }
}

@media (max-width: 799px) {
  .searchUni {
    height: 25vh;
    padding: 5px;
    margin-bottom: 0 !important;
  }
  .container .homeCards {
    height: 75vh;
  }
  .searchUni h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  .searchUni h5 {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
  .btn {
    font-size: 0.8rem;
  }
  .col-md-6 {
    margin-bottom: 0 !important;
  }
  .card {
    border: none;
  }
  .card-body {
    padding: 8px;
  }
  .card img {
    margin: 3px auto;
  }
  h5.card-title {
    font-weight: bold;
    font-size: 1rem;
    margin-top: 10px;
  }

  p.card-text {
    font-size: 0.8rem;
  }
  .exames-img {
    max-width: 70%;
    max-height: 28%;
  }

  .card-img {
    max-width: 200px;
    max-height: 110px;
  }
  .btn-card {
    width: auto;
    height: auto;
  }
}
</style>
