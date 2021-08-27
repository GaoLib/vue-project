<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column label="ID" align="center">
        <template v-slot="{row}">{{ row.id }}</template>
      </el-table-column>
      <el-table-column label="账户名" align="center" prop="accountname" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getPlayers } from '@/api/players'
import { Player } from '@/api/types'
import Pagination from '@/components/Pagination/index.vue'

@Component({
  name: 'PlayerList',
  components: {
    Pagination
  }
})
export default class List extends Vue {
  // 玩家列表
  list: Player[] = []
  // 加载状态
  listLoading = false
  // 总数量
  total = 0
  // 查询条件
  listQuery = {
    page: 1,
    limit: 10
  }

  created() {
    this.getList()
  }

  async getList() {
    this.listLoading = true
    const { data } = await getPlayers({})
    this.list = data.list
    this.listLoading = false
  }
}
</script>

<style lang="scss" scoped>

</style>
