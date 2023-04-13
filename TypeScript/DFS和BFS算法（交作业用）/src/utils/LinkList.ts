//链表
import NODE from "./NODE"
class LinkList {
    constructor(length: number = 0) {
        this._length = length;
    }

    //链表长度
    private _length: number
    get length() {
        return this._length;
    }
    //头节点
    private head: NODE | undefined;
    get getHead() {
        return this.head;
    }

    //初始化链表(返回头节点)
    init<T>(arr: Array<T>): NODE {
        if (!arr) {
            throw new Error('初始化内容为空!');
        }
        //长度保存
        this._length = arr.length;
        //头节点初始化,不存用户数据
        this.head = new NODE('HEADNODE DO NOT MODIFY');
        //如果初始化的是一个空链表
        if (arr.length === 0) {
            this.head.next = null;
            return this.head;
        } else {
            let p: NODE = new NODE(arr[0]);
            this.head.next = p;
            arr.forEach((item, index) => {
                if (index != 0) {
                    p.next = new NODE(item);
                    p = p.next;
                }
            });
            p.next = null;
            return this.head;
        }
    }

    //输出链表
    print(): void {
        if (!this.head) {
            throw new Error('链表未初始化!')
        }
        let p: NODE = this.head?.next as NODE;
        //链表为空
        if(!p){
            return;
        }
        //一次性输出
        let str = '';
        while (p != null) {
            // console.log(p.data);
            str += p.data;
            str += ' ';
            p = p.next as NODE;
        }    
        console.log(str);
    }

    //插入数据(之后) 类型是数组,或者其他数据(不填默认插入到最后)
    public insert<T>(Arr: Array<T>, index: number = this.length): void {
        if (!Arr?.length) {
            throw new Error('插入的数据为空!')
        }
        if (!this.head) {
            throw new Error('链表未初始化!')
        }
        if (index < 0 || index > this.length) {
            throw new Error('index输入错误或者越界!')
        }
        //开始插入
        let p = this.head.next;
        let i = 1;
        //插入的如果是第一个节点
        if (index === 0) {
            let newHead = new LinkList(Arr.length).init(Arr);
            this.head.next = newHead.next
            //遍历到最后
            while (newHead.next) { newHead = newHead.next }
            newHead.next = p;
        }
        while (p) {
            //找到插入点
            if (i === index) {
                //保存p的下一节点数据
                let tmp = p.next;
                //创建一个新表
                let newLink: LinkList = new LinkList(Arr.length);
                //初始化并返回表头
                let linkHead = newLink.init(Arr);
                //开始拼接 (linkHead.next是第一个元素) 
                p.next = linkHead.next;
                //遍历到最后一个节点
                while (linkHead.next != null) { linkHead = linkHead.next };
                linkHead.next = tmp;
                //实例链表总长度增加
                this._length += Arr.length
            }
            p = p.next;
            i++;
        }

    }

    //删除数据
    public delete(item: any): void {
        let isFind = false;
        //搜索
        if (item == undefined) {
            throw new Error("没有数据!")
        }
        let p = this.head?.next;
        //删除的是第一个
        if (p?.data == item) {
            this.head!.next = (this.head?.next?.next) as NODE
            isFind = true;
        }

        while (p?.next) {
            if (p.next?.data == item) {
                //抹掉数据
                p.next.data = undefined;
                let tmp = p.next?.next;
                p.next = tmp as NODE;
                isFind = true;
                break;
            }
            p = p.next;
        }
        if (!isFind) {
            throw new Error('没有找到需要删除的数据!');
        }
    }

}
export default LinkList;