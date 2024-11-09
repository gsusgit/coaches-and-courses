<template>
  <base-container v-if="coach">
    <h2>{{ coach.name }}: Projects</h2>
    <base-search
      v-if="hasProjects"
      @search="updateSearch"
      :search-term="enteredSearchTerm"
      :placeholder="'Filter projects'"
    ></base-search>
    <ul v-if="hasProjects">
      <project-item
        v-for="prj in availableProjects"
        :key="prj.id"
        :title="prj.title"
      ></project-item>
    </ul>
    <h3 v-else>No projects found.</h3>
  </base-container>
  <base-container v-else>
    <h3>No coach selected.</h3>
  </base-container>
</template>

<script setup>
import { computed, watch, defineProps, toRefs } from 'vue'
import useSearch from '@/hooks/search'
import ProjectItem from '@/components/templates/projects/ProjectItem.vue'

const props = defineProps(['coach'])

const { coach } = toRefs(props)

const projects = computed(() => {
  return coach.value ? coach.value.projects : []
})

const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
  projects,
  'title'
)

const availableProjects = computed(() => availableItems.value)

const hasProjects = computed(() => {
  return coach.value.projects && availableProjects.value.length > 0
})

watch(coach, () => {
  updateSearch('')
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
