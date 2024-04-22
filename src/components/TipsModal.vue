<script>
export default {
  computed: {
    isOpenTipsModal() {
      return  this.$store.state.isOpenTipsModal
    }
  }
}
</script>


<template>
  <div  :class="{'d-none':!isOpenTipsModal,'':isOpenTipsModal}" style="background-color:white; width:250px; height:300px; z-index:10000; position:fixed;top:100px;left:1500px;border-radius:10px;">
    <div style="padding:10px; font-weight:bold">
    <h3 style="text-align:center;padding:20px;">Tips :</h3>
        <p><slot name="messageTips"></slot></p>
    </div>
</div>
</template>