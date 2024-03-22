<template>
  <a-config-provider
      :theme="{
      token: {
        // colorPrimary: '#00b96b',
      },
    }"
  >
    <a-button >你好</a-button>
    <HelloWorld></HelloWorld>
  </a-config-provider>
</template>

<script>
export default {
  name: 'App',
};
</script>