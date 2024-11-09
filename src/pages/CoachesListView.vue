<template>
  <base-container>
    <h2>Active Coaches</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
      :placeholder="'Filter coaches'"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <coach-item
        v-for="coach in displayedCoaches"
        :key="coach.id"
        :name="coach.name"
        :id="coach.id"
        @list-projects="$emit('list-projects', $event)"
      ></coach-item>
    </ul>
  </base-container>
</template>

<script setup>
import { toRefs, computed, defineProps, defineEmits, watch } from 'vue'
import useSearch from '@/hooks/search'
import useSort from '@/hooks/sort'
import CoachItem from '@/components/templates/coaches/CoachItem.vue'

const props = defineProps(['coaches'])

const { coaches } = toRefs(props)

defineEmits(['list-projects'])

const availableCoaches = computed(() => availableItems.value)

const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
  coaches,
  'name'
)
const { sorting, sort, sortedItems } = useSort(availableCoaches, 'name')

const displayedCoaches = computed(() => {
  return sortedItems.value
})

watch(sort, () => {
  sort(sorting)
})
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
