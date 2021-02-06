<template>
  <div v-if="currentBattle">
    <h2>{{ currentBattle | battleName }}</h2>
    <h3>{{ currentBattle | votesTot }}</h3>
    <Stats :current-battle="currentBattle"></Stats>
  </div>
</template>

<script>
import Stats from "@/components/Stats";
export default {
  name: "Battle",
  components: {
    Stats
  },
  data() {
    return {
      currentBattle: {
        id: Number,
        item_1: {
          name: String,
          vote: Number
        },
        item_2: {
          name: String,
          vote: Number
        }
      }
    };
  },
  props: {
    id: String,
    battles: Array
  },

  created() {
    // récupérer les données lorsque la vue est créée et
    // que les données sont déjà observées
    if (this.battles.length === 0) {
      return this.$router.push({ name: "Home" });
    }
    this.setCurrentBattle();
  },
  watch: {
    // appeler encore la méthode si la route change
    $route: "setCurrentBattle"
  },
  methods: {
    setCurrentBattle() {
      this.currentBattle = this.battles.filter(
        battle => parseInt(battle.id) === parseInt(this.id)
      )[0];
    }
  },
  filters: {
    battleName: function(battle) {
      return `${battle.item_1.name} -- ${battle.item_2.name}`;
    },
    votesTot: function(battle) {
      return `${parseInt(battle.item_1.vote) +
        parseInt(battle.item_2.vote)} votes`;
    }
  }
};
</script>

<style lang="scss">
#battleStats {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 40px;

  p {
    flex: 1;
    text-align: center;
    font-size: 1.5em;

    span {
      font-size: 1.5em;
      text-align: center;
      cursor: pointer;
    }

    &[data-color="primary"] {
      color: coral;
    }

    &[data-color="secondary"] {
      color: aquamarine;
    }
  }
}

#range {
  display: flex;
  flex: 4;
  height: 50px;
  margin: auto;
  border-radius: 25px;
  background: aquamarine;
  overflow: hidden;

  .fill {
    background: coral;
    transition: all 2s ease-out;
  }
}
</style>
