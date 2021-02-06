<template>
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
</template>

<script>
export default {
  name: "Battle",
  components: {},
  props: {
    currentBattle: Object
  },
  methods: {
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
  computed: {
    fill: function() {
      const totalCount =
        this.currentBattle.item_1.vote + this.currentBattle.item_2.vote;
      return (this.currentBattle.item_1.vote / totalCount) * 100 || 0;
    }
  }
};
</script>
