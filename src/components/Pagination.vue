<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li>
        <router-link
          class="pagination-link"
          :to="{
            path,
            query: {
              [paramNamePage]: currentPage - 1,
              [paramNamePerPage]: perPage,
            },
          }"
        >
          &lt;
        </router-link>
      </li>
      <li>
        <router-link
          class="pagination-link"
          :class="{ 'is-current': currentPage === 1 }"
          :to="{
            path,
            query: { [paramNamePage]: 1, [paramNamePerPage]: perPage },
          }"
        >
          1
        </router-link>
      </li>
      <li v-if="hasEllipsisBegin">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li v-for="index in totalPage" :key="index">
        <router-link
          v-if="
            index !== 1 &&
            index !== totalPage &&
            index - displayPageCount <= currentPage &&
            currentPage <= index + displayPageCount
          "
          class="pagination-link"
          :class="{ 'is-current': currentPage === index }"
          :to="{
            path,
            query: { [paramNamePage]: index, [paramNamePerPage]: perPage },
          }"
        >
          {{ index }}
        </router-link>
      </li>
      <li v-if="hasEllipsisEnd">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li>
        <router-link
          class="pagination-link"
          :class="{ 'is-current': currentPage === totalPage }"
          :to="{
            path,
            query: {
              [paramNamePage]: totalPage,
              [paramNamePerPage]: perPage,
            },
          }"
        >
          {{ totalPage }}
        </router-link>
      </li>
      <li>
        <router-link
          class="pagination-link"
          :to="{
            path,
            query: {
              [paramNamePage]: currentPage + 1,
              [paramNamePerPage]: perPage,
            },
          }"
        >
          &gt;
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from "vue";

type Props = {
  currentPage: number;
  totalPage: number;
  perPage: number;
  path: string;
  paramNamePage: string;
  paramNamePerPage: string;
  displayPageCount: number;
};

export default defineComponent({
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    paramNamePage: {
      type: String,
      required: true,
    },
    paramNamePerPage: {
      type: String,
      required: true,
    },
    displayPageCount: {
      type: Number,
      default: 3,
    },
  },
  setup(props: Props, context: SetupContext) {
    return {
      onClickPageButton: (index: number) => context.emit("page-change", index),
      hasEllipsisBegin: computed(
        () => props.currentPage - props.displayPageCount >= 3
      ),
      hasEllipsisEnd: computed(
        () => props.currentPage + props.displayPageCount <= props.totalPage - 2
      ),
    };
  },
});
</script>
