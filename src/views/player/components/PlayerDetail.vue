<template>
  <div>
    <el-form ref="form" :model="playerForm">
      <el-form-item prop="accountname" label="帐户名">
        <el-input v-model="playerForm.accountname"></el-input>
      </el-form-item>
      <el-form-item prop="nickname" label="昵称">
        <el-input v-model="playerForm.nickname"></el-input>
      </el-form-item>

      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :on-success="handleAvatarSuccess"
      >
        <img v-if="imageUrl" src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { defaultPlayerData, getPlayer, updatePlayer, createPlayer } from '@/api/players'
import { ElUploadInternalFileDetail, ElUploadInternalRawFile } from 'element-ui/types/upload'

@Component
export default class PlayerDetail extends Vue {
  @Prop({ default: false })
  isEdit!: Boolean

  playerForm = Object.assign({}, defaultPlayerData)

  loading = false

  imageUrl = ''

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

  beforeAvatarUpload(file: ElUploadInternalFileDetail) {
    const isLt1M = file.size / 1024 / 1024 < 1

    if (!isLt1M) {
      this.$message.error('上传图像大小不能超过1M')
    }
    return isLt1M
  }

  handleAvatarSuccess(resp: any, file: ElUploadInternalFileDetail) {
    this.imageUrl = URL.createObjectURL(file.raw)
    // todo avatar从resp中返回
    this.playerForm.avatar = file.name
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

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 26px;
  color: #8e939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
