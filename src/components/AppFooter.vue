<template>
  <span>
    <p>Copyright <a href="https://github.com/actionsmile">Aziz Zainutdin</a></p>
    <p>2015 — {{now}}</p>
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
span {
	border: 1px solid red;
  margin-bottom: -1em;
}

span p {
  color: rgba(170, 170, 170, .2);
  font-size: .7em;
}

p a {
	text-shadow: 0 1px 0 rgba(100, 100, 100, .2);
  text-decoration: none;
	border-bottom: 1px solid;
}

a:visited {
  color: #7e7e7e;
	text-align: center;
}
</style>
