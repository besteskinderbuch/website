<script setup>
import { notify } from '@kyvg/vue3-notification'
const { sendPasswordResetEmail } = useAuth();

const emit = defineEmits(['success'])

async function handleReset() {
  await sendPasswordResetEmail(email.value)
  notify({
        position: "top",
        type: "success",
        title: "Email wurde versendet",
        text: "Eine Email mit einem Link zum Zurücksetzen deines Passworts wurde versendet.",
    });

  useTrackEvent('passwordReset')
  emit("success")
}

const email = ref("")
</script>

<template>
  <div class="mt-10">
    <div>
      <form @submit.prevent="handleReset" class="space-y-6">
        <p>
          Wenn du deine E-Mail-Adresse angibst, senden wir dir eine E-Mail mit einem Link, um dein Passwort zurückzusetzen.
        </p>
       
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">E-Mail Addresse</label>
          <div class="mt-2">
            <input id="email" v-model="email" name="email" type="email" autocomplete="email" required
              class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Passwort zurücksenden</button>
        </div>
      </form>
    </div>
  </div>
</template>
