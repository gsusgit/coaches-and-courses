import { ref, computed } from 'vue'

export default function useSort(items, field) {

    const sorting = ref(null)

    const sortedItems = computed(function () {
      if (!sorting.value) {
        return items.value
      }
      return items.value.slice().sort((u1, u2) => {
        if (sorting.value === 'asc' && u1[field] > u2[field]) {
          return 1
        } else if (sorting.value === 'asc') {
          return -1
        } else if (sorting.value === 'desc' && u1[field] > u2[field]) {
          return -1
        } else {
          return 1
        }
      })
    })

    const sort = (mode) => {
      sorting.value = mode
    }

    return {
        sorting,
        sort,
        sortedItems
    }
}