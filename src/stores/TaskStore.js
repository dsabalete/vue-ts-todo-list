import { defineStore } from "pinia";
import { uuid } from "vue-uuid";

export const useTaskStore = defineStore("TaskStore", {
  state: () => {
    return {
      tasks: [],
      editing: false,
    };
  },

  actions: {
    async fill() {
      this.tasks = (await import("@/data/tasks.json")).default;
      // this.tasks = (await axios.get('some/end/point')).default;
    },

    toggleEditionMode() {
      this.editing = !this.editing;
    },

    createTask(text) {
      this.tasks.push({ id: uuid.v1(), text });
    },

    remove(id) {
      this.tasks.splice(
        this.tasks.findIndex((v) => v.id === id),
        1
      );
    },
  },

  // getters
});
