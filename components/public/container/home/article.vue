<template>
  <div class="article">
    <List class="article-list">
      <ListItem v-for="item in article" :key="item.id">
        <div  @click="toDetails(item.id)">
          <Row align="middle">
            <!--图片位置-->
            <Col class="article-img" :xs="24" :md="8" :lg="8">
              <img height="130" width="100%" :src="item.img">
            </Col>
            <!--文章内容-->
            <Col class="article-content" :xs="24" :md="16" :lg="16">
              <Row :gutter="15" align="middle">
                <Col :xs="15" :md="14" :lg="14" class="title bl-nowrap"><h3 class="article-title">{{item.title}}</h3></Col>
                <Col :xs="9" :md="5"  :lg="5" class="bl-text-right"><span  class="bl-label">{{item.label}}</span></Col>
                <Col :xs="0" :md="5" :lg="5" ><Icon type="ios-timer" size="20"/><span class="bl-nowrap">{{item.timer}}</span></Col>
              </Row>
              <p class="article-description bl-text-indent bl-over-hidden">
                {{item.content}}
              </p>
              <Row class="bl-text-center" type="flex" justify="start" align="middle" style="font-size: 12px">
                <Col :xs="8" :md="5">
                  <span>{{item.author}}</span>
                </Col>
                <Col :xs="8" :md="5">
                  <Icon type="md-chatboxes"/>&nbsp;&nbsp;{{item.reply}}
                </Col>
                <Col :xs="8" :md="5">
                  <Icon type="md-rose"/>&nbsp;&nbsp;{{item.like}}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </ListItem>
    </List>
  </div>
</template>

<script>
  import page from '../../../commons/page.vue';
  export default {
    data(){
      return {
        article:[
          {
            id:"1",
            img:"https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
            title:"Java集合(Set,List,Queue)",
            label:"SpringBoot",
            timer:"2019-9-15",
            content:" Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
            author:"码图123",
            reply:"123123",
            like:"123"
          },
          {
            id:"2",
            img:"https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
            title:"Java集合(Set,List,Queue)",
            label:"SpringBoot",
            timer:"2019-9-15",
            content:" Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
            author:"码图123",
            reply:"123123",
            like:"123"
          },
          {
            id:"3",
            img:"https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large",
            title:"Java集合(Set,List,Queue)",
            label:"SpringBoot",
            timer:"2019-9-15",
            content:" Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
            author:"码图123",
            reply:"123123",
            like:"123"
          }
        ]
      }
    },
    components:{
      page
    },
    methods:{
      toDetails:function(id){
        //拿到点击文章的id传入详情页面
        this.$router.push({path:`/public/details/${id}`})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .ivu-list-item{
    padding: 2%;
    &:hover{
      border: 2px solid #3498db;
      transition: all 0.1s cubic-bezier(.03,1.29,.72,.8);
    }
  }
.article{
  width: 100%;
  height: auto;
  background: #fff;
  .article-content{
    padding-left: 2%;
    .article-description{
      max-height: 120px;
      font-size: 12px;
      padding: 1.5% 0;
    }
  }
}
</style>
