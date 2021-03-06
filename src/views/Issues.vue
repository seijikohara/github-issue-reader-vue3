<template>
  <table class="table">
    <thead>
      <th>issue番号</th>
      <th>タイトル</th>
    </thead>
    <tbody>
      <tr v-for="(issue, i) in issues" :key="i">
        <th>
          <router-link :to="`/issues/${issue.number}`">
            #{{ issue.number }}
          </router-link>
        </th>
        <td>{{ issue.title }}</td>
      </tr>
    </tbody>
  </table>
  <Pagination
    :currentPage="pageParam"
    :totalPage="totalPage"
    :perPage="perPageParam"
    path="/issues"
    paramNamePage="page"
    paramNamePerPage="per_page"
    @page-change="onPageChange"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  LocationQuery,
  onBeforeRouteUpdate,
  useRoute,
  useRouter,
} from "vue-router";

import GitHubService, { Issue } from "@/services/github";

import Pagination from "@/components/Pagination.vue";

export default defineComponent({
  name: "Issues",
  components: { Pagination },
  async setup() {
    const defaultPerPage = 10;

    const issues = ref([] as Issue[]);
    const pageParam = ref(1);
    const perPageParam = ref(defaultPerPage);
    const totalPage = ref(0);

    const resolveQueryParams = (query: LocationQuery) => {
      pageParam.value = parseInt(query["page"] as string) || 1;
      perPageParam.value =
        parseInt(query["per_page"] as string) || defaultPerPage;
    };

    onBeforeRouteUpdate((to, from, next) => {
      resolveQueryParams(to.query);
      GitHubService.getIssues(pageParam.value, perPageParam.value).then(
        (newIssues) => (issues.value = newIssues)
      );
      next();
    });

    const router = useRouter();
    const route = useRoute();

    resolveQueryParams(route.query);

    const repo = await GitHubService.getRepo();
    const openIssueCount = repo.open_issues_count;
    totalPage.value = Math.ceil(openIssueCount / perPageParam.value);

    issues.value = await GitHubService.getIssues(
      pageParam.value,
      perPageParam.value
    );

    const onPageChange = (page: number) =>
      router.push({
        path: "/issues",
        query: { page, per_page: perPageParam.value },
      });

    return {
      issues,
      pageParam,
      perPageParam,
      totalPage,
      onPageChange,
    };
  },
});
</script>
