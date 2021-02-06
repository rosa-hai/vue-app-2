<template>
  <div id="create">
    <div>
      <label for="item1"> Premier élément</label>
      <div class="inputWrp">
        <input
          id="item1"
          type="text"
          v-model="newItem1"
          placeholder="ex Maman"
        />
        <div class="focus-border"></div>
      </div>
    </div>
    <div>
      <label for="item2"> Deuxième élément</label>
      <div class="inputWrp">
        <input
          id="item2"
          type="text"
          v-model="newItem2"
          placeholder="ex Papa"
        />
        <div class="focus-border"></div>
      </div>
    </div>
    <div id="submit" @click="newBattle">Let's Battle!</div>
    <div v-if="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "Battle",
  components: {
    // HelloWorld
  },
  data() {
    return {
      newItem1: "",
      newItem2: "",
      message: ""
    };
  },
  props: {
    id: String,
    battles: Array
  },
  methods: {
    newBattle: function() {
      if (this.newItem1 !== "" && this.newItem2 !== "") {
        const newB = {
          id: this.battles.length,
          item_1: {
            name: this.newItem1,
            vote: 0
          },
          item_2: {
            name: this.newItem2,
            vote: 0
          }
        };
        this.battles.push(newB);
        this.$router.push({
          name: "Battle",
          params: { id: ` ${newB.id}` }
        });
      } else {
        this.message = "Remplissez bien tous les champs";
        console.log(this.newItem2);
        console.log(this.newItem1);
      }
    }
  }
};
</script>

<style lang="scss">
#create {
  padding: 40px;
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
  width: 100%;
  .inputWrp {
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  input {
    border: 0;
    width: 80%;
    padding: 7px 0;
    border-bottom: 1px solid #ccc;
    &::placeholder {
      color: white;
      font-size: 1em;
    }
    &:focus {
      border: none;
    }
    & ~ .focus-border {
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #3399ff;
      transition: all 0.4s ease-out;
    }

    &:focus ~ .focus-border {
      width: 80%;
    }
  }
}

#submit {
  margin-top: 20px;
  background-color: coral;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 25px;
}
</style>
