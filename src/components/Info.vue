<template>
  <div class="github-sources">
  	<p><i class="fa fa-github" aria-hidden="true"></i>
  	<a href="https://github.com/actionsmile/blackbird">{{source}}</a></p>
  	<p><i class="fa fa-cog fa-spin fa-fw"></i>{{working}}</p>
  </div>
</template>

<script>
export default {
  name: 'info',
  data: function () {
    return {
      source: 'Source code',
      working: 'Still working on it'
    }
  }
}
</script>

<style scoped>

.github-sources {
	margin: 40px 0;
	text-align: center;
  padding-right: 15px;
}

.github-sources  p, a {
	font-size: 18pt;
	text-transform: uppercase;
}

a:visited {
  color: #7e7e7e;
	text-align: center;
}

.github-sources a {
	text-decoration: none;
	margin-left: .1em;
	border-bottom: 1px solid;
}
</style>
