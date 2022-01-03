export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    getData(data = {}) {
      console.log("getData", data);
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
    },

    pageChange(val) {
      console.log(val);
    },
  },
};
