<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="item in assets" :key="item.id">
        <div class="card  mt-2">
          <img alt="Vue logo" class="logo" src="@/assets/ACTS.jpg" width="40" height="40" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.position }}</p>
            <router-link :to="{ name: 'asset', params: { id: item.id } }" class="btn btn-primary">View
              Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <AssetDetail :id="2"/>
  </div>
</template>

<script>
import dummyData from './DummyData';
import AssetDetail from './AssetDetail.vue';

export default {
  components: {
    AssetDetail
  },
  data() {
    return {
      assets: []
    };
  },
  created() {
    // Fetch data (e.g., from an API)
    this.fetchData();
  },
  methods: {
    fetchData() {
      // Simulate fetching data (replace with actual API call)
      // Populate this.items with the fetched data
      this.assets = dummyData.data;
    },
  },
  // so that the assets can be injected in another components
  provide() {
    return { assets: this.assets }
  },
};
</script>