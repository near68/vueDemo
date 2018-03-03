<template>
  <el-row>
    姓名：{{info.name}}
    <el-input v-model="info.name" placeholder="请输入姓名"></el-input>
    年龄：{{info.age}}
    <el-input v-model="info.age" placeholder="请输入年龄"></el-input>
    性别：{{info.sex}}
    <el-select v-model="info.sex" placeholder="请选择">
      <el-option v-for="item in options" :key="item" :value="item"></el-option><!-- 这里的key官方推荐在v-for时使用，不然会警告，但不影响使用 -->
    </el-select>
    <template>
      <el-table :data="tableData">
        <el-table-column label="姓名" align="left">
          <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="年龄"  align="left">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">{{ scope.row.age }}</div>
          </template>
        </el-table-column>
        <el-table-column label="性别" align="left">
          <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">{{ scope.row.sex }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="left">
          <template slot-scope="scope">
            <el-button size="mini"  type="danger" @click="Delete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </el-row>
</template>
<script>
export default {
  name: "NewContact",
  data(){
    return {
      info: {
        name: '',
        age: null,
        sex: ''
      },
      options: [
        '女','男','保密'
      ],
      tableData:[
        {name: 'Leo', age: 12, sex: 'men'},
        {name: 'Lei', age: 112, sex: 'men'}
      ]
    }
  }
}
</script>
<style>

</style>
