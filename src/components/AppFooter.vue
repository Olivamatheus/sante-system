<template>
  <div class="footer-container container my-2 d-flex justify-content-end">
    <div class="col-md-12 d-flex flex-column justify-content-between align-items-center">
      <div class="text-center my-4 services-content">
        <h4 class="fw-bold">
          Cada cuidado conta. Viva sua melhor versão!
        </h4>
      </div>
      <div class="row justify-content-evenly g-4">
        <div class="col-4 col-md-3 g-5 align-items-center">
            <img src="/img/logo-p.png" alt="logo-footer" class="logo-footer">
        </div>
        <div class="col-4 col-md-3 g-5">
            <ul>
                <li class="list-group-item my-3"><a href="">Somos Santè</a></li>
                <li class="list-group-item my-3"><a href="">Para Médico</a></li>
                <li class="list-group-item my-3"><a href="">Para Paciente</a></li>
                <li class="list-group-item my-3"><a href="">Para Empresa</a></li>
                <li class="list-group-item my-3"><a href="">Para Investidor</a></li>
            </ul>
        </div>
        <div class="col-4 col-md-3 g-5">
            <ul>
                <li class="list-group-item my-3"><a href="">Blog</a></li>
                <li class="list-group-item my-3"><a href="">Notícias</a></li>
                <li class="list-group-item my-3"><a href="">Acessibilidade</a></li>
                <li class="list-group-item my-3"><a href="">Carreiras</a></li>
                <li class="list-group-item my-3"><a href="">Dados</a></li>
            </ul>
        </div>
        <div class="col-4 col-md-3 g-5">
            <ul>
                <li class="list-group-item my-3"><a href="">Fale Conosco</a></li>
                <li class="list-group-item my-3"><a href="">Segurança da Informação</a></li>
                <li class="list-group-item my-3"><a href="">Portal de Privacidade</a></li>
                <li class="list-group-item my-3"><a href="">Plano de Saúde Rede Santè</a></li>
                <li class="list-group-item my-3"><a href="">Programa +Santè</a></li>
            </ul>
        </div>
        <div class="col-4 col-md-3 g-5">
            <div class="sociais d-flex justify-content-between">
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-whatsapp"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
            </div>
        </div>
      </div>
      <div class="footer-bottom d-flex flex-column justify-content-center align-items-center">
        <img src="/img/logo-p.png" alt="logo-footer" class="logo-footer">
        <p><i class="bi bi-c-circle"></i> Rede Santè 2025. Todos os direitos reservados.</p>
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

img.logo-footer {
    width: 150px;
    height: 35px;
}

.col-4 li a, .col-4 i a {
    text-decoration: none;
    cursor: pointer;
}
</style>