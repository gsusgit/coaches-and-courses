import { ref, computed, watch } from 'vue'

export default function useSearch(items, searchParam) {
  const enteredSearchTerm = ref('')
  const activeSearchTerm = ref('')

  const availableItems = computed(() => {
    if (activeSearchTerm.value) {
      return items.value.filter((item) =>
        item[searchParam].toLowerCase().includes(activeSearchTerm.value.toLowerCase())
      )
    }
    return items.value
  })

  const updateSearch = (val) => {
    enteredSearchTerm.value = val
  }

  watch(enteredSearchTerm, (newValue) => {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue
      }
    }, 300)
  })

  return {
    enteredSearchTerm,
    activeSearchTerm,
    availableItems,
    updateSearch
  }
}
