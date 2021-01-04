declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<undefined, undefined, unknown>;
  export default component;
}
