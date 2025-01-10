<template>
  <div class="mainII-container">
    <div
      class="container h-100 my-0 d-flex flex-column justify-content-center align-items-center home-services"
    >
      <div class="col-md-12">
        <div class="text-center mb-2 services-content">
          <h3 class="fw-bold mb-3">Serviços mais procurados</h3>
          <h5 class="text-muted mb-3">
            A saúde é o melhor presente que você pode se dar.
          </h5>
          <!-- Services -->
          <div class="row justify-content-evenly g-3 mt-4">
            <div class="col-6 col-md-1 g-2 text-center service">
              <i class="bi bi-postcard display-8"></i>
              <p class="mt-2">Consultas</p>
            </div>
            <div class="col-6 col-md-1 g-2 text-center service">
              <i class="bi bi-activity display-8"></i>
              <p class="mt-2">Exames</p>
            </div>
            <div class="col-6 col-md-1 g-2 text-center service">
              <i class="bi bi-person-plus-fill display-8"></i>
              <p class="mt-2">Profissionais</p>
            </div>
            <div class="col-6 col-md-1 g-2 text-center service">
              <i class="bi bi-card-list display-8"></i>
              <p class="mt-2">Resultados</p>
            </div>
            <div class="col-6 col-md-1 g-2 text-center service">
              <i class="bi bi-geo-alt-fill display-8"></i>
              <p class="mt-2">Unidades</p>
            </div>
            <div class="col-6 col-md-1 g-2 text-center service">
              <i class="bi bi-view-list display-8"></i>
              <p class="mt-2">Notícias</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-3 home-servicesII">
      <div class="text-center mb-4 services-content">
        <h3 class="fw-bold mb-4">Urgência e Emergência</h3>
      </div>

      <div class="services-container d-flex justify-content-between align-items-center">
        <div class="col-md-6">
          <div
            class="card-body d-flex flex-column justify-content-between align-items-center text-center"
          >
            <img
              src="/img/urgencia-e-emergencia.png"
              alt="emergency-card"
              class="emergency-img"
            />
            <div class="card-info mt-3">
              <h4 class="card-title my-2 fw-bold">Emergência</h4>
              <p class="card-text my-2">
                Encontre o serviço de emergência Santé mais próximo de você.
              </p>
              <a href="#" class="mt-auto">
                Buscar unidade mais próxima
                <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div
            class="card-body d-flex flex-column justify-content-between align-items-center text-center"
          >
            <img
              src="/img/ambulance.png"
              alt="ambulance-card"
              class="ambulance-img"
            />
            <div class="card-info">
              <h4 class="card-title my-2 fw-bold">Ambulância</h4>
              <p class="card-text my-2">
                Ambulância disponível para serviços de urgência e emergencia.
              </p>
              <a href="#" class="mt-auto">
                Solicitar
                <i class="bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainIIPart",
};
</script>

<style scoped>
.container .home-services {
  height: 35vh;
}

.container .home-servicesII {
  height: 65vh;
}

.home-services {
  margin: 50px auto;
}

.service {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

img.emergency-img {
  width: 445px;
  height: 220px;
}

img.ambulance-img {
  width: 360px;
  height: 235px;
}

.card-info a {
  text-decoration: none;
}

</style>