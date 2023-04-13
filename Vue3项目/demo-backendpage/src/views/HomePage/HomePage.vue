<template>
    <div class="homepage">
        <div class="homepage_header">
            <div class="left">
                <h2 class="title">测试用管理平台</h2>
                <el-button text class="menu-btn" @click="isCollapse = !isCollapse">
                    <el-icon size="large">
                        <Menu />
                    </el-icon>
                </el-button>
                <el-button type="primary" @click="clearStorage()">清除本地存储</el-button>
            </div>
            <div class="right">
                admin
            </div>
        </div>
        <div class="homepage_content">
            <div class="homepage_menu" style="overflow-y: auto">
                <el-menu :collapse="isCollapse" :unique-opened="true" :router="true" active-text-color="#ffd04b"
                    background-color="#545c64" default-active="2" class="el_menu" @open="" @close="">
                    <el-sub-menu v-for="item in menus" :index="item.id.toString()">
                        <template #title>
                            <el-icon size="large">
                                <Menu />
                            </el-icon>
                            <span class="menu_title">{{ item.title }}</span>
                        </template>
                        <el-menu-item :index="'/' + item.name + '/' + subItem.name" v-for="subItem in item.children"
                            v-show="subItem.hidden == 0">{{
                                subItem.title
                            }}</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
            <div class="homepage_inner_content"><router-view></router-view></div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted, computed } from 'vue'
import { homePageStore } from '@/store/'
import { clearToken } from '@/utils/token'
import { Menu,ChatDotSquare } from '@element-plus/icons-vue'
const store = homePageStore()
//使用计算属性
let menus = computed(() => store.getMenus)

const isCollapse = ref(false)


const clearStorage = () => {
    localStorage.removeItem('menu')
    localStorage.removeItem('adminInfo')
    clearToken()
    location.reload()
}
</script>

<style scoped lang="less">
.menu_title {
    padding-right: 80px;
}

.el_menu {
    height: 100%;
    overflow: hidden;
}

:deep(.el-sub-menu__title),
:deep(.el-menu-item) {
    color: #f5f5f5;
}

.homepage {
    position: relative;
    height: 100%;
    min-width: 500px;
    display: flex;
    flex-direction: column;

    &_header {
        height: 70px;
        display: flex;
        overflow: hidden;
        background-color: skyblue;
        justify-content: space-between;
        align-items: center;

        .left {
            display: flex;
            align-items: center;
            box-sizing: border-box;

            .title {
                margin: 0 15px;
                color: #f5f5f5;
            }

            .menu-btn {
                color: #f5f5f5;
                width: 20px;
                height: 100%;
            }

            .menu-btn:active,
            .menu-btn:focus,
            .menu-btn:hover {
                background-color: rgba(0, 0, 0, .1);
            }
        }

    }



    &_content {
        display: flex;
        flex: 1;
        height: 90%;

        .homepage_menu {
            // position: absolute;
            // top: 70px;
            // left: 0;
            // bottom: 0;
            // width: 250px;
            background-color: #545C64;
        }

        .homepage_inner_content {
            // position: absolute;
            overflow: auto;
            flex: 1;
            width: 100%;
            // background-color: pink;
            background-color: #f5f5f5;
        }
    }
}
</style>