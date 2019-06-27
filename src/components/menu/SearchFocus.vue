<template>
  <div></div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';

@Component
export default class SearchFocus extends Vue {
  public handler: EventListener = () => this;

  public mounted(): void {
    this.handler = (event) => {
      this.$emit('keyup', event);
    };
    window.addEventListener('keyup', this.handler);
  }
  public beforeDestroy(): void {
    window.removeEventListener('keyup', this.handler);
  }
}
</script>

<style scoped>
div {
  display: none;
}
</style>