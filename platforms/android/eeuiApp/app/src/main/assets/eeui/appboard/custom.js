"use strict";

var eeui = app.requireModule('eeui');
Vue.mixin({
  methods: {
    openViewCode: function openViewCode(str) {
      this.openViewUrl("https://eeui.app/" + str + ".html");
    },
    openViewUrl: function openViewUrl(url) {
      eeui.openPage({
        url: '../pages/index_browser.js',
        pageType: 'app',
        statusBarColor: "#3EB4FF",
        params: {
          title: "EEUI",
          url: url
        }
      });
    }
  }
});