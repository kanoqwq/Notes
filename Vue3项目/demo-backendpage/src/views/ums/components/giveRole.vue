<template>
    <!-- 对于props，不能使用v-model，可以使用model-value -->
    <!-- 如果非要使用v-model的话，就需要设置一个新变量，并且使用watch监听prop的变动，以便及时赋值给新变量 -->
    <el-dialog :model-value="visible" title="分配角色" :draggable="false" :before-close="beforeClose">
        <!-- 这里不套一个form会报无限渲染的警告，暂时不知道为什么 -->
        <el-form :model="form">
            <el-select v-model="selectedData" multiple placeholder="选择角色" style="width: 100%">
                <el-option v-for="item in form.roleList" :key="item.id" :label="item.name" :value="item.id" />
            </el-select>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="close()">取消</el-button>
                <el-button type="primary" @click="confirmDailog()">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang='ts'>
import { reactive, ref, watch } from 'vue'
const props = defineProps<{
    visible: boolean,
    form: { userRoles: UserRole[], roleList: UserRole[], adminId: number }
}>()
const emit = defineEmits<{
    (event: 'onclose'): void,
    (event: 'action', formData: userRoleUpdateParams): Promise<void>
}>()
let formData: AdminList = reactive({} as AdminList)
let ruleData = [] as UserRole[]
let selectedData = ref<number[]>([])
watch(() => props.form.userRoles, () => {
    selectedData.value.length = 0
    //组成一个里面只有id的数组
    props.form.userRoles.forEach(item => {
        selectedData.value.push(item.id)
    })
})
watch(() => props.form, () => {
    // 需要一个变量去切断和props中data的联系（因为这里我们只需要单向传值）
    // formData = reactive({ ...props.form })
    console.log(props.form);

})

//关闭方法（执行emit）
const close = () => {
    emit('onclose')
}

//弹框被关闭前
const beforeClose = (done: Function) => {
    close()
    done()
}
//确定按钮点击
const confirmDailog = () => {
    // console.log('确定');
    //发送请求
    emit('action', {
        adminId: props.form.adminId,
        roleIds: selectedData.value
    })
    close()
}
//当选择框被点击后
const selectOpen = async (val: boolean) => {
    if (val) {
        // let res = await getRoleListAll()
        // ruleData.value = res.data.data as RoleList[]
        // console.log(ruleData);
        // console.log('opened');

    }
}
</script>

<style></style>