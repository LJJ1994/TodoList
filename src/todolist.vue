<template>
  <div>
    <div>
      <input class="item" v-model="inputValue">
      <button v-on:click="handleSubmit">提交</button>
    </div>
    <ul>
      <todo-item 
      v-for="(item,index) of list"
      :key="index"
      :content="item"
      :index="index"
      @delete="handleDetele"
      >  
      </todo-item>
    </ul>
  </div>
</template>

<script>
import todoitem from './components/todoitem'

export default {
  components : {
    'todo-item' : todoitem 
  },
  data : function(){ 
    return {
      inputValue : '',
      list : []
    }
  },
  methods : {
    handleSubmit : function(){
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDetele : function(index){
      this.list.splice(index,1)
    }
  } 
}
</script>

<style scoped>
  .item{
    color:red;
  }
</style>
