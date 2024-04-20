<script>
export default {
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    }
  }
}

</script>
<template>
  <div class="flex">
   <div class="flex">
      <div :class="isOpen ? 'w-72' : 'w-20'" class="open w-72 duration-300 h-screen p-5 pt-8 bg-dark-purple relative">
        <img src="../../public/img/control.png" :class="isOpen ? '' : 'rotate-180'" class="absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple" @click="toggleSidebar"/>
        <div class="flex gap-x-4 items-center">
          <img src="https://elsoftcdn.s3.ap-southeast-1.amazonaws.com/public/logo-elsoft.png" :class="isOpen ? '' : 'd-none'" class="cursor-pointer duration-500 open" style="width:33%"/>
        </div>
        <ul class="pt-6 mt-9">

              <a>
                <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home h-6 w-6"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                    <span class="open origin-left duration-200" :class="isOpen ? '' : 'd-none'">master</span>
                </li>
              </a>
              <a>
                <li class="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-briefcase h-6 w-6"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    <span class="open origin-left duration-200" :class="isOpen ? '' : 'd-none'">stock</span>
                </li>
              </a>
        </ul>
      </div>
    
     <div style="flex: 1; padding: 1.75rem;">
      has
    </div>
    </div>

  </div>
</template>

<style>
  /* Sidebar Container */
.flex {
  display: flex;
}

.d-none{
  display: none;
}

/* Sidebar */
.w-72 {
  width: 18rem; /* Tailwind CSS: w-72 */
}

.w-20 {
  width: 5rem; /* Tailwind CSS: w-20 */
}

.duration-300 {
  transition-duration: 0.3s; /* Tailwind CSS: duration-300 */
}

.h-screen {
  height: 100vh; /* Tailwind CSS: h-screen */
}

.p-5 {
  padding: 1.25rem; /* Tailwind CSS: p-5 */
}

.pt-8 {
  padding-top: 2rem; /* Tailwind CSS: pt-8 */
}

.bg-dark-purple {
  background-color: #4b5563; /* Tailwind CSS: bg-dark-purple */
}

.relative {
  position: relative; /* Tailwind CSS: relative */
}

.absolute {
  position: absolute; /* Tailwind CSS: absolute */
}

.cursor-pointer {
  cursor: pointer; /* Tailwind CSS: cursor-pointer */
}

.rounded-full {
  border-radius: 9999px; /* Tailwind CSS: rounded-full */
}

.-right-3 {
  right: -0.75rem; /* Tailwind CSS: -right-3 */
}

.top-9 {
  top: 2.25rem; /* Tailwind CSS: top-9 */
}

.border-2 {
  border-width: 2px; /* Tailwind CSS: border-2 */
}

.border-dark-purple {
  border-color: #4b5563; /* Tailwind CSS: border-dark-purple */
}

.rotate-180 {
  transform: rotate(180deg); /* Tailwind CSS: rotate-180 */
}



/* Logo */
.cursor-pointer {
  cursor: pointer;
}

/* Menu Items */
.text-gray-300 {
  color: #cbd5e0; /* Tailwind CSS: text-gray-300 */
}

.text-sm {
  font-size: 0.875rem; /* Tailwind CSS: text-sm */
}

.flex {
  display: flex; /* Tailwind CSS: flex */
}

.gap-x-4 {
  column-gap: 1rem; /* Tailwind CSS: gap-x-4 */
}

.items-center {
  align-items: center; /* Tailwind CSS: items-center */
}

.cursor-pointer {
  cursor: pointer; /* Tailwind CSS: cursor-pointer */
}

.p-2 {
  padding: 0.5rem; /* Tailwind CSS: p-2 */
}

.hover\:bg-light-white:hover {
  background-color: #f7fafc; /* Tailwind CSS: hover:bg-light-white */
}

.rounded-md {
  border-radius: 0.375rem; /* Tailwind CSS: rounded-md */
}

.mt-9 {
  margin-top: 2.25rem; /* Tailwind CSS: mt-9 */
}

.mt-2 {
  margin-top: 0.5rem; /* Tailwind CSS: mt-2 */
}

/* Menu Item Text */
.origin-left {
  transform-origin: left; /* Tailwind CSS: origin-left */
}

.duration-200 {
  transition-duration: 0.2s; /* Tailwind CSS: duration-200 */
}

.hidden {
  display: none; /* Tailwind CSS: hidden */
}

</style>

