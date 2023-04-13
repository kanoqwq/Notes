<template>
    <div class="login">
        <el-card class="box-card">
            <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline">
                <el-form-item label="账号：" prop="user">
                    <el-input v-model="formInline.user" />
                </el-form-item>
                <el-form-item label="密码：" prop="password">
                    <el-input type="password" v-model="formInline.password">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" class="loginbtn">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import axios from 'axios'
const route = useRoute()
interface Form {
    user: string,
    password: string
}
const rules = reactive({
    user: [{
        required: true,
        message: '用户名不能为空',
        // trigger: 'change'
    }],
    password: [{
        required: true,
        message: '密码不能为空',
        // trigger: 'change'
    }]
})
const router = useRouter()
const formInline = reactive<Form>({
    user: '',
    password: '',
})

const form = ref<FormInstance>()

const onSubmit = () => {
    console.log(form);
    form.value?.validate((validate) => {
        if (validate) {
            initRouter()
        } else {
            ElMessage.error('请输入完整的用户名或密码')
        }
    })
}
const initRouter = async () => {
    const res = await axios.get('http://localhost:8989/login', { params: formInline })
    res.data.route.forEach((val: any) => {
        router.addRoute({
            path: val.path,
            name: val.name,
            component: () => import('../views/' + val.component)
        })
    })
    console.log(router.getRoutes())
    router.push('/index')
    localStorage.setItem('login', '1')
    // console.log(res);
}
</script>

<style scoped lang="less">
.login {
    // height: 2000px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>