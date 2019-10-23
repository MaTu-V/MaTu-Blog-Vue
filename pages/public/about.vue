<template>
  <div class="about">
    <Row>
      <Col span="24">
        <div class="title bl-text-center">
          <h1>码 - 图 ( 个人博客 )</h1>
          <p>发布于: 2019-10-16 · 上次更新: 10月前 (12-10)</p>
        </div>
        <div class="content">
          <p> 对于该博客的一些介绍：</p>

          <p><strong>1、建站意义：</strong>记录一些学习的笔记是最常见的博客形式，我也同样不例外，同样，我也希望能够做一些好的样例，来作为个人的技术积淀。</p>

          <p><strong>2、建站初衷：</strong>希望能坚持去记录以下自己的所学并做到持续更新，希望自己不只是三分热度。</p>

          <p><strong>3、网站服务：</strong>网站采用了SSR服务端渲染，可对爬虫等做一些方便，目前可能只适应于网页端的服务，陆续会向移动端兼容。</p>

          <p><strong>4、友链合作：</strong>作为刚入门的我，也希望多一些友链，如您愿意，可以找我申请，但是对于广告类，企业类，请勿申请，谢谢。</p>

          <p><strong>5、友情提示：</strong>如您申请，但为找到您的友链，请记得告知我，同样希望您做好本博链接：</p>

          <hr/>

          <p class="bl-text-black"><strong>6、个人简介：</strong></p>

          <p class="bl-text-black"><strong>姓名：</strong><strong>WangDong</strong></p>

          <p class="bl-text-black"><strong>网址：</strong><a href="https://matu.net.cn" target="_blank" class="href-link">https://matu.net.cn</a></p>

          <p class="bl-text-black"><strong>github链接：</strong><a href="https://github.com/MaTu-V" target="_blank" class="href-link">https://github.com/MaTu-V</a>
          </p>
          <p class="bl-text-black"><strong>自我介绍：</strong> <strong>When your dreams come alive you're unstoppable . Take a shot,chase the sun, find the
            beautiful ----歌曲/ Dream It Possible</strong></p>

        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
      layout: "public"
    }
</script>

<style lang="scss" scoped>
  .about {
    width: 100%;
    background: white;
    padding: 10px 30px;
    .title > h1 {
      padding: 15px 0;
    }
    .content {
      p {
        padding: 15px 0;
      }
    }
  }
</style>
