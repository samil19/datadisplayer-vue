<template>
  <div class="m-4" v-if="items">
    <div class="row">
      <div class="col-12 d-flex justify-content-end m-2">
        <button class="btn btn-secondary" v-on:click="cards = !cards">
          <i>
            <img :src="setSvg" width="18" height="18" />
          </i>
        </button>
      </div>
    </div>
    <div id="cards" v-if="cards" class="row">
      <div v-for="item in getData" :key="item.Id" class="col-3">
        <div class="card mb-3" :class="setBorder + ' ' + setBackground" style="max-width: 18rem;">
          <div
            v-if="header"
            class="card-header d-flex justify-content-left"
          >{{ item[header.atributo] }}</div>
          <div class="card-body" :class="setTextColor">
            <label v-if="showRealNameInCards && bodyName" class="d-flex justify-content-left">
              <b>{{bodyName.nombre}}</b>
            </label>
            <h5
              v-if="bodyName"
              class="card-title d-flex justify-content-left"
            >{{ item[bodyName.atributo] }}</h5>
            <div class="row">
              <div v-for="bod in body" :key="bod.atributo" :class="'col-' + setColumns">
                <label v-if="showRealNameInCards" class>
                  <b>{{bod.nombre}}</b>
                </label>
                <p class="card-text">{{ item[bod.atributo] }}</p>
              </div>
            </div>
          </div>
          <div v-if="footer" class="card-footer text-muted">{{item[footer.atributo]}}</div>
        </div>
      </div>
    </div>
    <div v-if="!cards" id="table" class="row">
      <table class="table">
        <thead>
          <tr>
            <th v-if="header" scope="col">{{header.nombre}}</th>
            <th v-if="bodyName" scope="col">{{bodyName.nombre}}</th>
            <th scope="col" v-for="bod in body" :key="bod.atributo">{{bod.nombre}}</th>
            <th v-if="footer" scope="col">{{footer.nombre}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getData" :key="item.Id">
            <th v-if="header" scope="row">{{ item[header.atributo] }}</th>
            <td v-if="bodyName">{{ item[bodyName.atributo] }}</td>
            <td v-for="bod in body" :key="bod.atributo">{{item[bod.atributo]}}</td>
            <td v-if="footer">{{ item[footer.atributo] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row d-flex justify-content-center">
      <b-pagination
        v-model="currentPage"
        :total-rows="paginationInfo.totalItems"
        :per-page="paginationInfo.pageSize"
        aria-controls="my-table"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import * as Utils from "@/Utils.js";

export default {
  name: "datadisplayer-vue",
  props: {
    items: Array,
    header: String,
    bodyName: String,
    body: Array,
    namesToShow: Array,
    footer: String,
    numberColumnsPerRow: {
      type: Number,
      default: 2
    },
    borderColorProperty: String,
    borderColor: {
      type: String,
      default: "Dark"
    },
    backgroundColorProperty: String,
    backgroundColor: {
      type: String,
      default: "Default"
    },
    textColorProperty: String,
    textColor: {
      type: String,
      default: " "
    },
    quantityPerPage: {
      type: Number,
      default: 10
    },
    showRealNameInCards: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: 1,
      paginationInfo: {},
      cards: {
        type: Boolean,
        default: true
      }
    };
  },
  mounted() {
    this.paginate();
  },
  methods: {
    paginate() {
      if (this.items.length) {
        const paginationInfo = Utils.paginate(
          this.items.length,
          this.currentPage,
          this.paginationInfo.pageSize
        );

        console.log(paginationInfo);
        this.paginationInfo = paginationInfo;
      }
    }
  },
  computed: {
    getData() {
      return this.items.slice(
        this.paginationInfo.startIndex,
        this.paginationInfo.endIndex + 1
      );
    },
    setColumns() {
      return 12 / this.numberColumnsPerRow;
    },
    setBorder() {
      return this.textColorProperty ? this.textColorProperty : this.textColor;
    },
    setBackground() {
      return this.backgroundColorProperty
        ? this.backgroundColorProperty
        : this.backgroundColor;
    },
    setTextColor() {
      return this.backgroundColorProperty
        ? this.backgroundColorProperty
        : this.backgroundColor;
    },
    setSvg() {
      return require("@/assets/" + (this.cards ? "list.svg" : "squares.svg"));
    }
  },
  watch: {
    currentPage: function() {
      this.paginate();
    },
    quantityPerPage: {
      immediate: true,
      handler() {
        this.paginationInfo.pageSize = this.quantityPerPage;
        this.paginate();
      }
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
