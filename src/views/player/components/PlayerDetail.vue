<template>
  <div>
    <el-form ref="form" :model="playerForm">
      <el-form-item prop="accountname" label="帐户名">
        <el-input v-model="playerForm.accountname"></el-input>
      </el-form-item>
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="playerForm.nickname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { defaultPlayerData, getPlayer, updatePlayer, createPlayer } from '@/api/players'

@Component
export default class PlayerDetail extends Vue {
  @Prop({ default: false })
  isEdit!: Boolean

  playerForm = Object.assign({}, defaultPlayerData)

  loading = false

  create() {
    if (this.isEdit) {
      const id = this.$route.params && this.$route.params.id
      this.fetchData(parseInt(id))
    }
  }

  async fetchData(id: number) {
    try {
      const { data } = await getPlayer(id)
      this.playerForm = data.player
    } catch (error) {
      console.error(error)
    }
  }

  async submitForm() {
    this.loading = true
    try {
      if (this.isEdit) {
        await updatePlayer(this.playerForm.id, this.playerForm)
      } else {
        await createPlayer(this.playerForm)
      }
      this.$notify({
        title: '操作成功',
        message: '新增玩家成功',
        type: 'success',
        duration: 2000
      })
      this.loading = false
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
