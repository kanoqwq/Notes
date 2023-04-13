<template>
    <el-card class="card">
        <el-form style="">
            <el-form-item label="账号/姓名：" style="margin: 0">
                <el-input autocomplete="off" style="width: 200px;" />
            </el-form-item>
        </el-form>
    </el-card>
    <el-card class="card">
        <div class="flex">
            <div>
                <el-icon :size=16 style="padding-right:10px;vertical-align: -15%;">
                    <Tickets />
                </el-icon>
                <span>数据列表</span>
            </div>
            <el-button type="primary" @click="addData">添加</el-button>
        </div>
    </el-card>
    <el-card class="card">
        <el-table :data="tableData" style="width: 100%" v-loading="loading">
            <el-table-column prop="username" label="账号" />
            <el-table-column prop="nickName" label="姓名" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column label="添加时间">
                <template #default="{ row }">
                    <span>{{ row.createTime && dayjs(row.createTime).format('YYYY/MM/DD HH:mm:ss') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="最后登录">
                <template #default="{ row }">
                    <span>{{ row.loginTime && dayjs(row.loginTime).format('YYYY/MM/DD HH:mm:ss') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="是否启用">
                <template #default="{ row }">
                    <el-switch v-model="row.status" :active-value="1" :inactive-value="0" @click="switchChange(row)"
                        :loading="row.loading" />
                </template>
            </el-table-column>
            <el-table-column label="操作" width="220px">
                <template #default="{ row }">
                    <el-button type="primary" @click="giveRoles(row)" :loading="row.btnLoading">分配角色</el-button>
                    <el-button type="warning" @click="edit(row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
    <!-- 修改 -->
    <adminDailog :visible="adminDailogVisible" @onclose="adminDailogVisible = false" :data="rowData" @action="updateForm">
    </adminDailog>
    <giveRole :visible="giveDailogVisible" @onclose="giveDailogVisible = false" :form="roleForm" @action="updateRoles">
    </giveRole>
</template>

<script setup lang='ts'>
import { Tickets } from '@element-plus/icons-vue'
import { ref, reactive, toRefs, onMounted } from 'vue'
import { getAdminList, getRoleListAll, getRoleListUser, updateUserRole } from '@/api/ums'
import dayjs from 'dayjs';
import adminDailog from './components/adminDailog.vue'
import giveRole from './components/giveRole.vue'
import { updateAdmin } from '@/api/ums'
import { ElMessage } from 'element-plus';

const state = reactive({
    tableData: new Array<AdminList>()
})
const giveDailogVisible = ref(false)
let rowData = {} as AdminList
const { tableData } = toRefs(state)
const adminDailogVisible = ref<boolean>(false)
const loading = ref(true)
const btnLoading = ref(false)
const roleForm = reactive({
    userRoles: {} as UserRole[],
    roleList: [] as UserRole[],
    adminId: 0
})

const loadList = () => {
    loading.value = true
    //请求之前清空老数据
    state.tableData.length = 0
    getAdminList({
        keyword: '',
        pageSize: 100,
        pageNum: 1
    }).then(
        res => {
            if (res.data.code == 200) {
                console.log(res.data);
                let { list } = res.data.data
                //给每个选项都添加一个loading属性
                list.map((item) => { item['loading'] = false, item['btnLoading'] = false })
                list.forEach(item => {
                    state.tableData.push(item)
                })
                console.log(state.tableData);
                loading.value = false

            } else {
                throw new Error('err')
            }
        }
    ).catch(e => {
        ElMessage({
            type: "error",
            message: "获取用户数据失败！"
        })
    })
}
onMounted(() => {
    loadList()
})
const edit = (data: AdminList) => {
    //打开对话框
    adminDailogVisible.value = true
    rowData = data
}
const updateForm = async (formData: AdminList) => {
    //请求接口
    updateOrAdd(formData)
}
const switchChange = async (formData: AdminList) => {
    formData.loading = true
    try {
        let res = await updateOrAdd(formData)
        if (res) {
            formData.loading = false
        } else {
            throw new Error('err')
        }
    } catch (e) {
        ElMessage({
            type: "error",
            message: "切换失败！"
        })
    }
}

//添加/修改的请求
const updateOrAdd = async (data: AdminList) => {
    try {
        let res = await updateAdmin(data.id, data)
        if (res.data.code === 200) {
            ElMessage({
                type: 'success',
                message: data.id ? '修改成功！' : "添加成功！"
            })
            loadList()
            console.log(res.data);
            return true
        } else {
            throw new Error('err')
        }
    } catch (e) {
        ElMessage({
            type: "error",
            message: data.id ? "修改失败！" : '添加失败！'
        })
    }
}
//添加数据
const addData = () => {
    //打开对话框
    adminDailogVisible.value = true
    rowData = {} as AdminList
}

//分配角色
const giveRoles = async (data: UserRole) => {
    //发送请求获取全部角色列表
    try {
        data.btnLoading = true
        let res = await getRoleListAll()
        let res2 = await getRoleListUser(data.id)
        if (res.status == 200 && res2.status == 200) {
            roleForm.roleList = res.data.data
            roleForm.userRoles = res2.data.data
            roleForm.adminId = data.id
            giveDailogVisible.value = true
            console.log('opened');
            data.btnLoading = false
        } else {
            throw new Error('err')
        }
    } catch (e) {
        ElMessage({
            type: "error",
            message: "获取规则列表失败！"
        })
    }
}

//执行分配角色请求
const updateRoles = async (data: userRoleUpdateParams) => {
    try {
        // console.log(data);
        const res = await updateUserRole(data)
        console.log(res);
        if (res.status == 200) {
            ElMessage({
                type: 'success',
                message: '修改成功！'
            })
        } else {
            throw new Error('err')
        }
    } catch (e) {
        ElMessage({
            type: "error",
            message: "修改失败！"
        })
    }

}
</script>

<style scoped lang="less">
.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card {
    margin: 10px 20px;
}
</style>