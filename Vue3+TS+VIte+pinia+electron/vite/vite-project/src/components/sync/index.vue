<template>
        <div class="sync">
            <div class="sync-content">
                <div class="avatar"><img :src="data.url"></div>
                <div class="sync-pop">
                    <div>{{ data.name }}</div>
                </div>
            </div>
            <hr>
            <div class="sync-comment">
                <p>{{ data.desc }}</p>
            </div>
        </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { axios } from '../../server/axios';

interface Data {
    data: {
        name: string,
        age: number,
        url: string,
        desc: string
    }
}
//顶层await
const { data } = await axios.get<Data>('./data.json', 2000)
console.log(data);

</script>

<style scoped lang="less">
.sync {
    margin: 20px 0;

    &-content {
        .avatar {
            display: inline-block;
            vertical-align: middle;

            img {
                width: 50px;
                border-radius: 50%;
            }

        }
    }

    &-pop {
        display: inline-block;
        margin-left: 10px;
        font-size: 14px;
    }

    &-comment {
        font-weight: bold;
        padding-left: 5px;
    }

}
</style>