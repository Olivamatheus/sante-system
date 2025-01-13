<template>
  <div class="footer-container container my-2 d-flex justify-content-end">
    <div
      class="col-md-12 d-flex flex-column justify-content-between align-items-center"
    >
      <div class="text-center my-4 services-content">
        <h4 class="slogan-footer mb-0">
          Cada cuidado conta. Viva sua melhor versão!
        </h4>
      </div>
      <div class="footer-I">
        <div
          class="row justify-content-evenly align-items-center g-4 footerI-content"
        >
          <div class="col-4 col-md-3 g-5 footer-list align-items-center">
            <img src="/img/logo-p.png" alt="logo-footer" class="logo-footer" />
          </div>
          <div class="col-4 col-md-3 g-5 footer-list">
            <ul>
              <li class="list-group-item my-3"><a href="">Somos Santé</a></li>
              <li class="list-group-item my-3"><a href="">Para Médico</a></li>
              <li class="list-group-item my-3"><a href="">Para Paciente</a></li>
              <li class="list-group-item my-3"><a href="">Para Empresa</a></li>
              <li class="list-group-item my-3">
                <a href="">Para Investidor</a>
              </li>
            </ul>
          </div>
          <div class="col-4 col-md-3 g-5 footer-list">
            <ul>
              <li class="list-group-item my-3"><a href="">Blog</a></li>
              <li class="list-group-item my-3"><a href="">Notícias</a></li>
              <li class="list-group-item my-3">
                <a href="">Acessibilidade</a>
              </li>
              <li class="list-group-item my-3"><a href="">Carreiras</a></li>
              <li class="list-group-item my-3"><a href="">Dados</a></li>
            </ul>
          </div>
          <div class="col-4 col-md-3 g-5 footer-list">
            <ul>
              <li class="list-group-item my-3"><a href="">Fale Conosco</a></li>
              <li class="list-group-item my-3">
                <a href="">Segurança da Informação</a>
              </li>
              <li class="list-group-item my-3">
                <a href="">Portal de Privacidade</a>
              </li>
              <li class="list-group-item my-3">
                <a href="">Plano de Saúde Rede Santé</a>
              </li>
              <li class="list-group-item my-3">
                <a href="">Programa +Santé</a>
              </li>
            </ul>
          </div>
          <div class="col-4 col-md-3 g-5 footer-list">
            <div class="sociais d-flex justify-content-between">
              <a href=""><i class="bi bi-facebook"></i></a>
              <a href=""><i class="bi bi-whatsapp"></i></a>
              <a href=""><i class="bi bi-instagram"></i></a>
              <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="footer-bottom d-flex flex-column justify-content-center align-items-center"
      >
        <img src="/img/logo-p.png" alt="logo-footer" class="logo-footer" />
        <p class="mb-0">
          <i class="bi bi-c-circle"></i> Rede Santé 2025. Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer-container {
  width: 100vw;
  height: 90vh;
}

.footer-container h4,
a,
p {
  color: var(--cor9);
}

.footer-I {
  width: 100vw;
  height: 70vh;
  background-color: var(--cor7);
  display: flex;
  align-items: center;
}

.footerI-content {
  width: 80%;
  margin: auto;
}

.slogan-footer {
  font-family: "Comfortaa", serif;
  font-size: 1.8rem;
  color: var(--cor9);
}

img.logo-footer {
  width: 150px;
  height: 35px;
}

.col-4 li a,
.col-4 i a {
  text-decoration: none;
  cursor: pointer;
}
@media (max-width: 890px) {
  .footer-I {
    height: 80vh;
  }
}
@media (max-width: 799px) {
  .footer-container {
    padding: 0;
  }
  .slogan-footer {
    font-size: 1.4rem;
    text-align: center;
  }
  .footer-I .row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size: 0.8rem;
  }
  img.logo-footer{
    width: 120px;
    height: 30px;
  }
  .footer-list {
    width: 150px;
    margin: 10px;
    text-align: center;
    padding-left: 0;
  }
  .footer-bottom {
    margin-top: 5px;
  }
  .footer-bottom p {
    font-size: 0.6rem;
  }
}
</style>