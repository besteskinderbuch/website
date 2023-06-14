
<script setup>
import { notify } from '@kyvg/vue3-notification'

const { verifyEmail, isLoggedIn } = useAuth();

const loggedIn = ref(false);
onMounted(() => {
    watch(isLoggedIn, (newVal) => {
        loggedIn.value = newVal
    }, { immediate: true })
});

const route = useRoute()

const mode = route.query.mode
const oobCode = route.query.oobCode

onMounted(async () => {
    if (mode === 'verifyEmail') {
        try {
            await verifyEmail(oobCode)
        } catch (e) {
            console.log(e)
        }
    }
})

const router = useRouter()
function handlePasswordReset() {
    notify({
        position: "top",
        type: "success",
        title: "Password erfolgreich zurückgesetzt",
        text: "Du kannst dich jetzt mit deinem neuen Passwort anmelden.",
    });
    router.push("/");
}

</script>
<template>
    <Page :show-convinced="false">
        <Section>
            <Container v-if="mode === 'verifyEmail'" class="space-y-4">
                <p class="text-lg leading-8 text-gray-800 text-justify">
                    Danke für die deine Registrierung, dein Account ist jetzt verifiziert und kann verwendet werden.
                </p>
                <div v-if="!loggedIn">
                    <NuxtLink v-if="!loggedIn" to="/login">
                        <Icon name="material-symbols:arrow-forward" />Jetzt hier anmelden und direkt loslegen!
                    </NuxtLink>
                    <NuxtLink v-else to="/stories">
                        <Icon name="material-symbols:arrow-forward" />Hier Geschichten finden!
                    </NuxtLink>
                </div>
            </Container>
            <Container v-else-if="mode === 'resetPassword'" class="space-y-4">
                <p class="text-lg leading-8 text-gray-800 text-justify">
                    Dein Passwort wurde erfolgreich zurückgesetzt. Bitte wähle ein neues Passwort.
                </p>
                <NewPasswordForm :code="oobCode" @success="handlePasswordReset"></NewPasswordForm>
            </Container>
        </Section>
    </Page>
</template>
