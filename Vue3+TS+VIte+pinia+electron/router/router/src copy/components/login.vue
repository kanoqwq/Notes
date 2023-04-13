<template>
    <div>
        <table>
            <thead>
                <th>品牌</th>
                <th>价格</th>
                <th>操作</th>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="item in data">
                    <th>{{ item.name }}</th>
                    <th>{{ item.price }}</th>
                    <th>
                        <button @click="toDetail(item)">详情</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { data } from './list.json'
import { LocationQueryRaw, useRouter, RouteParamsRaw } from 'vue-router'
const router = useRouter();
interface Item extends RouteParamsRaw {
    name: string;
    price: number;
    id: number;
}

const toDetail = (item: Item) => {
    router.push({
        name: 'Reg',
        // path: '/reg',
        params: {
            id: item.id
        }
        // query: item
    })
}
</script>

<style></style>