<template>
  <div class="add-task">
    <div>Add Task</div>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  components: { TodoList },
};
</script>
