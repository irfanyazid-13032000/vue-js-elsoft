<script>
export default {
    computed: {
        isAddMasterModalOpen() {
            return this.$store.state.isAddMasterModalOpen
        }
    }
}
</script>
<template>
  <div :class="{'d-none':!isAddMasterModalOpen,'fixed':isAddMasterModalOpen}" class="inset-0 bg-black bg-opacity-25 flex justify-center items-center">
    <div  :class="{'d-none':!isAddMasterModalOpen,'flex':isAddMasterModalOpen}" class="w-400px flex-col bg-white p-6 rounded ">
       <slot></slot>
    </div>
<div  :class="{'d-none':!isAddMasterModalOpen,'':isAddMasterModalOpen}" style="background-color:white; width:250px; height:300px; z-index:10000; position:fixed;top:100px;left:1500px;border-radius:10px;">
    <h3 style="text-align:center;padding:20px;">Tips :</h3>
    <div style="padding:10px; font-weight:bold">
        <p>memancing adalah kegiatan yang menyenangkan dilakukan oleh orang yang suka melamun memikirkan hidup</p>
    </div>
</div>
</div>

</template>


<style>
  

.fixed {
    position: fixed;
}

.inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.bg-black {
    background-color: #000;
}

.bg-opacity-25 {
    opacity: .8;
}

.d-none{
    display: none;
}

.flex {
    display: flex;
}

.justify-center {
    justify-content: center;
}

.items-center {
    align-items: center;
}

.w-400px {
    width: 800px;
}

.bg-white {
    background-color: #fff;
}

.p-6 {
    padding: 1.5rem;
}

.rounded {
    border-radius: 0.375rem;
}

.text-black {
    color: #000;
}

.text-xl {
    font-size: 1.25rem;
}

.place-self-end {
    align-self: flex-end;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}






</style>

