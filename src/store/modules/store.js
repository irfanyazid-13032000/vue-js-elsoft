import { createStore } from 'vuex';

export const store = createStore({
  state: {
    selectedMenu: 'master',
    isAddMasterModalOpen: true,
    selectedTipsModal: '',
    isOpenTipsModal:false
  }
});
