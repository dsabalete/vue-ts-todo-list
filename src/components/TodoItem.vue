<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "@/stores/TaskStore";
import CloseIcon from "./CloseIcon.vue";

const props = defineProps({ task: Object });

const taskStore = useTaskStore();

const deleteTask = () => {
  taskStore.remove(props.task.id);
};
</script>

<template>
  <div
    class="todo-item flex justify-between my-1 p-2 bg-slate-200 text-left pl-4"
  >
    <div class="w-full hover:cursor-pointer">{{ props.task.text }}</div>
    <div class="right w-4 self-center hover:cursor-pointer" @click="deleteTask">
      <CloseIcon />
    </div>
  </div>
</template>
