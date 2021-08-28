<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.keyword"
        style="width: 200px"
        clearable
        @keyup.enter.native="handleFilter"
      />
      <el-button
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        过滤
      </el-button>
    </div>

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

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
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
    limit: 5,
    keyword: null
  }

  created() {
    this.getList()
  }

  async getList() {
    this.listLoading = true
    const { data } = await getPlayers(this.listQuery)
    this.list = data.list
    this.total = data.total
    this.listLoading = false
  }

  handleFilter() {
    this.listQuery.page = 1
    this.getList()
  }
}
</script>

<style lang="scss" scoped>

</style>
