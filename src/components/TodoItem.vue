<script setup>
import { defineProps, ref, computed } from "vue";
import { useTaskStore } from "@/stores/TaskStore";
import IconClose from "./IconClose.vue";
import IconEdit from "./IconEdit.vue";

const { task } = defineProps({ task: Object });

const inputEdit = ref(null);
const editMode = ref("off");

const taskStore = useTaskStore();

const deleteTask = () => {
  taskStore.removeTask(task.id);
};

const editTask = () => {
  if (!taskStore.isModeEdit) {
    editMode.value = "on";
    taskStore.setMode("edit");
  }
};

const focusInputEdit = () => {
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

const classTodoItem = computed(() =>
  editMode === "on" ? "bg-green-50 drop-shadow-lg" : "bg-gray-100"
);
</script>

<template>
  <div
    class="todo-item flex justify-between my-1 p-2 text-left pl-4"
    :class="classTodoItem"
  >
    <div class="flex w-full" v-if="editMode === 'off'">
      <input
        type="checkbox"
        class="mr-8 mt-1.5 w-4 h-4"
        :checked="task.done"
        @change="updateDone"
      />
      <span>
        {{ task.text }}
      </span>
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

    <div class="flex">
      <IconEdit
        v-if="editMode === 'off'"
        class="w-6 hover:cursor-pointer mx-1.5 px-1 hover:bg-blue-400"
        @click="editTask"
      />
      <IconClose
        v-if="editMode === 'off'"
        class="right w-4 mx-1.5 self-center hover:cursor-pointer hover:bg-red-400"
        @click="deleteTask"
      />
    </div>
  </div>
</template>
