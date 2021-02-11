<template>
  <div class="home">
    <img src="../assets/images/battle.gif" alt="battle gif" />
    <h1>Choisissez vos battles !</h1>
    <Challengers/>
  </div>
</template>

<script>
import Challengers from "@/components/Challengers";
export default {
  name: "Home",
  components: { Challengers }
};
</script>
