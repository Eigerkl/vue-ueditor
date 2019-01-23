<template>
  <div class="docMain">
    <UEditor :config=config ref="ue"></UEditor>
  </div>
</template>

<script>
  import UEditor from '../components/UEditor'
    export default {
        name: "test",
        data(){
          return{
            config:{
              initialFrameHeight:100,
              initialFrameWidth:600
            },
            docTitle:"",
            docDescription:"",
            docMain:"",
          }
        },
        components:{
          UEditor
        }
    }
</script>

<style scoped>

</style>
