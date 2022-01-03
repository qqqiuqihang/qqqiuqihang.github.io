export default {
  data() {
    return {
      queryData: {},
    };
  },
  created() {},
  mounted() {},
  methods: {
    getData(data = {}) {
      console.log("getData", { ...data, ...this.queryData });
    },

    btnClick(type) {
      try {
        this[type]();
      } catch (error) {
        console.log(error, type);
      }
    },
    searchEvent(val) {
      console.log(val);
      this.resetPgee();
    },

    pageChange(val) {
      console.log(val);
    },

    resetPgee() {
      this.$refs.myPagination.resetPage();
    },
  },
};
