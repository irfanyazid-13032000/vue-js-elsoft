<script>
import TipsModal from './TipsModal.vue';
export default {
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
        <div v-if="selectedTipsModal == 'code'">
            <p style="text-align:center;">masukkan kode atau SKU untuk mempermudah pelacakan, contoh : HP/KK/LK/001</p>
        </div>
        <div v-if="selectedTipsModal == 'title'">
            <p style="text-align:center;">isi title untuk item</p>
        </div>
        <div v-if="selectedTipsModal == 'itemGroup'">
            <p style="">pilih item group untuk mengelompokkan item, agar kedepannya bisa menganalisa penjualan per item group tersebut. <br> contoh : produk lain-lain dan lain sebagainya</p>
        </div>
        <div v-if="selectedTipsModal == 'itemAccountGroup'">
            <p style="">pilih item account group untuk menentukan account yg digunakan pada saat posting ke laporan keuangan. <br> contoh : produk lain-lain</p>
        </div>
        <div v-if="selectedTipsModal == 'itemUnit'">
            <p style="">tentukan satuan yg akan digunakan untuk mendeskripsikan kemasan item tersebut. <br> contoh : PCS, BOX, CM dan lain sebagainya</p>
        </div>
        <div v-if="selectedTipsModal == 'isActive'">
            <p style="">centang berarti mengaktifkan data tersebut agar bisa digunakan saat transaksi, atau hilangkan centang untuk menonaktifkan data tersebut dan tidak bisa digunakan saat transaksi</p>
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

