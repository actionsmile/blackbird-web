<template>
  <div>
    <h1>
      Lightweight AS3 framework, that allows you to communicate with server-side app by <a :href="mqtt.site"><abbr :title="mqtt.description">MQTT</abbr></a> protocol.
    </h1>
    <p>
      This framework will help your as3 applications to communicate with server by <abbr :title="mqtt.description">MQTT</abbr> protocol,
      for instance in your smart-home remote control (try to use RaspberryPI/Arduino with <a :href="openhab.site">OpenHAB</a>).
    </p>
    <h2>Easy. Fast. Simple</h2>
    <ol>
      <li>
        <a class="btn btn-info" href="https://github.com/actionsmile/blackbird">
          <i class="fa fa-github" aria-hidden="true"></i> {{button.fork}}
        </a>
      </li>
      <li>
        <a class="btn btn-success" href="https://github.com/actionsmile/blackbird/archive/master.zip">
          <i class="fa fa-file-archive-o" aria-hidden="true"></i> {{button.zip}}<slot name="version"></slot>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'info',
  data: function () {
    return {
      button: {
        fork: 'Fork on GitHub',
        zip: 'Download zip-file'
      },
      mqtt: {
        site: 'http://www.mqtt.org',
        description: 'MQ Telemetry Transport'
      },
      openhab: {
        site: 'http://www.openhab.org'
      }
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 5%;
}

ol {
  margin-top: 30px;
  padding: 0;
  list-style: none;
}

li {
  padding-top: 10px;
}

h1 {
  font-size: 2em;
}

h1, p {
  padding: 2% 5%;
}

abbr {
  text-decoration: none;
  cursor: pointer;
}

a {
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid #7e7e7e;
}
</style>
