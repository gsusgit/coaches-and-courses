<template>
  <main>
    <coaches-list-view
      :coaches="activeCoaches"
      @list-projects="selectCoach"
    ></coaches-list-view>
    <projects-list-view :coach="selectedCoach"></projects-list-view>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import DATA from './data/data.js'

import CoachesListView from './pages/CoachesListView.vue'
import ProjectsListView from './pages/ProjectsListView.vue'

const selectedCoach = ref(null)
const activeCoaches = DATA

const selectCoach = (id) => {
  selectedCoach.value = activeCoaches.find((coach) => coach.id === id)
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
