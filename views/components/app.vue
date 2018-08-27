<template>
 <div id="app">
    <h1 class="h">121</h1>
 </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    this.abc()
  },
  methods: {
    abc(){
      let test = [{a:11,b:2},{a:11,b:2},{a:101,b:2},{a:2011,b:2}]
      let newtest=test.map(({a})=>{
           return a+1
      })
      console.log(newtest)
    }
  }
}
</script>
