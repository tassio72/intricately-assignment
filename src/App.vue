<template>
  <div container>
    <app-header></app-header>
    <main class="container-content">
      <div>
        <app-menu-side :allComponents="allComponents"></app-menu-side>
      </div>
      <router-view class="content"></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/header/Header.vue";
import AppFooter from "./components/footer/Footer.vue";
import AppMenuSide from "./components/helpers/menuSide.vue";

export default {
  name: "App",
  data() {
    return {
      allComponents: [
        { name: "CompanyData", display: "Company Data" },
        { name: "CompanyTable", display: "Company Table" },
        { name: "CompanyPage", display: "Company Page" }
      ]
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppMenuSide
  }
};
</script>

<style>
[container],
.container-content {
  display: flex;
}

[container] {
  flex-direction: column;
  font-family: "Lato", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-content {
  margin: 50px 100px;
  justify-content: space-between;
}

.content {
  max-width: 890px;
  border-radius: 5px;
  border: 1px solid #d5dae4;
  padding: 30px 80px 30px 15px;
}

html,
body,
div,
h1,
h2,
h3,
ol,
ul,
label,
p {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font: inherit;
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

ol,
ul {
  list-style: none;
}
</style>