<template>
  <!-- contents for display -->
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text">Position: {{ item.position }}</p>
        <p class="card-text">Number: {{ item.number }}</p>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="generatePDF">print</button>
  </div>

  <!-- contents for print -->
  <div>
    <vue3-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true"
      :paginate-elements-by-height="1400" :filename="item.name" :pdf-quality="2" :manual-pagination="false" pdf-format="a4"
      pdf-orientation="landscape" pdf-content-width="800px" @progress="onProgress($event)"
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
import dummyData from './DummyData';


export default {
  // components: {
  //   Vue3Html2pdf
  // },
  methods: {
    generatePDF() {
      this.$refs.html2Pdf.generatePdf()
    }
  },
  data() {
    return {
      item: {},
    };
  },
  created() {
    const id = Number(this.$route.params.id);
    this.item = dummyData.data.find((item) => item.id === id);
  },
};
</script>