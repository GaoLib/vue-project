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

      <el-button
        type="success"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        新增
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
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <router-link :to="'/players/edit/' + scope.row.id">
            <el-button type="primary" icon="el-icon-edit">更新</el-button>
          </router-link>
          <el-button type="danger" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
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
import { getPlayers, deletePlayer } from '@/api/players'
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

  handleCreate() {
    this.$router.push('/players/create')
  }

  handleDelete(scope: any) {
    const { $index, row } = scope
    this.$confirm('确定删除玩家信息吗?', '警告', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async() => {
      console.log(row.id)
      await deletePlayer(row.id)
      this.list.splice($index, 1)
      this.$message({
        type: 'success',
        message: '删除成功！'
      })
    }).catch(err => {
      console.error(err)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
