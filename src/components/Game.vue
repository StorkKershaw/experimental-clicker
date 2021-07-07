<template>
  <div class="border game-div">
    <b-button
      v-show="game.showPlay"
      variant="outline-primary"
      class="play-button"
      @click="playGame"
    >
      <b-icon-play />
      Play Game (音が鳴ります)
    </b-button>

    <b-table
      v-show="game.showResult"
      class="text-center result-table"
      small
      :fields="results.fields"
      :items="results.items"
    >
      <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <template #cell(reaction)="data">
        {{ data.item.clicked - data.item.shown || "" }}
      </template>
    </b-table>

    <b-button
      v-show="game.showTarget"
      variant="outline-primary"
      class="target-button"
      :style="game.targetStyle"
      size="lg"
      @click="handleClick"
    >
      <b-icon-music-note-beamed />
    </b-button>
  </div>
</template>

<script>
import {defineComponent, reactive} from '@vue/composition-api';
import {actions} from '../configs/actions';
import {sleep} from '../libs/sleep';

import soundFile from '../assets/coin04.mp3';

import {
  BButton,
  BIconPlay,
  BIconMusicNoteBeamed,
  BTable,
} from 'bootstrap-vue';

export default defineComponent({
  components: {
    BButton,
    BIconPlay,
    BIconMusicNoteBeamed,
    BTable,
  },
  setup() {
    const game = reactive({
      showPlay: true,
      showResult: true,
      showTarget: false,

      targetStyle: {},
    });

    const results = reactive({
      items: [{}],
      fields: [
        {key: 'index', label: '#'},
        {key: 'reaction', label: 'Reaction Time [ms]'},
        {key: 'duration', label: 'Time Limit [ms]'},
      ],
    });

    const playGame = async () => {
      _sound.play();
      _initialize();
      await _run();
      _finalize();
    };

    const handleClick = (event) => {
      _sound.play();
      const length = results.items.length;
      results.items[length - 1].clicked = Date.now();
      game.showTarget = false;
    };

    // private

    const _sound = new Audio(soundFile);
    _sound.volume = 0.12;

    const _initialize = () => {
      game.showPlay = false;
      game.showResult = false;
      results.items = [];
    };

    const _finalize = () => {
      game.showPlay = true;
      game.showResult = true;
      game.showTarget = false;
      game.targetStyle = {};
    };

    const _run = async () => {
      for await (const action of actions) {
        await _execute(action);
      }
    };

    const _execute = async ({top, left, duration}) => {
      if (top && left) {
        const {targetStyle} = game;
        const style = {...targetStyle, top, left};
        results.items.push({shown: Date.now(), clicked: NaN, duration});
        game.showTarget = true;
        game.targetStyle = style;
      }
      await sleep(duration);
    };

    return {
      game,
      results,
      playGame,
      handleClick,
    };
  },
});
</script>

<style scoped>
.game-div {
  height: 80vh;
  width: 60vw;
  margin: 5vh auto;
}

.play-button {
  position: fixed;
  top: 20%;
  left: 50%;
  width: 230px;
  margin-left: -115px;
  height: 40px;
  margin-top: -20px;
}

.target-button {
  position: fixed;
  width: 60px;
  margin-left: -30px;
  height: 50px;
  margin-top: -25px;
}

.result-table {
  margin: 30% auto 0 auto;
  width: 50%;
}
</style>
