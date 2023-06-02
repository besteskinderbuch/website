import { initializeApp } from "firebase/app";

import { VueFire, VueFireAuth } from "vuefire";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyDw2TTwT4poKxVVTM-A-BMTrxAkfNe1RfE",
    authDomain: "bestes-kinderbuch.firebaseapp.com",
    projectId: "bestes-kinderbuch",
    storageBucket: "bestes-kinderbuch.appspot.com",
    messagingSenderId: "577377422130",
    appId: "1:577377422130:web:49f8ab348aaca7d7d0e52b",
    measurementId: "G-ZBRN4QMQ4Y"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  nuxtApp.vueApp.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  });
});
