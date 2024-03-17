<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="item in assets" :key="item.id">
        <div class="card  mt-2">
          <img alt="Vue logo" class="logo" src="@/assets/ACTS.jpg" width="40" height="40" />
          <div class="card-body">
            <h5 class="card-title">{{ item.attributes.Name }}</h5>
            <p class="card-text">{{ item.attributes.ShortDescription }}</p>
            <router-link :to="{ name: 'asset', params: { id: item.id } }" class="btn btn-primary">View
              Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useAssetStore} from '@/store/assetStore'
import axios from 'axios'
//import { storeToRefs } from 'pinia'

export default {
  data(){
    return {
      assets:[]
    }
  },
  // computed:{
  //   dataStore(){
  //     return useAssetStore();
  //   }
  // },
  methods: {
    async getData(){
      const url = 'http://54.150.252.219:8080/api/ac-assets?populate=*';
      const token = '0ef6a03db0b2a73bcc03ab34fb1f9d410de25fbb68e8b1d60b31a59dd91b0b317673769395768ef9f4ef66b862a956ab69b894c201a5abe38f68ea46a68928f983a1ea17ea52e4268815423cfa4b991d3671119574cc79105f662902263ad8dbc6974b6301c73cc2ded24d157e5c866b8d12d8679fdced6b1f705b1b9c17fe48';
      const response = await axios.get(url, {
          headers: {
              'Authorization': 'Bearer ' + token
          }
      }).catch((error) => console.error('Error fetching data:', error));

      return response.data.data
    }
  },

  async created() {
    const dataStore = useAssetStore();
    dataStore.initStore(await this.getData());
    this.assets = dataStore.getAllData;
  },
};
</script>