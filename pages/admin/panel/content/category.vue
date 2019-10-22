<template>
  <div class="category">
    <Row v-if="allStatus" :gutter="16">
      <Col :md="2">
        <Button @click="removeAll">删除选中</Button>
      </Col>
      <Col :md="2">
        <Button @click="handleSelectAll(false)">取消全选</Button>
      </Col>
    </Row>
    <br/>
    <Table border ref="selection" :columns="columns" :data="category" @on-selection-change="handleSelectRow()"></Table>
  </div>
</template>

<script>
  export default {
    layout: "admin",
    data() {
      return {
        columns: [
          {
            type: 'selection',
            title:'勾选',
            width: 60,
            align: 'center'
          },
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '分类名',
            key: 'categoryName'
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'success',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.update(params.index)
                    }
                  }
                }, '修改'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        category: [],
        allStatus:false
      }
    },
    created() {
      // 获取分类信息
      this.getCategory();
    },
    methods: {
      // 加载数据
      async getCategory() {
        let that = this;
        const {data: {code, data}} = await this.$axios.get('/category/getCategory');
        if (code === 1) {
          that.category = data;
        }else {
          // 数据请求失败
        }
      },
      // 展示详情
      show(index) {
        // index为下标
        // 获取当前数据内容
        this.$Modal.info({
          title: '当前数据详情',
          content: `序号为：${this.category[index].id}<br>
                    分类名：${this.category[index].categoryName}<br>`
        })
      },
      // 删除单行数据
      remove(index){
        console.log(index);
      },
      // 更新
      update(index){
        // 请求api进行修改
        console.log(index);
      },
      // 批量删除
      async removeAll() {
        // 从监控表单中获取选中ids集合
        let ids = this.handleSelectRow();
        console.log(ids);
        const {data: {code}} = await this.$axios.post('/category/delCategory',{
          useremail:"email",
          code: "code"
        });
        console.log(code);
      },
      // 全部选中
      handleSelectAll (status) {
        // 一键勾选
        status ? this.allStatus = true : this.allStatus = false;
        this.$refs['selection'].selectAll(status);
      },
      // 监控表单勾选状态
      handleSelectRow(){
        // 创建空数组保存待删除id
        let ids = [];
        // 获取表单中选中删除的数据id并将其压入数组中
        this.$refs['selection'].getSelection().map(item=>ids.push(item.id));
        // 判断数组长度 ： 不为0 则将批量删除按钮显示出来
        ids.length !== 0 ? this.allStatus = true : this.allStatus = false;
        return ids;
      }
    }
  }
</script>

<style scoped>

</style>
