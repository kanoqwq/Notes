<template>
    <el-card>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon class="demo-ruleForm">
            <el-form-item prop="username">
                <el-input v-model="ruleForm.username" type="username" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">Submit</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs, Ref, onMounted } from 'vue'
import { FormInstance, FormRules, ElMessage } from 'element-plus'
import { Login, getAdminInfo } from '@/api/Login'
import { LoginStore } from "@/store/";
import { useRouter } from 'vue-router'
const store = LoginStore();
const router = useRouter()
//表单实例
let ruleFormRef = ref<FormInstance>()
//表单数据结构
const Form = reactive({
    ruleForm: {
        username: 'admin',
        password: '123456'
    }
})
const checkPasswd = (rule: any, value: any, cb: Function) => {
    const pwdPattern = /^.*(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (!pwdPattern.test(value)) {
        cb(new Error('密码必须包含大小写字母及数字'))
    } else {
        cb()
    }
}
//验证器结构
const rules = reactive<FormRules>({
    username: [
        { required: true, min: 1, max: 9, trigger: ['change', 'blur'], message: '用户名必须大于1位小于10位' },
    ],
    password: [
        { required: true, min: 6, trigger: ['change', 'blur'], message: '密码不小于6位数' },
        // { validator: checkPasswd, trigger: ['change', 'blur'] }
    ]
})

//响应式解构
let { ruleForm } = toRefs(Form)

//提交表单
// ChatGPT generated
// const submitForm = async () => {
//     try {
//         const { username, password } = ruleForm.value;
//         await ruleFormRef.value?.validate();
//         const [res, adminInfo] = await Promise.all([
//             Login({ username, password }),
//             getAdminInfo(),
//         ]);
//         //存储token js-cookie
//         const token = res.data.data.tokenHead + res.data.data.token;
//         console.log(token);

//         //获取用户信息
//         store.addToken(token);
//         store.addAdminInfo(adminInfo.data.data);
//         // 跳转
//         router.push('/homepage')
//     } catch (err: any) {
//         err.message && ElMessage({
//             type: "error",
//             message: err.message,
//         });
//     }
// };

// 我写的shit
const submitForm = () => {
    ruleFormRef.value?.validate(async (vaild) => {
        if (vaild) {
            try {
                const res = await Login({
                    username: ruleForm.value.username,
                    password: ruleForm.value.password
                }).then((res) => {
                    ElMessage({
                        type: 'success',
                        message: '登录成功'
                    })
                    return res
                })

                //存储token js-cookie
                const result: ResResult<LoginApiRes> = res.data
                const token = result.data.tokenHead + result.data.token
                store.addToken(token)

                //获取用户信息
                const adminInfo = await getAdminInfo()
                store.addAdminInfo(adminInfo.data.data)
                // 跳转
                router.push('/index')
            } catch (err: any) {
                ElMessage({
                    type: 'error',
                    message: err.message
                })
            }
        }
    })
}
</script>

<style scoped></style>