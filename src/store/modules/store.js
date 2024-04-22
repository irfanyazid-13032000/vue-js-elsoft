import { createStore } from 'vuex';

export const store = createStore({
  state: {
    selectedMenu: 'master',
    isAddMasterModalOpen:true// Inisialisasi selectedMenu dengan nilai 'inventory'
  }
});
