<template>
  <div class="hello text-left px-4">
    <h1 class="font-bold text-3xl mb-4 text-center">{{ msg }}</h1>
    <h2 class="text-2xl">
      Hello adventurer! Clone or fork the repo and good luck!
    </h2>

    <p class="my-2">You are free to (and probably should):</p>

    <ul class="list-disc ml-8">
      <li>update or change dependencies</li>
      <li>define this project's architecture</li>
      <li>remove extra code given here as example</li>
    </ul>

    <h3 class="text-xl my-4">
      You will or you have already received an email with requirements
    </h3>

    <h4 class="font-bold">Build a "To do list" - Vue JS web application</h4>

    <h4>
      App with simple, minimalistic and functional UI which one can open in any
      browser and:
    </h4>
    <ul class="list-disc ml-8">
      <li>Create a new, unique "to do" item</li>
      <li>Edit a "to do"</li>
      <li>Delete it ("to do" item)</li>
      <li>View the list of "to do's" and check/uncheck them as "done".</li>
      <li>
        Filter the list (it can be filtering by it's content or done/undone)
      </li>
    </ul>

    <h4>
      Let's treat this application as a <strong>complete product</strong> with a
      complete set of requirements as well as:
    </h4>

    <ul class="list-disc ml-8">
      <li>
        web-based (and compatible with modern browsers) - no electron/cordova
        wrappers are needed
      </li>
      <li>responsive (to a reasonable degree - 2 breakpoints is enough)</li>
      <li>
        production ready (one is able to build and ship the minified code)
      </li>
      <li>
        let's imagine that it is or will be quite large and you'd like to scale
        it up one day (so architecture must enable you to do that without major
        refactor) - in other words - easily scalable
      </li>
    </ul>

    <h3 class="text-xl my-4">
      After you are done, please <strong>create a PR</strong> to this repo and
      we will go through code review (just like you would while implementing a
      feature)
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>
