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
     <img src="../../public/img/bright-light-bulb-svgrepo-com.svg" style="width:35px; margin-left:auto;margin-right:auto;display:block;padding-top:10px;">
    <h3 style="text-align:center;padding:15px;">Tips :</h3>
        <p><slot name="messageTips"></slot></p>
    </div>
</div>
</template>