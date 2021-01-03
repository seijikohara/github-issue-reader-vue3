import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: { path: "/issues", query: { page: 1, per_page: 10 } },
  },
  {
    path: "/issues",
    name: "Issues",
    component: () => import("@/views/Issues.vue"),
  },
  {
    path: "/issues/:issueNumber",
    name: "Issue",
    component: () => import("@/views/Issue.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
