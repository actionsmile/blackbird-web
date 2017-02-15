<template>
  <div class="blackbird-background">
    <div id="app">
      <div class="title-logo"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}

html body {
	margin: 0;
	padding: 0;
	top: 0;
	left: 0;
}

body {
	background-color: #ccc;
}

.blackbird-background {
  background: url(./assets/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  top: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.title-logo {
	margin: 50px auto 0;
	width: 214px;
	height: 81px;
	background: url(./assets/header.png) no-repeat;
}

.github-sources {
	margin: 40px 0;
	text-align: center;;
}

.github-sources  p, a {
	font-size: 18pt;
	color:#fff;
	font-family: Titillium Web;
	text-transform: uppercase;
}

.github-sources a {
	text-decoration: none;
	margin-left: .1em;
	border-bottom: 1px solid;
}

</style>
