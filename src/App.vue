<template>
  <game />
</template>

<script>
import {defineComponent} from '@vue/composition-api';

import Game from './components/Game';

export default defineComponent({
  components: {
    Game,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, "Yu Gothic Medium", "游ゴシック Medium",
    YuGothic, "游ゴシック体", "ヒラギノ角ゴ Pro W3", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
