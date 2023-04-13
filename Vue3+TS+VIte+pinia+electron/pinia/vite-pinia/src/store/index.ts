//仓库文件
import { defineStore } from 'pinia';
import { Names } from './store-name'
import api from '../api/api.js'
export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            current: 1,
            name: 'kano',
            setuUrl: ''
        }
    },
    // computed修饰一些值
    getters: {},
    actions: {
        setCurrent(num: number): void {
            this.current = num
        },
        async getSetu(): Promise<any> {
            let data = await api.get('/api/setu')
            console.log(JSON.parse(data.data).imgurl);
            this.setuUrl = JSON.parse(data.data).imgurl
        }
    }
})

export const useTestStore2 = defineStore(Names.TEST2, {
    state: () => {
        return {
            ddd: 'kanokano'
        }
    }
})