<template>
  <div class="flex justify-center py-32">
    <div class="rounded-lg">
      <div class="flex justify-center h-96">
        <img
          class="object-cover h-full rounded-lg"
          src="https://lh3.googleusercontent.com/g-W0vwcMvALYROKIaS0t0CQrVKZ6cqqFiibzQ0B9-TLkmEkBmYDyBCgl9RvYDStP-2lzvRBqr6v5wxgaoVlujwEP=w640-h400-e365-rj-sc0x00ffffff"
          alt="logo"
        />
      </div>
      <h1 class="py-12 text-5xl text-center text-white">
        Say hello to my little friend!
      </h1>
      <div class="py-2 text-center text-white">
        <router-link :to="{ name: 'home.movieQuote' }">
          <h1 class="font-sans text-5xl underline">kukaracha</h1></router-link
        >
      </div>
    </div>
  </div>
</template>
