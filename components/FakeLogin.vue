<script setup>
import { useAccountStore } from "~/stores/useAccountStore"
import { useLocalStorage } from "@vueuse/core";

const router = useRouter();
const accountStore = useAccountStore()
const data = useLocalStorage("user-data", null)

const emit = defineEmits(['success'])

function login() {
    const user = {
        type: "user",
        data: {
            name: name.value,
            email: email.value
        },
        subscription: "tier-littlebookworm"
    }

    data.value = user
    accountStore.user = user

    emit("success")
}

const email = ref("")
const password = ref("")
const name = ref("Max Mustermann")

</script>

<template>
    <form class="flex flex-col" @submit.prevent="login" autocomplete="on">
        <div class="flex flex-col">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="email" />
        </div>
        <div class="flex flex-col">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="password" />
        </div>
        <div class="flex flex-col">
            <button type="submit">Login</button>
        </div>
    </form>
</template>
