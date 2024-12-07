import { defineStore } from "pinia";
import { computed, reactive } from "vue";

const useSonMsg = defineStore("son", () => {
  const state = reactive({
    msg: {
      name: "sonE",
      money: 100,
    },
  });

  const getName = computed(() => state.msg.name);
  const getMoney = computed(() => state.msg.money);
  function addMoney() {
    state.msg.money++;
  }
  function modifyName() {
    state.msg.name = state.msg.name + "~";
  }

  return { state, getName, getMoney, addMoney, modifyName };
});

export default useSonMsg;
