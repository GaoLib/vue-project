<template>
  <div>
    <player-detail :is-edit="true"></player-detail>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PlayerDetail from './components/PlayerDetail.vue'

@Component({
  components: {
    PlayerDetail
  }
})
export default class Create extends Vue {
}
</script>

<style lang="scss" scoped>

</style>
