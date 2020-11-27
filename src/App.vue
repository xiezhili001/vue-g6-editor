<template>
  <div id="app">
    <G6Editor @save="saveData">

    </G6Editor>
  </div>
</template>

<script>
import G6Editor from './components/G6Editor'
export default {
  name: 'app',
  components:{G6Editor},
  methods: {
    saveData(data) {
      console.log(data);
    }
  }
}
</script>

<style>
html, body {
    overflow: hidden;
    margin: 0;
    font-size: 12px;
    padding: 0!important;
}
#app{
  margin: 0;
  padding: 0;
}
</style>
