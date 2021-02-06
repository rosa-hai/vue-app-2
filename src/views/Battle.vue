<template>
  <div v-if="currentBattle">
    <h2>{{ currentBattle | battleName }}</h2>
    <h3>{{ currentBattle | votesTot }}</h3>
    <div id="battleStats">
      <p data-color="primary">
        {{ currentBattle.item_1.name }} <br />
        {{ currentBattle.item_1.vote }} <br />
        <span @click="vote(1)">+1</span>
      </p>
      <div id="range">
        <div class="fill" :style="{ width: fill + '%' }"></div>
      </div>
      <p data-color="secondary">
        {{ currentBattle.item_2.name }} <br />
        {{ currentBattle.item_2.vote }}
        <br />
        <span @click="vote(2)">+1</span>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Battle",
  components: {
    // HelloWorld
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
  computed: {
    fill: function() {
      const totalCount =
        this.currentBattle.item_1.vote + this.currentBattle.item_2.vote;
      return (this.currentBattle.item_1.vote / totalCount) * 100 || 0;
    }
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
    },
    vote: function(selectedItem) {
      switch (selectedItem) {
        case 1:
          this.currentBattle.item_1.vote++;
          break;
        case 2:
          this.currentBattle.item_2.vote++;
          break;
      }
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
