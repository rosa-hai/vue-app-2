<template>
  <div id="app">
    <!--    <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/test">Page Test</router-link>
        </div>-->
    <BattleList />
    <div id="wrapper">
      <router-view />
    </div>
  </div>
</template>
<script>
import BattleList from "@/components/BattleList";

export default {
  components: { BattleList }
};
</script>

<style lang="scss">
* {
  color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background-image: none;
  background-color: transparent;
  transition: all 2s ease-out;
  outline: none;
  text-decoration: none;
}

body {
  background-image: url("assets/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
h1, h2, h3 {
  text-align: center;
}

h1 {
  font-size: 3em;
}

h2 {
  font-size: 2em;
}

#app {
  text-align: center;
  width: 90%;
  height: 70vh;
  backdrop-filter: blur(30px);
  display: flex;
  flex-direction: row;
  border: 1px solid white;

  #wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
  }

  .title{
    font-weight: bold;
  }
}
</style>
