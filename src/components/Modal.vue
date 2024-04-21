<script>
export default {
}
</script>
<template>
  <div class="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
    <div class="w-400px flex flex-col bg-white p-6 rounded">
        <!-- <button class="text-black text-xl place-self-end">
            X
        </button> -->
       <slot></slot>
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

.backdrop-blur-sm {
    backdrop-filter: blur(16px);
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

