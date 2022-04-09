<template>
  <div v-if="loading" class="flex items-center justify-center w-full min-h-screen mx-auto bg-background">
    <div class="w-full max-w-sm p-4 mx-auto border border-purple-400 rounded-md shadow">
      <div class="flex space-x-4 animate-pulse">
        <div class="w-12 h-12 rounded-full bg-primary"></div>
        <div class="flex-1 py-1 space-y-4">
          <div class="w-3/4 h-4 rounded bg-primary"></div>
          <div class="space-y-2">
            <div class="h-4 rounded bg-primary"></div>
            <div class="w-5/6 h-4 rounded bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div 
    v-else
    class="min-h-screen bg-background xs:px-2 xs:py-5 sm:px-5 sm:py-5 lg:py-[87px] lg:px-[176px]"
  >
    <div class="flex flex-row justify-between">
      <span class="text-[28px] font-bold text-dark-1 leading-[22px] tracking-tight">Events</span>
      <div class="flex items-center space-x-3">
        <img class="w-4 h-4" src="../assets/svg/dp.svg" alt="display picture">
        <span class="text-[15px] font-bold">Bernice</span>
        <span class="bg-[#EAEDF7] w-6 p-1 rounded-lg flex justify-center">
          <img class="w-3 h-3 " src="../assets/svg/arrow-down.svg" alt="dropdown icon">
        </span>
      </div>
    </div>
    <div class="mt-[52px] relative">
      <input 
        v-model="search"
        class="items-center lg:w-[423px] pl-8 h-10 ring-transparent rounded-[10px] border border-gray-1" 
        type="text" 
        name="filter-events" 
        placeholder="Search"
      >
      <img class="absolute inset-0 inline top-[14px] left-3" src="../assets/svg/search-icon.svg" alt="search icon">
    </div>
    <div class="mt-10 text-base font-semibold">
      <h2 class="leading-5 tracking-tight text-dark-1">Featured Events</h2>
      <div class="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2">
        <featured-event
          class="relative p-4 bg-white rounded-md"
          v-for="event in featuredEvents"
          :key="`featured-event-${event.id}`"  
          :event="event"
        />
      </div>
    </div>
    <div class="mt-10 text-base font-semibold">
      <h2 class="leading-5 tracking-tight text-dark-1">All Events</h2>
      <div class="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <event-item 
          class="p-4 bg-white rounded-md"
          v-for="event in filteredEvents" 
          :key="`event-${event.id}`" 
          :event="event" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {DateTime} from 'luxon';
import { ref, reactive, computed, onMounted } from 'vue'

const url = 'https://rest.bandsintown.com/artists/john%20legend/events?app_id=0ab49580-c84f-44d4-875f-d83760ea2cfe'

export default {
  setup () {
    // data
    let events = reactive([]);
    let search = ref("");
    let loading = ref(true);

    onMounted(() => {
      fetchEvents()
    })

    // computed
    let filteredEvents = computed(() => {
      if (search.value) {
        return events.filter((event) => event.title.toLowerCase().match(search.value.toLowerCase()))
      }
      return events
    })

    let featuredEvents = computed(() => {
      return events.slice(0,2 )
    })
    
    // methods
    const fetchEvents = async () => {
      try {
        let {data} = await axios.get(url)
        data = data.map((item, index) => {
          return {
            ...item,
            title: `Event ${index+1}`,
            price: new Intl.NumberFormat().format(generatePrice())
          }
        })
        events.push(...data)
      } catch(err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }

    const generatePrice = (max=15000, min=1000) => {
      return Math.floor((Math.random())*(max-min+1))+min;
    }

    const formatDate = (date, format) => {
      return DateTime.fromISO(date).toFormat(format)
    }

    return {
      loading,
      search,
      featuredEvents,
      filteredEvents,
      fetchEvents,
      formatDate,
    }
  }
}
</script>
