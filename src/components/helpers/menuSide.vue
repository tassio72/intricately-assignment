<template>
  <div menu-side>
    <div class="menu-side-item" v-for="(component, index) in allComponents" :key="index">
      <router-link :to="{name: component.name}">{{component.display.toUpperCase()}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allComponents: {
      required: true,
      type: Array
    }
  }
};
</script>

<style scoped>
[menu-side] {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #d5dae4;
}

.menu-side-item {
  width: 100%;
  padding: 30px 80px 30px 15px;
  border-bottom: 1px solid #d5dae4;
}

.menu-side-item:last-child {
  border-bottom: none;
}
</style>