<template>
  <div id="app">
    <slot></slot>
  </div>
</template>

<style>
html body {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
}

body {
  background-color: #ccc;
}

#app {
  color:#fff;
	font-family: Titillium Web;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  pading-top: 60px;
  height: 100%;
}
</style>
