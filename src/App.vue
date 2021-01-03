<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item"> Issue Reader </router-link>
    </div>
  </nav>
  <router-view v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback>
        <LoadingSpinner />
      </template>
    </Suspense>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss"></style>
