<template>
  <div class="min-h-screen bg-background sm:px-10 sm:py-10 lg:py-[87px] lg:px-[176px]">
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
      <input class="items-center lg:w-[423px] pl-8 h-10 ring-transparent rounded-[10px] border border-gray-1" type="text" name="filter-events" placeholder="Search">
      <img class="absolute inset-0 inline top-[14px] left-3" src="../assets/svg/search-icon.svg" alt="search icon">
    </div>
    <div class="mt-10 text-base font-semibold">
      <h2 class="leading-5 tracking-tight text-dark-1">Featured Events</h2>
      <div class="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-2">
        <div class="p-4 bg-white rounded-md">
          <img class="w-[492px] h-[188px] mb-4" src="../assets/svg/event-banner-1.svg" alt="event banner">
          <span class="text-sm text-dark-1 leading-[18px] font-bold">Wizkid in Warri</span>
          <div class="flex mt-4 space-x-5">
            <div class="flex items-center justify-between space-x-3">
              <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
              <span class="text-gray-2 text-sm font-normal leading-[18px]">Lagos</span>
            </div>
            <div class="flex items-center justify-between space-x-3">
              <img class="w-[14px] h-[14px]" src="../assets/svg/calendar-icon.svg" alt="calendar icon">
              <span class="text-gray-2 text-sm font-normal leading-[18px]">8th December, 2021</span>
            </div>
          </div>
          <div class="flex items-center mt-4 space-x-3">
            <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
            <span class="text-gray-2 text-sm font-normal leading-[18px]">
              Starting from 
              <!-- <img class="w-4 h-3" src="../assets/svg/naira-icon.svg" alt="naira icon"> -->
              <span class="text-base font-semibold leading-5 text-primary">&#8358;15,000</span>
            </span>
          </div>
        </div>
        <div class="p-4 bg-white rounded-md">
          <img class="w-[492px] h-[188px] mb-4" src="../assets/svg/event-banner-2.svg" alt="event banner">
          <span class="text-sm text-dark-1 leading-[18px] font-bold">Wizkid in Warri</span>
          <div class="flex mt-4 space-x-5">
            <div class="flex items-center justify-between space-x-3">
              <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
              <span class="text-gray-2 text-sm font-normal leading-[18px]">Lagos</span>
            </div>
            <div class="flex items-center justify-between space-x-3">
              <img class="w-[14px] h-[14px]" src="../assets/svg/calendar-icon.svg" alt="calendar icon">
              <span class="text-gray-2 text-sm font-normal leading-[18px]">8th December, 2021</span>
            </div>
          </div>
          <div class="flex items-center mt-4 space-x-3">
            <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
            <span class="text-gray-2 text-sm font-normal leading-[18px]">
              Starting from 
              <!-- <img class="w-4 h-3" src="../assets/svg/naira-icon.svg" alt="naira icon"> -->
              <span class="text-base font-semibold leading-5 text-primary">&#8358;15,000</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 text-base font-semibold">
      <h2 class="leading-5 tracking-tight text-dark-1">All Events</h2>
      <div class="grid grid-cols-1 gap-4 mt-5 lg:grid-cols-4">
        <div class="p-4 bg-white rounded-md">
          <img class="w-[226px] h-[142px]" src="../assets/svg/event-banner-3.svg" alt="event banner">
          <div class="relative flex items-center justify-between">
            <div class="text-xs text-dark-1 leading-[15px] font-bold">Event 1</div>
            <img class="w-[50px] h-[30px]" src="../assets/svg/date-bg.svg" alt="event date">
            <span class="text-orange text-[10px] font-semibold leading-[13px] absolute right-3 top-2">31 Oct</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
            <span class="text-gray-2 text-sm font-normal leading-[18px]">Lagos</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
            <span class="text-gray-2 text-xs font-normal leading-[15px]">
              Starting from
              <span class="text-sm font-semibold leading-[17px] text-primary">&#8358;15,000</span>
            </span>
          </div>
          <div class="mt-4">
            <button class="p-1 border rounded-md border-primary">
              <span class="text-primary text-xs leading-[15px] font-semibold">Buy Ticket</span>
            </button>
          </div>
        </div>
        <div class="p-4 bg-white rounded-md">
          <img class="w-[226px] h-[142px]" src="../assets/svg/event-banner-3.svg" alt="event banner">
          <div class="relative flex items-center justify-between">
            <div class="text-xs text-dark-1 leading-[15px] font-bold">Event 1</div>
            <img class="w-[50px] h-[30px]" src="../assets/svg/date-bg.svg" alt="event date">
            <span class="text-orange text-[10px] font-semibold leading-[13px] absolute right-3 top-2">31 Oct</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
            <span class="text-gray-2 text-sm font-normal leading-[18px]">Lagos</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
            <span class="text-gray-2 text-xs font-normal leading-[15px]">
              Starting from
              <span class="text-sm font-semibold leading-[17px] text-primary">&#8358;15,000</span>
            </span>
          </div>
          <div class="mt-4">
            <button class="p-1 border rounded-md border-primary">
              <span class="text-primary text-xs leading-[15px] font-semibold">Buy Ticket</span>
            </button>
          </div>
        </div>
        <div class="p-4 bg-white rounded-md">
          <img class="w-[226px] h-[142px]" src="../assets/svg/event-banner-3.svg" alt="event banner">
          <div class="relative flex items-center justify-between">
            <div class="text-xs text-dark-1 leading-[15px] font-bold">Event 1</div>
            <img class="w-[50px] h-[30px]" src="../assets/svg/date-bg.svg" alt="event date">
            <span class="text-orange text-[10px] font-semibold leading-[13px] absolute right-3 top-2">31 Oct</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
            <span class="text-gray-2 text-sm font-normal leading-[18px]">Lagos</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
            <span class="text-gray-2 text-xs font-normal leading-[15px]">
              Starting from
              <span class="text-sm font-semibold leading-[17px] text-primary">&#8358;15,000</span>
            </span>
          </div>
          <div class="mt-4">
            <button class="p-1 border rounded-md border-primary">
              <span class="text-primary text-xs leading-[15px] font-semibold">Buy Ticket</span>
            </button>
          </div>
        </div>
        <div class="p-4 bg-white rounded-md">
          <img class="w-[226px] h-[142px]" src="../assets/svg/event-banner-3.svg" alt="event banner">
          <div class="relative flex items-center justify-between">
            <div class="text-xs text-dark-1 leading-[15px] font-bold">Event 1</div>
            <img class="w-[50px] h-[30px]" src="../assets/svg/date-bg.svg" alt="event date">
            <span class="text-orange text-[10px] font-semibold leading-[13px] absolute right-3 top-2">31 Oct</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/location-icon.svg" alt="location icon">
            <span class="text-gray-2 text-sm font-normal leading-[18px]">Lagos</span>
          </div>
          <div class="flex items-center mt-2 space-x-1">
            <img class="w-[14px] h-[14px]" src="../assets/svg/ticket-icon.svg" alt="ticket icon">
            <span class="text-gray-2 text-xs font-normal leading-[15px]">
              Starting from
              <span class="text-sm font-semibold leading-[17px] text-primary">&#8358;15,000</span>
            </span>
          </div>
          <div class="mt-4">
            <button class="p-1 border rounded-md border-primary">
              <span class="text-primary text-xs leading-[15px] font-semibold">Buy Ticket</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>