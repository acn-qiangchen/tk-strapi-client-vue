<template>
  <!-- contents for display -->
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ item.Name }}</h5>
        <p class="card-text">ShortDescription: {{ item.ShortDescription }}</p>
        <p class="card-text">Contact: {{ item.Contact }}</p>
        <p class="card-text">ReleaseNote: {{ item.ReleaseNote }}</p>
        <p class="card-text">Contact: {{ item.Contact }}</p>
        <p class="card-text">
          <a :href="item.AssetFile.data.attributes.url">Download</a>
        </p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="generatePDF">print</button>
  </div>

  <!-- contents for print -->
  <div>
    <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
      :paginate-elements-by-height="1400" :filename="item.name" :pdf-quality="2" :manual-pagination="false"
      pdf-format="a4" pdf-orientation="landscape" pdf-content-width="800px" @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()" @hasGenerated="hasGenerated($event)" ref="html2Pdf">
      <template v-slot:pdf-content>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <p class="card-text">Position: {{ item.position }}</p>
              <p class="card-text">Number: {{ item.number }}</p>
            </div>
          </div>
        </div>
      </template>
    </vue3-html2pdf>
  </div>
</template>

<script>
// import dummyData from './DummyData';
import {useAssetStore} from '@/store/assetStore'

export default {
  props: ['id'],
  methods: {
    generatePDF() {
      this.$refs.html2Pdf.generatePdf()
    }
  },
  // data() {
  //   return {
  //     item: this.$route.params.item,
  //   };
  // },
  computed: {
    item() { 
      const dataStore = useAssetStore();
      const data = dataStore.getAllData.find((item) => item.id === parseInt(this.id));
      console.log(data);
      return data.attributes;
    }
  },
};
</script>