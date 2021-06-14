new Vue({
  el: "#app",
  data: {
    movie: {},
    movieName: "",
  },

  computed: {
    currentMovie() {
      return this.movie;
    },
  },

  methods: {},

  watch: {
    movieName: function (val) {
      fetch(`https://www.omdbapi.com/?t=${val}&apikey=f8db8c24`)
        .then((response) => response.json())
        .then((data) => {
          this.movie = data;
        });
    },
  },

  //   created() {
  //     fetch(`http://www.omdbapi.com/?t=${this.movieName}&apikey=f8db8c24`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         this.movie = data;
  //       });
  //   },
});
