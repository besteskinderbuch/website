<script setup>
import { useRootStore } from '~/stores/useRootStore';

const { devMode } = useRootStore()

const props = defineProps({
    type: String,
})

const scriptInfos = {
    footer: { url: "https://eomail6.com/form/db3c30ce-f4eb-11ed-8282-ffc86496b2ad.js", id: "db3c30ce-f4eb-11ed-8282-ffc86496b2ad" },
    body: { url: "https://eocampaign1.com/form/44035814-f0e9-11ed-af05-d9c4a3fb6d7e.js", id: "44035814-f0e9-11ed-af05-d9c4a3fb6d7e" },
    abo: { url: "https://eomail6.com/form/778a55e8-ff21-11ed-b283-0f4f077dd717.js", id: "778a55e8-ff21-11ed-b283-0f4f077dd717" },
}

const scriptInfo = scriptInfos[props.type]
const src = scriptInfo.url
const id = scriptInfo.id

</script>

<template>
    <ClientOnly>
        <component v-if="!devMode" is="script" type="text/javascript" async :src="src" :data-form="id" />
        <div v-else>dev mode</div>
    </ClientOnly>
</template>

<style lang="scss">
.emailoctopus-form-row-consent {
    [type="checkbox"] {
        width: 14px !important;
    }

    [type=checkbox]:checked {
        background-color: #2563EB !important;
        border-color: #2563EB !important;
    }
}
</style>