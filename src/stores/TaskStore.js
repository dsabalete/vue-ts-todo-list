import { defineStore } from "pinia";
import { uuid } from "vue-uuid";

export const useTaskStore = defineStore("TaskStore", {
  state: () => {
    return {
      tasks: [],
      mode: "",
    };
  },

  actions: {
    async fill() {
      this.tasks = (await import("@/data/tasks.json")).default;
      // in case we want to get that info from an API
      // this.tasks = (await axios.get('some/end/point')).default;
    },

    setMode(mode) {
      this.mode = mode;
    },

    createTask(text) {
      this.tasks.push({ id: uuid.v1(), text, done: false });
    },

    removeTask(id) {
      this.tasks.splice(
        this.tasks.findIndex((v) => v.id === id),
        1
      );
    },

    updateTask(obj) {
      const objIndex = this.tasks.findIndex((task) => task.id === obj.id);
      this.tasks[objIndex].text = obj.text;
      this.tasks[objIndex].done = obj.done;
    },
  },

  getters: {
    isModeDefault() {
      return this.mode === "";
    },

    isModeEdit() {
      return this.mode === "edit";
    },

    isModeCreate() {
      return this.mode === "create";
    },
  },
});
