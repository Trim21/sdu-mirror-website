<template>
  <div id="navdar">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div>
          <ul class="nav navbar-nav navbar-left">
            <li>
              <router-link to="/">山东大学开源镜像站</router-link>
              <!--<router-link to="/status">镜像列表</router-link>-->
            </li>
            <li>
              <router-link to="/confgen">使用说明</router-link>
            </li>
            <li>
              <router-link to="/iso">安装镜像下载</router-link>
              <!--<a href="/ubuntu-releases/">安装镜像</a>-->
            </li>
            <li>
              <router-link to="/about">about</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navdar',
    data() {
      return {};
    },
  };

</script>

<style scoped>
  /*.navbar {
    background: #20A0FF
  }*/
  /*a {
    color: #FFFFFF
  }*/
</style>