import { defineStore } from 'pinia'
// import axios from 'axios'

export const useAssetStore = defineStore('assets',{
    state: () => ({
        allData:[]
    }),

    getters: {
        getAllData: (state) => state.allData,
        getItembyId(id){
            return this.state.allData[id]
        }
    },

    actions: {
        initStore(data){
            this.allData = data;
        },

        reset() {
            this.allData = []
        }
    }
})