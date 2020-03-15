<template>
  <div>
    <div class="row">
      <div v-for="item in getData" :key="item.Id" class="col-3">
      <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">{{item[header]}}</div>
        <div class="card-body text-primary">
          <h5 class="card-title">{{item[bodyName]}}</h5>
          <p v-for="bod in body" :key="bod" class="card-text">{{item[bod]}}</p>
        </div>
      </div>
    </div>
    </div>
    
    <div class="row d-flex justify-content-center">
      <b-pagination
      v-model="currentPage"
      :total-rows="paginationInfo.totalItems"
      :per-page="paginationInfo.totalPages"
      aria-controls="my-table"
    ></b-pagination>
    </div>
  </div>
</template>

<script>
import * as Utils from "@/Utils.js";

export default {
  name: "card",
  props: {
    items: Array,
    header: String,
    bodyName: String,
    body: Array,
    footer: String
  },
  data() {
    return {
      currentPage: 1,
      paginationInfo: {}
    };
  },
  mounted() {
    this.paginate();
  },
  methods: {
    paginate() {
      if (this.items.length) {
        const paginationInfo = Utils.paginate(this.items.length, this.currentPage);

        console.log(paginationInfo);
        this.paginationInfo = paginationInfo;
        

      }
    }
  },computed:{
    getData(){
      return this.items.slice(this.paginationInfo.startIndex,this.paginationInfo.endIndex +1);
    }
  },
  watch:{
      currentPage: function () {
      this.paginate();
    }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
