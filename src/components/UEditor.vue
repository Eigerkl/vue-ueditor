<template>
  <div id="UEditor">
    <script id="editor" type="text/plain"></script>
  </div>
</template>

<script>
    export default {
        name: "UEditor",
        data(){
          return{
            editor:null
          }
        },
        props:{
          defaultMsg:{type:String},
          config:{type:Object}
        },
        mounted(){
          //初始化UE
          const _this = this;
          _this.editor = UE.getEditor('editor',_this.config);
        },
        methods:{
          getUEContent(){
            return this.editor.getUEContent()
          }
        },
        destoryed(){
          this.editor.destory();
        }
    }
</script>

<style scoped>

</style>
