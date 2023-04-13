<template>
    <!-- 对于props，不能使用v-model，可以使用model-value -->
    <!-- 如果非要使用v-model的话，就需要设置一个新变量，并且使用watch监听prop的变动，以便及时赋值给新变量 -->
    <el-dialog :model-value="visible" title="分配角色" :draggable="false" :before-close="beforeClose">
        <el-form :model="formData">
            <el-form-item label="账号:" :label-width="formLabelWidth">
                <el-input v-model="formData.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="姓名:" :label-width="formLabelWidth">
                <el-input v-model="formData.nickName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="邮箱:" :label-width="formLabelWidth">
                <el-input v-model="formData.email" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码:" :label-width="formLabelWidth">
                <el-input type="password" show-password v-model="formData.password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="备注:" :label-width="formLabelWidth">
                <el-input type="textarea" :rows="2" show-password v-model="formData.note" autocomplete="off" />
            </el-form-item>
            <el-form-item :label-width="formLabelWidth">
                <el-radio-group v-model="formData.status">
                    <el-radio :label="1" size="large">启用</el-radio>
                    <el-radio :label="0" size="large">禁用</el-radio>
                </el-radio-group>
            </el-form-item>
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
import { ref, reactive, watch, toRaw } from 'vue'
const props = defineProps<{
    visible: boolean,
    data: AdminList
}>()
const emit = defineEmits<{
    (event: 'onclose'): void,
    (event: 'action', formData: AdminList): Promise<void>
}>()
let formData: AdminList = reactive({} as AdminList)

//监听visible变化，只要一显示就拿取prop.data的内容
watch(() => props.visible, () => {
    // 需要一个变量去切断和props中data的联系（因为这里我们只需要单向传值）
    formData = reactive({ ...props.data })
    //清除一下passwd
    formData.password = ''
})
const formLabelWidth = '140px'
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
    emit('action', formData)
    close()
}
</script>

<style></style>