<template>
  <div id="challengers">
    <h2>Les challengers!</h2>
    <p class="challenger" v-for="(challenger, i) in challengers" :key="i">
      {{ challenger }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Challengers",
  props: {
    challengers: Set
  },
  computed: mapState(["battles", "challengers"])
};
</script>
