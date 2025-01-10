<template>
  <div class="mainI-container">
    <div class="container my-3 searchUni">
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
            <button class="btn btn-primary" type="button">Buscar</button>
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-outline-secondary btn-sm" type="button">
              Usar minha localização
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5 homeCards">
      <div class="row">
        <!-- Card de Resultados de Exames -->
        <div class="col-md-6">
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
                  <a href="#" class="btn btn-primary mt-auto">
                    Consultar Resultados
                  </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Card de Planos de Saúde -->
        <div class="col-md-6">
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
                    Verifique a cobertura do seu plano de saúde e obtenha
                    informações detalhadas.
                  </p>
                  <a href="#" class="btn btn-success mt-auto">
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
}

.container .searchUni {
  height: 40vh;
}

.container .homeCards {
  height: 60vh;
}

h2 {
  font-weight: bold;
}

h4 {
  font-weight: 400;
  color: #555;
}

.card {
  border-radius: 15px;
}

.exames-img {
  width: 350px;
  height: 220px;
  margin: 20px 0;
  border-radius: 10px;
}

.card-img {
  width: 400px;
  height: 200px;
  border: 2px solid var(--cor5);
  box-shadow: 0 0 5px var(--cor3);
  border-radius: 10px;
  margin: 35px 0 10px;
}

.card-title {
  font-weight: bold;
  font-size: 1.5rem;
}

.card-text {
  font-size: 1rem;
  color: #555;
}
</style>
