<template>
  <div>
    <app-header></app-header>
    <div id="main">
      <div class="hello">
        <!--<ul>-->
          <!--<li v-for="user in users">-->
            <!--<h2>{{user.name}}</h2>-->
            <!--<h3 >{{user.email}}</h3>-->
          <!--</li>-->
        <!--</ul>-->
        <button v-on:click="a++">add to A</button>
        <button v-on:click="b++">add to B</button>
        <p>A--{{a}}</p>
        <p>B--{{b}}</p>
        <p>A + Age ={{addToA}}</p>
        <p>B + Age ={{addToB}}</p>
      </div>
    </div>
    <!--<app-footer></app-footer>-->
  </div>
</template>

<script>
  import header from './header'
  // import footer from './footer'
export default {
  name: 'HelloWorld',
  components:{
    'app-header':header,
    // 'app-footer':footer,
  },
  data () {
    return {
      users:[],
      a:0,
      b:0,
      age:20,
    }
  },
  methods:{

  },
  computed:{
    addToA:function(){
      console.log("A");
      return this.a +this.age;

    },
    addToB:function(){
      console.log("B");
      return this.b +this.age;
    }
  },
  created(){
    this.$http.get("http://jsonplaceholder.typicode.com/users").then((data)=>{
      this.users=data.body;
    });
  }
}
</script>
<!--
-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width:100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
