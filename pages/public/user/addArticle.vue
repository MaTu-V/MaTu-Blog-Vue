<template>
  <Card class="addArticle">
    <Form ref="articleForm" :model="articleForm" :rules="articleRuleValidate" :label-width="80">
      <Divider orientation="left">
        <p>文章 简介
          <small>编辑</small>
        </p>
      </Divider>
      <FormItem label="标 题" prop="title">
        <Input v-model="articleForm.title" placeholder="Edit Your Article Title..."></Input>
      </FormItem>
      <FormItem label="摘 要" prop="summary">
        <Input v-model="articleForm.summary" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
               placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="分 类" prop="category">
        <Select v-model="articleForm.category" @on-change="getLabel">
          <Option v-for="item in categoryList" :value="item.id" :key="item.categoryName">
            {{ item.categoryName }}
          </Option>
        </Select>
      </FormItem>
      <FormItem v-if="labelStatus" label="标 签">
        <CheckboxGroup v-model="articleForm.label" @on-change="judgeLabel">
          <Checkbox v-for="item in labelList" :label="item.id" :key="item.id">
            <Tag :color="item.back">{{ item.labelName }}</Tag>
          </Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="封 面">
        <Upload
          ref="upload"
          type="drag"
          action="//jsonplaceholder.typicode.com/posts/"
          style="display: inline-block;width:58px;">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
          </div>
        </Upload>
      </FormItem>
      <Divider orientation="left">
        <p>文章 内容
          <small>编辑</small>
        </p>
      </Divider>
      <client-only>
        <i-editor v-model="content" placeholder="Your Article"></i-editor>
      </client-only>
      <div class="bl-text-center">
        <Button type="primary" @click="publishArticle('articleForm')">发 表</Button>
        <Button style="margin-left: 8px" @click="handleReset('articleForm')">取消编辑</Button>
      </div>
    </Form>
  </Card>
</template>

<script>
  export default {
    data() {
      const ValidateTitle = (rule, value, callback) => {
        if (value === '' || value.length < 0 || value.length > 20) {
          callback(new Error('标题长度为0~20位且不为空!'))
        } else {
          callback()
        }
      }
      const ValidateSummary = (rule, value, callback) => {
        if (value.length > 400 || value.length<0 || value === '') {
          callback(new Error('文章摘要长度0~400字以内!'))
        } else {
          callback()
        }
      }
      const ValidateCategory=(rule, value, callback)=>{
        (value ==='' || value ===undefined) ? callback('分类必选!') : callback()
      }
      return {
        //分类数据
        categoryList: [],
        //标签数据
        labelList: [],
        //标签数据
        labelStatus: false,
        // 文章内容数据
        content: '',
        //文章简介数据
        articleForm: {
          title: '',
          summary: '',
          category: '',
          label: [],
          image: ''
        },
        articleRuleValidate: {
          title: [
            {required: true, trigger: 'blur', validator: ValidateTitle}
          ],
          summary: [
            {required: true, trigger: 'blur', validator: ValidateSummary}
          ],
          category: [
            {required: true, trigger: 'blur', validator:ValidateCategory}
          ],
          label: [
            {required: true,trigger: 'blur'}
          ]
        }
      }
    },
    created() {
      // 加载分类数据
      this.getCategory()
    },
    methods: {
      // 加载分类数据
      getCategory() {
        let that = this
        that.$axios.get('/category/getCategory')
          .then(({data: {code, data}}) => code === 1 ? that.categoryList = data : that.$Message.error('获取数据失败!'))
          .catch(() => that.$Message.error('获取数据失败!'))
      },
      // 根据所选分类id加载标签
      getLabel(value) {
        let that = this
        //清空当前label中已存在的标签
        that.articleForm.label = []
        that.$axios.get('/label/getLabelByCategoryId/' + value).then(({data: {code, msg, data}}) => {
          if (code === 1) {
            that.labelList = data
            that.labelList.length > 0 ? that.labelStatus = true : that.labelStatus = false
            return
          }
          that.$Message.error('加载标签失败!')
        }).catch(() => {
          this.$Message.error('加载标签失败')
        })
      },
      // 判断多选标签是否超过指定长度
      judgeLabel(arr){
        if(arr.length>3 ){
          arr.length--
          this.$Message.warning('标签最多选择3个!')
        }
      },
      // 发表文章
      publishArticle(name){
        let that = this
        let form = that.$refs[name]
        form.validate((valid) => {
          if (valid) {
            if (that.content !=='') {
              that.$axios.post('/article/insArticle',{
                title:form.model.title,
                summary:form.model.summary,
                image:form.model.image,
                category:form.model.category,
                label:form.model.label,
                content:that.content
              }).then(({data:{code,msg}})=>{
                  if(code===1){
                    // 清空表单
                    that.$Message.success('发表成功,返回可查看!')
                    that.handleReset(name)
                    return
                  }
                  that.$Message.error('发表失败!')
                }).catch(()=> that.$Message.error('发表失败!'))
              return
            }
            that.$Message.error('文章内容不可为空!')
          } else {
            that.$Message.error('发表失败,存在必填项未选择!')
          }
        })
      },
      handleReset (name) {
        this.content = ''
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style lang="scss">
  .addArticle .ivu-form .ivu-form-item-label {
    text-align: center !important;
  }
</style>
