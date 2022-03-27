<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control form-control-lg" v-model="article.title"  placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control" v-model="article.description" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                  <textarea class="form-control" rows="8" v-model="article.body" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input type="text" class="form-control" v-model="temp" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="createClick">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createArticle } from '@/api/article'
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data() {
    return {
      temp:'',
      article:{
        title:'',
        description:'',
        body:'',
        tagList:[]
      }
    }
  },
  methods:{
    async createClick() {
      if (this.temp !== '') {
        this.article.tagList = this.temp.split(' ')
      }
      console.log(this.article)
      const { data } = await createArticle({article: this.article}) 
      console.log(data)
    }
  }
}
</script>

<style>

</style>
