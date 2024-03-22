<template>
  <!-- contents for display -->
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title">{{ item.Name }}</h1>
        <hr>
        <h2>ShortDescription</h2>
        <p class="card-text">{{ item.ShortDescription }}</p>
        <hr>
        <h2>ReleaseNote</h2>
        <p>
          <Markdown :source="item.ReleaseNote" :comments="false" />
        </p>
        <hr>
        <h2>Contact</h2>
        <p class="card-text">{{ item.Contact }}</p>
        <hr>
        <h2>AssetFile</h2>
        <p class="card-text">
          <a :href="item.AssetFile.data.attributes.url">Click to download</a>
        </p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="generatePDF">print</button>
  </div>

  <!-- contents for print -->
  <div>
    <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="false"
      :paginate-elements-by-height="1400" :filename="item.name" :pdf-quality="2" :manual-pagination="false"
      pdf-format="a4" pdf-orientation="portrait" pdf-content-width="800px" @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()" @hasGenerated="hasGenerated($event)" 
      :html-to-pdf-options="html2pdfOption"
      ref="html2Pdf">
      <template v-slot:pdf-content>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">{{ item.Name }}</h2>
              <hr>
              <h2>ShortDescription</h2>
              <p class="card-text">{{ item.ShortDescription }}</p>
              <hr>
              <h2>ReleaseNote</h2>
              <p>
                <Markdown :source="item.ReleaseNote" :comments="false" />
              </p>
              <hr>
              <h2>Contact</h2>
              <p class="card-text">{{ item.Contact }}</p>
              <hr>
              <h2>AssetFile</h2>
              <p class="card-text">
                <a :href="item.AssetFile.data.attributes.url">Click to download</a>
              </p>
            </div>
          </div>
        </div>
      </template>
    </vue3-html2pdf>
  </div>
</template>

<script>
// import dummyData from './DummyData';
import { useAssetStore } from '@/store/assetStore'
import Markdown from 'vue3-markdown-it';

export default {
  props: ['id'],
  components: {
    Markdown
  },
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
    },
    html2pdfOption(){
      return {"filename": this.item.Name+".pdf", "enableLinks":true}
    }
  },
};
</script>