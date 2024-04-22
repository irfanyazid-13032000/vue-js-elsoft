<script>
import Sidebar from '../components/Sidebar.vue';
// import Modal from '../components/Modal.vue'
import AddMaster from '../components/AddMaster.vue'
export default {
  components: {
    Sidebar,
    AddMaster
  },
  methods: {
    changeSelectedMenu() {
      this.$store.state.selectedMenu = "master"
      },
      openModal() {
        this.$store.state.isAddMasterModalOpen = true
    }
  },
}
</script>
<template>
  <Sidebar>
   <slot>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-purple-50">
                  <tr>
                      <th scope="col" class="px-6 py-3 text-center">
                          Title
                      </th>
                      
                      <th scope="col" class="px-6 py-3 text-center">
                          Company
                      </th>
                      <th scope="col" class="px-6 py-3 text-center">
                          Code
                      </th>
                      <th scope="col" class="px-6 py-3 text-center">
                          ItemGroup
                      </th>
                      <th scope="col" class="px-6 py-3 text-center">
                          isActive
                      </th>
                      <th scope="col" class="px-6 py-3 text-center">
                          Balance
                      </th>
                      <th scope="col" class="px-6 py-3 text-center">
                          Action
                      </th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr class="bg-white dark:bg-blue-200">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                          hanni
                      </th>
                      <td class="px-6 py-4 text-black">
                          facebook
                      </td>
                      <td class="px-6 py-4 text-black">
                          007
                      </td>
                      <td class="px-6 py-4 text-black">
                           Product lain
                      </td>
                      <td class="px-6 py-4 text-black">
                         Y
                      </td>
                      <td class="px-6 py-4 text-black">
                          0.0
                      </td>
                      <td class="px-6 py-4 text-black">
                       <button type="">edit</button>
                       <button type="">delete</button>
                      
                      </td>
                  </tr>
              </tbody>
          </table>

          <AddMaster></AddMaster>


      </div>
    <button style="width:150px;height:40px;border-radius:10px;background-color:#ad6cc0;font-weight:bold;font-size:16px;margin:5px;" @click="openModal">Add Master Item</button>
   </slot>
  </Sidebar>

</template>

<style>
  .relative {
    position: relative;
}

.overflow-x-auto {
    overflow-x: auto;
}

.w-full {
    width: 100%;
}

.text-sm {
    font-size: 0.875rem;
}

.text-left {
    text-align: left;
}

.rtl-text-right {
    direction: rtl;
    text-align: right;
}

.text-dark-purple {
    color: #baa3f0;
}

.dark-text-gray-400 {
    color: #CBD5E0;
}

.text-xs {
    font-size: 0.75rem;
}

.text-gray-700 {
    color: #4A5568;
}

.uppercase {
    text-transform: uppercase;
}

.bg-purple-50 {
    background-color: #905bd1;
}

.dark-bg-dark-purple {
    background-color: #ffffff;
}

.dark-bg-blue-200 {
    background-color: #BFDBFE;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}

.text-center {
    text-align: center;
}

.font-medium {
    font-weight: 500;
}

.whitespace-nowrap {
    white-space: nowrap;
}

.text-black {
    color: #000;
}

.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}















</style>