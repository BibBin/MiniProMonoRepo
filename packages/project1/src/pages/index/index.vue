<template>
  <view class="index">
    <NumberDisplay />
  </view>
</template>

<script>
import { NumberDisplay } from '@miniprogrammonorepo/components';

export default {
  name: 'Index',
  components: {
    NumberDisplay
  }
};
</script>

<style>
.index {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
