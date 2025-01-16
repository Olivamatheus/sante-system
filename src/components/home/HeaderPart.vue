<template>
  <div class="header-container">
    <div class="header-content">
      <div id="serv-banner">
        <div class="carousel">
          <!-- Imagens e conteúdo dos banners -->
          <div
            v-for="(banner, index) in banners"
            :key="index"
            class="carousel-item"
            :class="{ active: currentIndex === index }"
            :style="{ backgroundImage: `url(${banner.image})` }"
          >
            <div class="banner-content">
              <h1>{{ banner.title }}</h1>
              <p>{{ banner.subtitle }}</p>
              <p>{{ banner.description }}</p>
              <button @click="handleButtonClick(banner.buttonText)">
                {{ banner.buttonText }}
              </button>
            </div>
          </div>
          <button class="prev" @click="prevSlide">
            <i class="bi bi-arrow-left-short"></i>
          </button>
          <button class="next" @click="nextSlide">
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>

      <div id="main-banner">
        <div class="slogan-header">
          <h3>Sua jornada de bem-estar começa aqui.</h3>
        </div>
        <div class="logomarca">
          <div class="banner-title">
            <span>R</span>
            <span>e</span>
            <span>d</span>
            <span>e</span>
            <span> </span>
            <span>S</span>
            <span>a</span>
            <span>n</span>
            <span>t</span>
            <span>é</span>
          </div>
          <div class="pulsing-cross">
            <img src="/img/farmacia.png" alt="Cruz" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderPart",
  data() {
    return {
      banners: [
        {
          title: "AGENDAMENTO DE CONSULTAS",
          subtitle: "Para prevenir doenças, realize consultas regulares.",
          description:
            "Manter-se saudável é firmar compromisso com a longevidade.",
          buttonText: "Marcar Consulta",
          image: require("@/assets/img/consultabanner.jpg"),
        },
        {
          title: "AGENDAMENTO DE EXAMES",
          subtitle: "Realize exames para monitorar sua saúde.",
          description: "Cuidar da sua saúde começa com um diagnóstico preciso.",
          buttonText: "Marcar Exame",
          image: require("@/assets/img/examesbanner.jpg"),
        },
        {
          title: "PLANOS DE SAÚDE",
          subtitle: "Garanta acesso aos melhores serviços médicos.",
          description: "Escolha o plano ideal para você e sua família.",
          buttonText: "Conheça Planos",
          image: require("@/assets/img/planobanner.jpg"),
        },
        {
          title: "URGÊNCIA E EMERGÊNCIA",
          subtitle: "Atendimento rápido e eficiente para sua segurança.",
          description: "Estamos prontos para atender em casos de necessidade.",
          buttonText: "Ver Mais",
          image: require("@/assets/img/emergenciabanner.jpg"),
        },
      ],

      currentIndex: 0,
    };
  },
  mounted() {
    this.startCarousel();
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    stopCarousel() {
      clearInterval(this.carouselInterval);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.banners.length) % this.banners.length;
    },
    handleButtonClick(buttonText) {
      if (buttonText === "Marcar Consulta") {
        this.$router.push("/consultas");
      } else if (buttonText === "Marcar Exame") {
        this.$router.push("/exames");
      } else if (buttonText === "Conheça Planos") {
        this.$router.push("/planos");
      } else if (buttonText === "Ver Mais") {
        this.$router.push("/urgencias");
      }
    },
  },
};
</script>

<style scoped>
.header-container {
  width: 100vw;
  height: 100vh;
}

.header-content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

#serv-banner {
  position: relative;
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item.active {
  opacity: 1;
  z-index: 1;
}

.banner-content {
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.banner-content h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.banner-content p {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.banner-content button {
  padding: 10px 20px;
  border: 1px solid var(--cor9);
  border-radius: 20px;
  background-color: var(--cor9);
  color: var(--cor5);
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.banner-content button:hover {
  background-color: var(--cor5);
  color: var(--cor9);
  border: 1px solid var(--cor5);
  box-shadow: 1px 1px 10px var(--cor5);
}

.prev,
.next {
  position: absolute;
  top: 50%;
  background-color: var(--cor9);
  color: var(--cor5);
  border: 1px solid var(--cor9);
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 2;
}

.prev {
  left: 30px;
}

.next {
  right: 50px;
}

.prev:hover,
.next:hover {
  background-color: var(--cor5);
  color: var(--cor9);
  border: 1px solid var(--cor5);
  box-shadow: 1px 1px 10px var(--cor5);
}

#main-banner {
  background-image: url("@/assets/img/banner.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
}

.logomarca {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pulsing-cross {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
  animation-delay: 2.5s;
}

.pulsing-cross img {
  width: 100%;
  height: 100%;
}

/* Animação de pulsação */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Título */
.banner-title {
  margin-right: 20px;
  font-family: "Comfortaa", serif;
  font-size: 6rem;
  color: var(--cor8);
  display: flex;
  gap: 5px;
}

.banner-title span {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1.5s forwards;
}

/* Atrasos para cada letra */
.banner-title span:nth-child(1) {
  animation-delay: 0.2s;
}
.banner-title span:nth-child(2) {
  animation-delay: 0.4s;
}
.banner-title span:nth-child(3) {
  animation-delay: 0.6s;
}
.banner-title span:nth-child(4) {
  animation-delay: 0.8s;
}
.banner-title span:nth-child(5) {
  animation-delay: 1s;
} /* Espaço */
.banner-title span:nth-child(6) {
  animation-delay: 1.2s;
}
.banner-title span:nth-child(7) {
  animation-delay: 1.4s;
}
.banner-title span:nth-child(8) {
  animation-delay: 1.6s;
}
.banner-title span:nth-child(9) {
  animation-delay: 1.8s;
}
.banner-title span:nth-child(10) {
  animation-delay: 2s;
}

/* Animação */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.slogan-header h3 {
  font-family: "Comfortaa", serif;
  font-size: 2.2rem;
  color: var(--cor9);
}

@media (max-width: 799px) {
  .banner-content h1 {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
  .banner-content p {
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
  .banner-content button {
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 0.8rem;
  }
  .prev,
  .next {
    top: 80%;
    width: 30px;
    height: 30px;
    font-size: 1.2rem;
  }
  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .slogan-header h3 {
    font-size: 1.4rem;
    text-align: center;
  }
  .banner-title {
    font-size: 2.5rem;
  }
  .pulsing-cross {
    width: 50px;
    height: 50px;
  }
}
</style>