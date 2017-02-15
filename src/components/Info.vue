<template>
  <div class="github-sources">
  	<p><i class="fa fa-github" aria-hidden="true"></i>
  	<a href="https://github.com/actionsmile/blackbird">{{source}}</a></p>
  	<p><i class="fa fa-cog fa-spin fa-fw"></i>{{working}}</p>
  </div>
</template>

<script src="https://use.fontawesome.com/e7d12e4dd6.js"></script>
<script>
export default {
  name: 'info',
  data () {
    return {
      source: 'Source code',
      working: 'Still working on it'
    }
  }
}
</script>
