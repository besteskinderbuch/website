<template>
  <div v-if="mode === 'verifyEmail'">
        Danke für deine Registrierung, deine Email wurde verifiziert.

        <NuxtLink to="/login">Jetzt anmelden!</NuxtLink>
  </div>
</template>

<script setup>
const { verifyEmail } = useAuth();
const route = useRoute()

const mode = route.query.mode
const oobCode = route.query.oobCode

onMounted(async () => {
    if(mode === 'verifyEmail'){
        try {
            await verifyEmail(oobCode)
        } catch (e) {
            console.log(e)
        }
    }
})

</script>