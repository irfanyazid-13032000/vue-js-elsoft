<script>
import Modal from '../components/Modal.vue'
export default {
  components: {
    Modal
  },
  methods: {
    closeModal() {
      this.$store.state.isAddMasterModalOpen = false
    },
    changeSelectedTipsModal(inputName) {
      this.$store.state.isOpenTipsModal = true
      this.$store.state.selectedTipsModal = inputName
    }
  }
}
</script>


<template>
<Modal>
  <template v-slot:form>
  <table style="border-spacing:7px; width:100%">
    <tr>
      <td style="border-bottom: 3px black solid; padding-bottom:4px" colspan="2">
        <h2>CREATE ITEM</h2>
      </td>
    </tr>
    <tr>
      <td>
        <label for="company" class="block text-sm text-gray-700">company:</label>
        <h4>testcase</h4>
      </td>
      <td>
        <label for="itemtype" class="block text-sm text-gray-700">itemtype:</label>
        <h4>product</h4>
      </td>
    </tr>
    <tr>
      <td>
        <label for="code" class="block text-sm text-gray-700">code:</label>
        <input type="text" id="code" name="code"  class="border rounded-md" style="height:34px; width:100%; padding-left:10px" @click="changeSelectedTipsModal('code')">
      </td>
      <td>
       
      <label for="title" class="block text-sm text-gray-700">title:</label>
      <input type="text" id="title" name="title"  class="w-full border rounded-md" style="height:34px;padding-left:10px" @click="changeSelectedTipsModal('title')">
      </td>
    </tr>
    <tr>
      <td>
       <label for="itemGroup" class="block text-sm text-gray-700">itemGroup:</label>
        <select class="w-full border rounded-md" style="height:34px" @click="changeSelectedTipsModal('itemGroup')">
          <option value="">haha</option>
          <option value="">haha</option>
        </select>
      </td>
      <td>
        <label for="itemAccountGroup" class="block text-sm text-gray-700">itemAccountGroup:</label>
        <select class="w-full border rounded-md" style="height:34px" @click="changeSelectedTipsModal('itemAccountGroup')">
          <option value="">haha</option>
          <option value="">haha</option>
        </select>
      </td>
    </tr>
    <tr>
      <td colspan="2">
         <label for="itemUnit" class="block text-sm text-gray-700">item Unit:</label>
        <select class="w-full border rounded-md" style="height:34px" @click="changeSelectedTipsModal('itemUnit')">
          <option value="">haha</option>
          <option value="">haha</option>
        </select>
      </td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="isActive" value="" style="padding-left:500px;" id="isActive" @click="changeSelectedTipsModal('isActive')">
        <label for="isActive" style="padding-left:5px;" >isActive</label>
      </td>
    </tr>
    <tr>
      <td>
        <button style="width:80px;height:40px;border-radius:10px;background-color:#a083c9;font-weight:bold;font-size:16px;" @click="closeModal">BACK</button>
      </td>
      <td style="text-align:right;">
        <button style="width:80px;height:40px;border-radius:10px;background-color:#797dd6;font-weight:bold;font-size:16px;">SAVE</button>
      </td>
    </tr>
  </table>
  </template>
</Modal>
</template>

<style>

input[type=checkbox] {
    transform: scale(1.5);
}

  .block {
    display: block;
}

.text-sm {
    font-size: 0.875rem;
}

.text-gray-700 {
    color: #4a5568;
}

.border {
    border-width: 2.8px;
    font-weight: bold;
    border-style: solid;
}

.rounded-md {
    border-radius: 0.375rem;
}

.w-full {
    width: 100%;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

</style>