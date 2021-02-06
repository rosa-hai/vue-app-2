<template>
  <div id="battlesList">
    <router-link :to="{ name: 'Home' }">
      <h3 class="battle title ">Who's The Best</h3>
    </router-link>
    <router-link
      :to="{ name: 'Battle', params: { id: `${battle.id}` } }"
      class="battle"
      v-for="(battle, i) in battles"
      :key="i"
    >
      {{ battle | battleName }}
    </router-link>
    <router-link :to="{ name: 'Create' }" class="battle">
      <font-awesome-icon :icon="['fas', 'plus']" id="addIcon" />
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "BattleList",
  props: {
    battles: Array
  },
  filters: {
    battleName: battle => `${battle.item_1.name} -- ${battle.item_2.name}`
  }
};
</script>

<style lang="scss">
#battlesList {
  flex: 1;
  border-right: 1px solid rgba(245, 245, 245, 0.2);
  height: 100%;
  display: flex;
  flex-direction: column;

  .battle {
    cursor: pointer;
    padding: 20px 10px;
    border-bottom: 1px solid rgba(245, 245, 245, 0.2);
    text-align: center;

    &:hover {
      backdrop-filter: blur(30px);
      background: rgba(245, 245, 245, 0.2);
    }
  }
}
</style>
