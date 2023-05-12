<script setup>
import { onMounted } from "vue";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = "https://a9e87d58-7368-4dfb-a2c7-2c68db54eef2.hanko.io";

onMounted(() => {
  // register the component
  // see: https://github.com/teamhanko/hanko/blob/main/frontend/elements/README.md#script
  register({ shadow: true })
    .catch((error) => {
      // handle error
    });
});

const router = useRouter();

const redirectAfterLogin = () => {
  // successfully logged in, redirect to a page in your application
  router.push({ path: "/" });
};

</script>

<template>
    <hanko-auth @hankoAuthSuccess="redirectAfterLogin" :api="hankoApi" />
</template>