<script setup>
import { ref, computed } from "vue";
import { useTaskStore } from "@/stores/TaskStore";
import TodoItem from "@/components/TodoItem.vue";
import ButtonApp from "@/components/ButtonApp.vue";

const taskStore = useTaskStore();
taskStore.fill();

const inputTask = ref(null);
const filtering = ref("");

const filteredTasks = computed(() => {
  if (filtering.value === "") {
    return taskStore.tasks;
  } else if (filtering.value === "done") {
    return taskStore.tasks.filter((t) => t.done);
  } else {
    return taskStore.tasks.filter((t) => !t.done);
  }
});

const addTask = () => {
  taskStore.setMode("create");
  inputTask.value.value = "";
  inputTask.value.focus();
};

const saveNewTask = () => {
  taskStore.createTask(inputTask.value.value);
  taskStore.setMode("");
};

const escape = () => {
  taskStore.setMode("");
};

const showTasksDone = () => {
  filtering.value = "done";
};

const showPendingTasks = () => {
  filtering.value = "undone";
};

const showAllTasks = () => {
  filtering.value = "";
};
</script>

<template>
  <div class="home">
    <div class="todo-list flex flex-col my-8 w-5/6 sm:w-2/3 mx-auto">
      <div class="flex gap-2 mb-2">
        <ButtonApp @click="showTasksDone" v-if="!taskStore.isModeCreate"
          >Show tasks done</ButtonApp
        >
        <ButtonApp @click="showPendingTasks" v-if="!taskStore.isModeCreate"
          >Show pending tasks</ButtonApp
        >
        <ButtonApp @click="showAllTasks" v-if="!taskStore.isModeCreate"
          >Show All tasks</ButtonApp
        >
      </div>

      <div class="flex bg-gray-400 text-white font-bold p-2 mb-1">
        <div class="mr-4">Done</div>
        <div class="w-full text-left">Task description</div>
        <div class="w-full text-right pr-1">Actions</div>
      </div>

      <TodoItem
        v-for="(task, index) in filteredTasks"
        :task="task"
        :key="index"
      />

      <input
        v-show="taskStore.isModeCreate"
        ref="inputTask"
        type="text"
        class="bg-green-50 drop-shadow-lg my-1 p-2 hover:cursor-pointer text-left pl-4 outline-0"
        placeholder="Enter some text here"
        @keyup.enter="saveNewTask"
        @keyup.esc="escape"
      />

      <ButtonApp v-show="taskStore.isModeDefault" @click="addTask"
        >Add Task</ButtonApp
      >
    </div>
  </div>
</template>
