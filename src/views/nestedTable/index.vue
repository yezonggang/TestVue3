<template>
  <div class="div-form">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="formInline.user" clearable />
      </el-form-item>
      <el-form-item label="股票代码">
        <el-select v-model="formInline.region" clearable>
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="上架时间">
        <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>

  <div class="div-table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="id" label="Id" width="120" />
      <el-table-column prop="date" label="入库时间" width="150" />
      <el-table-column prop="name" label="名称" width="120" />
      <el-table-column prop="address" label="地址" width="120" />
      <el-table-column prop="tag" label="标签" width="120" />
      <el-table-column prop="desc" label="描述" width="400" />
      <el-table-column prop="stock" label="股票代码" width="100" />
      <el-table-column prop="zip" label="缩写" width="120" />
      <el-table-column prop="price" label="价格" width="120" />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick">
            删除
          </el-button>
          <el-button link type="primary" size="small" @click="handleEdit">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="pagination-container">
    <div class="demo-pagination-block">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :size="size"
        :disabled="false"
        :background="false"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>

    <!-- 编辑对话框 -->
    <el-dialog v-model="dialogVisible" title="编辑信息">
    <el-form :model="editForm" label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="editForm.name" />
      </el-form-item>
      <el-form-item label="股票代码">
        <el-input v-model="editForm.stock" />
      </el-form-item>
      <el-form-item label="上架时间">
        <el-date-picker v-model="editForm.date" type="date" placeholder="Pick a date" />
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="editForm.address" />
      </el-form-item>
      <el-form-item label="标签">
        <el-input v-model="editForm.tag" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="editForm.desc" />
      </el-form-item>
      <el-form-item label="缩写">
        <el-input v-model="editForm.zip" />
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="editForm.price" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { ComponentSize } from 'element-plus'
import { type nestedItem, getNestedList } from '@/api/nestedTable'

const currentPage = ref(1)
const pageSize = ref(20)
const size = ref<ComponentSize>('default')
const tableData = ref<nestedItem[]>([])
const total = ref(0)
const dialogVisible = ref(false)

const queryParams = reactive({
  pageSize: pageSize.value,
  currentPage: currentPage.value,
  name: '',
  desc: '',
  date: ''
})
const editForm = reactive({
  id: '',
  date: '',
  name: '',
  address: '',
  tag: '',
  desc: '',
  stock: '',
  zip: '',
  price: ''
})
const fetchMallList = () => {
  queryParams.pageSize = pageSize.value
  queryParams.currentPage = currentPage.value
  queryParams.name = formInline.user
  queryParams.desc = formInline.region
  queryParams.date = formInline.date

  getNestedList(queryParams).then((res: any) => {
    if (res.code === 20000) {
      console.log('success....' + res.data.total)
      tableData.value = res.data.mall
      total.value = res.data.total
    }
  })
}
const handleEdit = (row: nestedItem) => {
  Object.assign(editForm, row)
  dialogVisible.value = true
}

const handleSubmit = () => {
  // updateMallItem(editForm).then((res: any) => {
  //   if (res.code === 20000) {
  //     console.log('update success')
      dialogVisible.value = false
  //     fetchMallList()
  //   }
  // })
  console.log('editForm: ' + editForm)
}

onMounted(() => {
  fetchMallList()
})

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
  fetchMallList()
}

const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  fetchMallList()
}

const formInline = reactive({
  user: '',
  region: '',
  date: ''
})

const onSubmit = () => {
  console.log('submit!')
  fetchMallList()
}

const handleClick = () => {
  console.log('click')
}
</script>

<style scoped lang="scss">
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}

.div-form {
  margin-bottom: 20px;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
}

.demo-pagination-block {
  margin-top: 25px;
}
</style>