<template>
  <Card class="hot-card">
    <p slot="title" class="bl-text-title">
      <Icon type="md-ribbon" size="20" />
      热门点击
    </p>
    <List class="hot-list">
      <ListItem>
        <Row align="middle">
          <!--图片位置-->
          <Col class="hot-img bl-text-center" style="vertical-align: middle" :xs="8" :md="8" :lg="8">
            <img height="50" width="80" src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large">
          </Col>
          <!--文章内容-->
          <Col class="hot-content" :xs="16" :md="16" :lg="16">
            <Row>
              <Col :xs="24" :md="24" :lg="24">
                <h3 class="bl-nowrap" style="padding-bottom: 3%;">Java集合(Set,LiListListListst,)</h3>
              </Col>
            </Row>
            <Row align="middle" style="font-size: 12px">
              <Col :xs="12" :md="12" :lg="12">
                <Icon type="md-eye" size="18"/>
                &nbsp;&nbsp;9999
              </Col>
              <Col :xs="12" :md="12" :lg="12">
                <Icon type="ios-timer" size="18"/>
                <span class="bl-nowrap">2019-9-15</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </ListItem>
      <ListItem>
        <Row align="middle">
          <!--图片位置-->
          <Col class="hot-img bl-text-center" style="vertical-align: middle" :xs="8" :md="8" :lg="8">
            <img height="50" width="80" src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large">
          </Col>
          <!--文章内容-->
          <Col class="hot-content" :xs="16" :md="16" :lg="16">
            <Row>
              <Col :xs="24" :md="24" :lg="24">
                <h3 class="bl-nowrap" style="padding-bottom: 3%;">Java集合(Set,LiListListListst,)</h3>
              </Col>
            </Row>
            <Row align="middle" style="font-size: 12px">
              <Col :xs="12" :md="12" :lg="12">
                <Icon type="md-eye" size="18"/>
                &nbsp;&nbsp;9999
              </Col>
              <Col :xs="12" :md="12" :lg="12">
                <Icon type="ios-timer" size="18"/>
                <span class="bl-nowrap">2019-9-15</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </ListItem>
      <ListItem>
        <Row align="middle">
          <!--图片位置-->
          <Col class="hot-img bl-text-center" style="vertical-align: middle" :xs="8" :md="8" :lg="8">
            <img height="50" width="80" src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large">
          </Col>
          <!--文章内容-->
          <Col class="hot-content" :xs="16" :md="16" :lg="16">
            <Row>
              <Col :xs="24" :md="24" :lg="24">
                <h3 class="bl-nowrap" style="padding-bottom: 3%;">Java集合(Set,LiListListListst,)</h3>
              </Col>
            </Row>
            <Row align="middle" style="font-size: 12px">
              <Col :xs="12" :md="12" :lg="12">
                <Icon type="md-eye" size="18"/>
                &nbsp;&nbsp;9999
              </Col>
              <Col :xs="12" :md="12" :lg="12">
                <Icon type="ios-timer" size="18"/>
                <span class="bl-nowrap">2019-9-15</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </ListItem>
    </List>
  </Card>
</template>

<script>
  export default {
    data(){
      return {
        hotList: [{
          id:"11231233",
          articleUrl: "https://uploads-ssl.webflow.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif",
          label:"Redis",
          labelColor:"#FBAB7E",
          title:"Java集合(Set,List,Queue)",
          time:"2019-10-5",
          content:"Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
          userAvatar:"https://i.loli.net/2017/08/21/599a521472424.jpg",
          viewsCounts:"99",
          commentCounts:"99",
          enjoyCounts:"99",
        },
          {
            id:"11231233",
            articleUrl: "https://uploads-ssl.webflow.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif",
            label:"Redis",
            labelColor:"#FBAB7E",
            title:"Java集合(Set,List,Queue)",
            time:"2019-10-5",
            content:"Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
            userAvatar:"https://i.loli.net/2017/08/21/599a521472424.jpg",
            viewsCounts:"99",
            commentCounts:"99",
            enjoyCounts:"99",
          },
          {
            id:"11231233",
            articleUrl: "https://uploads-ssl.webflow.com/5bff8886c3964a992e90d465/5bff98f85ea7faf86504605e_scenes.gif",
            label:"Redis",
            labelColor:"#FBAB7E",
            title:"Java集合(Set,List,Queue)",
            time:"2019-10-5",
            content:"Collection体系里的集合图1.0Collection集合体系的继承树其中，Set，List是Collection接口派生的两个接口，他们分别代表了无序集合和有序集合；Queue是Java提供的队列实现，有点类似于list。Set集合Set集合不允许包括相同的元素，如果试图把两个相同的元素添加Set集合中，则添加失败。HashSet类HashSet类是Set集合的实现类，它通过hash...",
            userAvatar:"https://i.loli.net/2017/08/21/599a521472424.jpg",
            viewsCounts:"99",
            commentCounts:"99",
            enjoyCounts:"99",
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .hot-card {
    .ivu-card-body{
      padding: 4%!important;
    }
    .ivu-list-item{
     padding: 0!important;
    }
    .ivu-row{
      width: 100%!important;
      padding: 1% 0;
    }
    .hot-list{
      width: 100%;
      height: auto;
      font-size: 12px;
      background: white;
    }
  }
</style>
