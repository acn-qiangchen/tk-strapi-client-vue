<template>
  <div class="container">
    <h1 class="mt-4">Backend API Data</h1>
    <div class="row">
      <div class="col-sm-4" v-for="item in items" :key="item.id">
        <div class="card">
          <img :src="item.attributes.AssetFile.data.attributes.formats.thumbnail.url" class="card-img-top" alt="..."
           width="item.attributes.AssetFile.data.attributes.formats.thumbnail.width"
           length="item.attributes.AssetFile.data.attributes.formats.thumbnail.length"
          >
          <div class="card-body">
            <h5 class="card-title">{{item.attributes.Name}}</h5>
            <p class="card-text">{{ item.attributes.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!--
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="item in data.data" :key="item.id">
        <p>id : {{item.id}}</p>
        <p>name : {{item.attributes.Name}}</p>
        <p>description : {{ item.attributes.Description }}</p>
        <p><img :src="item.attributes.AssetFile.data.attributes.formats.thumbnail.url" alt="Image" class="mt-2" /></p>
      </li>
    </ul>
    -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const apiKey = '0ef6a03db0b2a73bcc03ab34fb1f9d410de25fbb68e8b1d60b31a59dd91b0b317673769395768ef9f4ef66b862a956ab69b894c201a5abe38f68ea46a68928f983a1ea17ea52e4268815423cfa4b991d3671119574cc79105f662902263ad8dbc6974b6301c73cc2ded24d157e5c866b8d12d8679fdced6b1f705b1b9c17fe48'; // Replace with your actual API key

      // Make an API call to your backend endpoint with the API key in headers
      fetch('http://52.196.2.20:1337/api/ac-assets?populate=*', {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      })
        .then(response => response.json())
        .then(data => {
          this.items = data.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  },
};
</script>