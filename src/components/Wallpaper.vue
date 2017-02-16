<template>
  <div class="blackbird-background">
    <slot></slot>
  </div>
</template>

<style>
.blackbird-background {
  background: url(./../assets/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  min-height: 100%;
  height: auto !important;
  height: 100%;
  position: absolute;
}
</style>
