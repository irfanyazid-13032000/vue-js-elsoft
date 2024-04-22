<script>
import TipsModal from './TipsModal.vue';
export default {
    data() {
        return {
            namaPanjang:'doni'
            
        }
    },
    computed: {
        isAddMasterModalOpen() {
            return this.$store.state.isAddMasterModalOpen
        },
        selectedTipsModal() {
            return this.$store.state.selectedTipsModal
        }
    },
    components: {
        TipsModal
    }
}
</script>
<template>
  <div :class="{'d-none':!isAddMasterModalOpen,'fixed':isAddMasterModalOpen}" class="inset-0 bg-black bg-opacity-25 flex justify-center items-center">
    <div  :class="{'d-none':!isAddMasterModalOpen,'flex':isAddMasterModalOpen}" class="w-400px flex-col bg-white p-6 rounded ">
       <slot name="form"></slot>
    </div>
    <TipsModal>
        <template v-slot:messageTips>
        <div v-if="1 == 1">
            {{ selectedTipsModal }}
            {{ namaPanjang }}
        </div>
        </template>
    </TipsModal>
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

