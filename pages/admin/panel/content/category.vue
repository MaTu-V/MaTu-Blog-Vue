<template>
  <div class="category">
    <Row :gutter="20">
      <!--表单-->
      <Col :md="8" :lg="8">
        <Card style="width:320px">
          <div style="text-align:center">
            <h3>新 增 分 类</h3>
          </div>
          <br/>
          <div>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="默认id" prop="id" v-if="updStatus">
                <Input v-model="formValidate.id" disabled></Input>
              </FormItem>
              <FormItem label="分类名称" prop="name">
                <Input v-model="formValidate.name" placeholder="请输入分类名称"></Input>
              </FormItem>
              <FormItem>
                <Button type="primary" v-if="!updStatus" @click="addSubmit('formValidate')">提交</Button>
                <Button type="warning" v-if="updStatus" @click="updSubmit('formValidate')" style="margin-left: 8px">
                  修改
                </Button>
                <Button @click="Reset('formValidate')" style="margin-left: 8px">重置</Button>
                <Button type="text" v-if="updStatus" @click="Back(`formValidate`)">返回</Button>
              </FormItem>
            </Form>
          </div>
        </Card>
      </Col>
      <!--表格-->
      <Col :md="16" :lg="16">
        <Row v-if="allStatus" :gutter="16">
          <Col :md="3">
            <Button @click="remove(null)">删除选中</Button>
          </Col>
          <Col :md="3">
            <Button @click="handleSelectAll(false)">取消全选</Button>
          </Col>
        </Row>
        <br/>
        <Table border ref="selection" :columns="columns" :data="category"
               @on-selection-change="handleSelectRow()"></Table>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    layout: "admin",
    data() {
      return {
        // 表单内容
        formValidate: {
          id: '',
          name: ''
        },
        ruleValidate: {
          id: [
            {required: true, message: 'Sorry!获取标签id失败~请刷新试试', trigger: 'blur'}
          ],
          name: [
            {required: true, message: '请确认输入分类名称', trigger: 'blur'}
          ]
        },
        // 展示表格数据
        columns: [
          {
            type: 'selection',
            title: '勾选',
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
                      // 清空之前新增表单中的数据
                      this.Reset(`formValidate`)
                      // 将表单切换为更新表单
                      this.update('formValidate', params.index)
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
        // 表格批量操作按钮状态
        allStatus: false,
        // 添加/修改表单切换
        updStatus: false
      }
    },
    created() {
      // 获取分类信息
      this.getCategory()
    },
    methods: {
      // 新增表单
      addSubmit(name) {
        let that = this
        that.$refs[name].validateField('name', () => {
          // 验证通过进行回调
          // 调用添加操作
          that.$axios.post('/category/insCategory', {categoryName: that.$refs[name].model.name})
            .then(({data: {code}}) => {
              if (code === 1) {
                that.$Message.success('添加成功!')
                // 刷新页面分类信息
                that.getCategory()
                // 清空当前表单数据
                that.Reset(name)
              } else {
                that.$Message.error('添加失败!')
              }
            })
            .catch(() => that.$Message.error('添加失败!'))
        })
      },
      updSubmit(name) {
        let that = this
        that.$refs[name].validate((valid) => {
          // 发送请求
          that.$axios.post('/category/updCategory', {
            id: that.$refs[name].model.id,
            categoryName: that.$refs[name].model.name
          })
            .then(({data: {code}}) => {
              if (code === 1) {
                that.$Message.success('更新成功!')
                // 刷新页面分类信息
                that.getCategory()
                // 清空当前表单数据
                that.Reset(name)
              } else {
                that.$Message.error('更新失败!')
              }
            })
            .catch(() => that.$Message.error('更新失败!'))
        })
      },
      // 表单重置
      Reset(name) {
        this.$refs[name].resetFields()
      },
      // 返回上层
      Back(name){
        this.updStatus = !this.updStatus
        this.$refs[name].resetFields()
      },
      // 加载数据
      getCategory() {
        let that = this
        that.$axios.get('/category/getCategory')
          .then(({data: {code, data}}) => code === 1 ? that.category = data : that.$Message.error('获取数据失败!'))
          .catch(() => that.$Message.error('获取数据失败!'))
      },
      // 更新
      update(name, index) {
        let that = this;
        // 切换为提交表单
        that.updStatus = !that.updStatus
        // 隐藏表单中添加修改id序号
        that.$refs[name].model.id = that.category[index].id
      },
      // 删除
      remove(index) {
        let that = this
        let ids = []
        // 如果index不为空则为单行删除 否则为批量删除
        // 单行删除将当前index压入数组
        // 批量删除将当前ids替换为勾选状态数组
        index !== null ? ids.push(that.category[index].id) : ids = that.handleSelectRow()
        // 发送请求
        // 删除成功 刷新页面
        that.$axios.post('/category/delCategory', {ids: ids})
          .then(({data: {code}}) => {
            if (code === 1) {
              // 隐藏批量按钮
              that.handleSelectAll(false)
              // 刷新分类
              that.getCategory()
            } else {
              that.$Message.error('删除数据失败!')
            }
          })
          .catch(() => that.$Message.error('删除数据失败!'))
      },
      // 展示详情
      show(index) {
        let that = this
        // index为下标
        // 获取当前数据内容
        that.$Modal.info({
          title: '当前数据详情',
          content: `序号为：${that.category[index].id}<br>
                    分类名：${that.category[index].categoryName}<br>`
        })
      },
      // 全部选中
      handleSelectAll(status) {
        // 一键勾选
        status ? this.allStatus = true : this.allStatus = false
        this.$refs['selection'].selectAll(status)
      },
      // 监控表单勾选状态
      handleSelectRow() {
        // 创建空数组保存待删除id
        let ids = []
        // 获取表单中选中删除的数据id并将其压入数组中
        this.$refs['selection'].getSelection().map(item => ids.push(item.id))
        // 判断数组长度 ： 不为0 则将批量删除按钮显示出来
        ids.length !== 0 ? this.allStatus = true : this.allStatus = false
        return ids
      }
    }
  }
</script>

<style scoped>

</style>
