<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">#{{ issue.number }} {{ issue.title }}</p>
    </header>
    <div class="card-content">
      <div class="content" v-html="issue.body"></div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item" @click="onClickBack">戻る</a>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

import GitHubService from "@/services/github";

export default defineComponent({
  name: "Issue",
  async setup() {
    const route = useRoute();
    const router = useRouter();

    const issueNumber = parseInt(route.params["issueNumber"] as string);
    const issue = await GitHubService.getIssue(issueNumber);

    return {
      issue,
      onClickBack: () => router.back(),
    };
  },
});
</script>
