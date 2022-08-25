<script setup>
import { defineProps, ref } from "vue";
import { useTaskStore } from "@/stores/TaskStore";
import CloseIcon from "./CloseIcon.vue";

const { task } = defineProps({ task: Object });

const inputEdit = ref(null);
const editMode = ref("off");

const taskStore = useTaskStore();

const deleteTask = () => {
  taskStore.removeTask(task.id);
};

const editTask = () => {
  if (!taskStore.mode !== "create") {
    editMode.value = "on";
    taskStore.setMode("edit");
  }
};

const focusInputEdit = () => {
  inputEdit.value.focus();
  inputEdit.value.select();
};

const updateTask = (e) => {
  taskStore.updateTask({
    id: task.id,
    text: e.target.value,
    done: task.done,
  });
  taskStore.setMode("");
  editMode.value = "off";
};

const escape = () => {
  editMode.value = "off";
  taskStore.setMode("");
};

const updateDone = (e) => {
  taskStore.updateTask({
    id: task.id,
    text: task.text,
    done: e.target.checked,
  });
};
</script>

<template>
  <div
    class="todo-item flex justify-between my-1 p-2 bg-slate-200 text-left pl-4"
    :class="{ 'bg-green-50 drop-shadow-lg': editMode === 'on' }"
  >
    <div
      class="flex justify-between w-full hover:cursor-pointer"
      v-if="editMode === 'off'"
    >
      <div>
        <input
          type="checkbox"
          class="mr-4 w-4 h-4"
          :checked="task.done"
          @change="updateDone"
        />
        <span @click="editTask">
          {{ task.text }}
        </span>
      </div>
    </div>

    <input
      v-if="editMode === 'on'"
      ref="inputEdit"
      type="text"
      :value="task.text"
      class="w-full bg-transparent outline-0"
      placeholder="Enter some text here"
      @focus="focusInputEdit"
      @keyup.enter="updateTask"
      @keyup.esc="escape"
    />

    <div
      v-if="editMode === 'off'"
      class="right w-4 self-center hover:cursor-pointer"
      @click="deleteTask"
    >
      <CloseIcon />
    </div>
  </div>
</template>
