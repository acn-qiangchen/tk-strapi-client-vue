<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3" v-for="item in assets" :key="item.id">
        <div class="card  mt-2">
          <img alt="Vue logo" class="logo" src="@/assets/ACTS.jpg" width="40" height="40" />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.position }}</p>
            <router-link :to="{ name: 'asset', params: { id: item.id } }" class="btn btn-primary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dummyData from './DummyData';

export default {
  data() {
    return {
      assets: dummyData.data
    };
  },
};
</script>