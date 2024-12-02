<template>
    <div class="div-form">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="名称">
      <el-input v-model="formInline.user" clearable />
    </el-form-item>
    <el-form-item label="股票代码">
      <el-select
        v-model="formInline.region"
        clearable
      >
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="上架时间">
      <el-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
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
        <el-button link type="primary" size="small">编辑</el-button>
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
      :total=total
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</div>
    </template>

<script lang="ts" setup>  
import { reactive,ref,onMounted } from 'vue'
import type { ComponentSize } from 'element-plus'
import { type mallList,getMallList } from '@/api/mall'; 
const currentPage = ref(1)
const pageSize = ref(10)
const size = ref<ComponentSize>('default')
const tableData =ref<mallList[]>([]);
const total =ref(0)

onMounted(()=>{
    getMallList(queryParams).then((res:any) => {
        if(res.code==20000){
            console.log("success...."+res.data.total)
            tableData.value=res.data.mall
            total.value =res.data.total
        }
    })
})



const queryParams = reactive({
    pageSize:10,
    currentPage:1,
    name:'',
    desc:'',
    date:''
})



const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
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