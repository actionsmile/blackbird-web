<template>
  <div>
    Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2015 <i class="fa fa-minus" aria-hidden="true"></i> {{now}} <a href="https://github.com/actionsmile">Aziz Zainutdin</a>
  </div>
</template>

<script>
export default {
  computed: {
    now: function () {
      return new Date().getFullYear().toString()
    }
  }
}
</script>

<style scoped>
div {
  color: rgba(170, 170, 170, .2);
  font-size: .7em;
  bottom: 0;
  position: fixed;
  min-width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, .2);
}

div a {
	text-shadow: 0 1px 0 rgba(100, 100, 100, .2);
  text-decoration: none;
	border-bottom: 1px solid;
}
a {
  color: #7e7e7e;
}
</style>
