<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/TaskStore";
import TodoItem from "./TodoItem.vue";

const taskStore = useTaskStore();
taskStore.fill();

const inputTask = ref(null);

const addTask = () => {
  taskStore.setMode("create");
};

const saveNewTask = () => {
  taskStore.createTask(inputTask.value.value);
  taskStore.setMode("");
};

const escape = () => {
  taskStore.setMode("");
};
</script>

<template>
  <div class="todo-list flex flex-col my-8 w-5/6 sm:w-2/3 mx-auto">
    <TodoItem
      v-for="(task, index) in taskStore.tasks"
      :task="task"
      :key="index"
    />

    <input
      v-if="taskStore.mode === 'create'"
      ref="inputTask"
      type="text"
      class="bg-green-50 my-1 p-2 hover:cursor-pointer text-left pl-4"
      placeholder="Enter some text here"
      @keyup.enter="saveNewTask"
      @keyup.esc="escape"
    />

    <button
      v-if="taskStore.mode === ''"
      class="bg-green-100 text-green-800 hover:bg-green-300 w-full mt-2 p-2 border-2 border-green-800 rounded-md font-bold"
      @click="addTask"
    >
      Add Task
    </button>
  </div>
</template>
