<template>
  <div class="mainII-container">
    <div class="home-services">
      <div
        class="container h-100 my-0 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="col-md-12">
          <div class="text-center mb-2 services-content">
            <h3 class="fw-bold mb-3">Serviços mais procurados</h3>
            <h5 class="text-muted mb-3">
              A saúde é o melhor presente que você pode se dar.
            </h5>
            <!-- Services -->
            <div class="row justify-content-evenly g-3 mt-4">
              <div class="col-md-1 g-2 text-center service">
                <i class="bi bi-postcard display-8"></i>
                <p class="mt-2">Consultas</p>
              </div>
              <div class="col-md-1 g-2 text-center service">
                <i class="bi bi-activity display-8"></i>
                <p class="mt-2">Exames</p>
              </div>
              <div class="col-md-1 g-2 text-center service">
                <i class="bi bi-person-plus-fill display-8"></i>
                <p class="mt-2">Profissionais</p>
              </div>
              <div class="col-md-1 g-2 text-center service">
                <i class="bi bi-card-list display-8"></i>
                <p class="mt-2">Resultados</p>
              </div>
              <div class="col-md-1 g-2 text-center service">
                <i class="bi bi-geo-alt-fill display-8"></i>
                <p class="mt-2">Unidades</p>
              </div>
              <div class="col-md-1 g-2 text-center service">
                <i class="bi bi-view-list display-8"></i>
                <p class="mt-2">Notícias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="home-servicesII">
      <div class="text-center mb-4 services-content">
        <h3 class="fw-bold my-2">Urgência e Emergência</h3>
      </div>

      <div
        class="services-container d-flex justify-content-between align-items-center"
      >
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
              <h4 class="card-title my-2">Emergência</h4>
              <p class="card-text my-2">
                Encontre o serviço de emergência Santé mais próximo de você.
              </p>
              <a href="#" class="mt-auto card-link">
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
              <h4 class="card-title my-2">Ambulância</h4>
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
.mainII-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-services {
  width: 100vw;
  height: 40vh;
  background-image: url("@/assets/img/bann-serv.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.home-servicesII {
  width: 100vw;
  height: 65vh;
  background-color: var(--cor7);
  padding: 15px;
}

.mainII-container h3,
h4,
h5,
p {
  color: var(--cor9);
}

.serv-container {
  margin: 50px auto;
}

.service {
  min-width: 110px;
  border: 1px solid var(--cor7);
  border-radius: 8px;
  padding: 3px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service:hover {
  transform: translateY(-5px);
  box-shadow: 0 2px 4px var(--cor6);
}

img.emergency-img {
  max-width: 480px;
  max-height: 250px;
  border-radius: 20px;
  opacity: 75%;
}

img.ambulance-img {
  max-width: 400px;
  max-height: 250px;
}

.card-info a {
  text-decoration: none;
  color: var(--cor8);
}

@media (max-width: 890px) {
  img.emergency-img {
    max-width: 350px;
    max-height: 150px;
  }

  img.ambulance-img {
    max-width: 300px;
    max-height: 170px;
  }
  .home-servicesII {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .home-services h3,
  .home-servicesII h3 {
    margin-bottom: 30px;
    font-size: 2rem;
  }
  .col-md-12 .row {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 3;
  }
  .service {
    margin: 15px auto;
  }
  .services-container {
    display: grid !important;
    grid-template-columns: 1fr;
  }
  .col-md-6 {
    width: 100%;
    height: 100%;
    margin: 20px 0;
  }
}

@media (max-width: 799px) {
  .home-services {
    height: 35vh;
  }
  .home-servicesII {
    height: 70vh;
  }
  .home-services h3,
  .home-servicesII h3 {
    margin: 10px 0 !important;
    font-size: 1.2rem;
  }
  .home-services h5 {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
  .col-md-12 .row {
    margin-top: 10px !important;
  }
  .service {
    max-width: 90px !important;
    height: 70px;
    margin: 10px auto;
  }
  .service p {
    font-size: 0.8rem;
  }
  img.emergency-img {
    max-width: 200px;
    max-height: 80px;
  }

  img.ambulance-img {
    max-width: 160px;
    max-height: 80px;
  }
  .card-info {
    margin-top: 10px !important;
  }
  .card-title {
    font-size: 1rem;
    font-weight: bold;
  }
  .card-text,
  .card-link {
    font-size: 0.8rem;
  }
  .services-content {
    margin-bottom: 10px !important;
  }
  .col-md-6 {
    margin: 10px 0;
  }
}
</style>