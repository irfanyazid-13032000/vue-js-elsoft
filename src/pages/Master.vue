<script>
import Sidebar from '../components/Sidebar.vue';
export default {
  computed: {
    status1() {
      return this.$store.state.selectedMenu
    }
  },
  components: {
    Sidebar
  },
  methods: {
    changeValue() {
      this.$store.state.selectedMenu = "jadi apa ini woy"
    }
  },
}
</script>
<template>
  <Sidebar>
   <slot>{{ status1 }} <button type="" @click="changeValue">ubah value</button></slot>
  </Sidebar>

</template>