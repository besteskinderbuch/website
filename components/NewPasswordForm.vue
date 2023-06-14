<script setup>
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

const { confirmPasswordReset } = useAuth();

const emit = defineEmits(['success'])
const password = ref("")

async function handleSetNewPassword() {
  await confirmPasswordReset(props.code, password.value)
  useTrackEvent('newPassword')
  emit("success")
}

</script>

<template>
  <div class="mt-10">
    <div>
      <form @submit.prevent="handleSetNewPassword" class="space-y-6">
        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Neues Passwort</label>
          <div class="mt-2">
            <input id="password" v-model="password" name="password" type="password" autocomplete="new-password" required
              class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Passwort
            setzen</button>
        </div>
      </form>
    </div>

  </div>
</template>
