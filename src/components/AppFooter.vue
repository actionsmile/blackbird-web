<template>
  <span>
    <p>Copyright &copy; <a href="https://github.com/actionsmile">Aziz Zainutdin</a><br/>2015&nbsp;&mdash; {{now}}</p>
</span>
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
p {
  font-size: .7em;
  margin: 65px auto 0;
	color: rgba(170, 170, 170, .2);
	text-shadow: 0 1px 0 rgba(100, 100, 100, .2);
  text-align: center;
  position: fixed;
  bottom: .7em;
  width: 100%;
}
p a{
  text-decoration: none;
	margin-left: .1em;
	border-bottom: 1px solid;
}

a:visited {
  color: #7e7e7e;
	text-align: center;
}
</style>
