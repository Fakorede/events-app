<template>
  <div class>
    <img class="w-[226px] h-[142px]" src="../assets/svg/event-banner-3.svg" alt="event banner">
      <div class="relative flex items-center justify-between">
        <div class="text-xs text-dark-1 leading-[15px] font-bold">{{event.title}}</div>
        <img class="w-[50px] h-[30px]" src="../assets/svg/date-bg.svg" alt="event date">
        <span class="text-orange text-[10px] font-semibold leading-[13px] absolute right-3 top-2">{{useDateFormatter(event.starts_at, 'dd LLL')}}</span>
      </div>
      <div class="flex items-center mt-2 space-x-1">
        <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
        <span class="text-gray-2 text-sm font-normal leading-[18px]">{{event.venue.location}}</span>
      </div>
      <div class="flex items-center mt-2 space-x-1">
        <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
        <span class="text-gray-2 text-xs font-normal leading-[15px]">
          Starting from
          <span class="text-sm font-semibold leading-[17px] text-primary">&#8358;{{event.price}}</span>
        </span>
      </div>
      <div class="mt-4">
        <a 
          target="_blank"
          :href="event.url"
          role="button" 
          aria-label="Buy Ticket" 
          class="p-1 border rounded-md border-primary"
        >
          <span class="text-primary text-xs leading-[15px] font-semibold">Buy Ticket</span>
        </a>
      </div>
  </div>
</template>

<script>
import {useDateFormatter} from '../composable/useDateFormatter'
export default {
  props: {
    event: {
      required: true,
      type: Object
    }
  },
  setup() {
    useDateFormatter()

    return {
      useDateFormatter,
    }
  }
}
</script>
