<template>
  <div class>
    <img class="w-[492px] h-[188px] mb-4" src="../assets/svg/event-banner-1.svg" alt="event banner">
    <span class="text-sm text-dark-1 leading-[18px] font-bold">{{event.title}}</span>
    <div class="flex mt-4 space-x-5">
      <div class="flex items-center justify-between space-x-3">
        <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
        <span class="text-gray-2 text-sm font-normal leading-[18px]">{{event.venue.location}}</span>
      </div>
      <div class="flex items-center justify-between space-x-3">
        <img class="w-[14px] h-[14px]" src="../assets/svg/calendar-icon.svg" alt="calendar icon">
        <span class="text-gray-2 text-sm font-normal leading-[18px]">{{useDateFormatter(event.starts_at, 'dd MMMM, yyyy')}}</span>
      </div>
    </div>
    <div class="flex items-center mt-4 space-x-3">
      <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
      <span class="text-gray-2 text-sm font-normal leading-[18px]">
        Starting from 
        <span class="text-base font-semibold leading-5 text-primary">&#8358;{{event.price}}</span>
      </span>
    </div>
    <div class="absolute bottom-4 right-4">
      <a 
        target="_blank"
        :href="event.url"
        role="button" 
        aria-label="Buy Ticket" 
        class="p-1 border rounded-md border-primary"
      >
        <span class="text-primary text-base leading-[20px] font-semibold">Buy Ticket</span>
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
