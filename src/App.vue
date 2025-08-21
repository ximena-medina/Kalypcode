<template>
  <header class="relative w-full h-screen overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="C:\Users\ximem\OneDrive\Documentos\Ximena Medina\Kalypcode_pagina\Kalypcode\src\video\KALYPCODE.mp4" type="video/mp4" />
      Tu navegador no soporta el video de fondo.
    </video>

    <div class="relative z-10 flex items-center justify-center h-full text-white">
      <div class="text-center p-8 bg-black bg-opacity-60 rounded-xl max-w-2xl mx-auto">
        <h1 class="text-5xl font-bold mb-4">Bienvenido a Kalypcode</h1>
        <p class="text-xl mb-6">¡Digitaliza tu experiencia con nosotros!</p>
        <Button label="Explorar" class="p-button-rounded p-button-primary" />
      </div>
    </div>
  </header>

  <section class="bg-gray-100 py-20">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-gray-900 mb-6">Expertos en el mundo dgital</h2>
      <p class="text-lg text-gray-700 mb-10">
        Somos una empresa de confianza con calidad excepcional y excelente servicio.
        ¡Contáctanos y forma parte de nuestros clientes satisfechos!
      </p>
      <router-link
        :to="{ name: 'successStories' }"
        class="inline-flex items-center px-6 py-3 bg-white text-blue-700 border border-blue-700 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition"
      >
        Casos de Éxito
      </router-link>
    </div>
  </section>

  <section class="bg-sky-900 py-20">
    <div class="max-w-6xl mx-auto px-6 text-center text-white">
      <h2 class="text-4xl font-bold mb-6">Impulsamos la innovación</h2>
      <p class="text-lg">
        Ayudamos a startups, pequeñas empresas y grandes compañías a desarrollar
        productos de innovación digital. ¡Conviértete en parte del cambio con nosotros!
      </p>
    </div>
  </section>

  <section class="bg-white py-20">
    <div class="max-w-6xl mx-auto px6 text-left text-black">
      <h2 class="text-4xl font-bold mb-6 m-8">Impulsamos la innovación de tu proyecto</h2>
      <p class="text-lg m-8">
        Ayudamos a startups, pequeñas empresas y grandes compañias a desarrollar
        productos de innovacion digital. ¡Conviértete en parte del ambio con nosotros!
      </p>
    </div>
  </section>
  <div class="hidden relative flex-1 h-auto self-stretch lg:block">
		<div class="absolute w-full h-full left-48 animate-hero-thumb-sm-animation bottom-[-18px] max-w-[400px]">
			<img class="h-50 w-50 object-cover" src="" alt="Imagen publicitaria" />
		</div>
	</div>
</template>

<script setup>
import Button from 'primevue/button';
</script>

<style scoped>

</style>
