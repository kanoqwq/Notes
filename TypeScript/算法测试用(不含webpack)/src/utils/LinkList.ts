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
        if (!p) {
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

    //追加
    public push(data: any) {
        let p = this.getHead?.next
        while (p?.next != null) {
            p = p.next;
        }
        p!.next = new NODE(data)
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

    //反转链表
    //使用辅助变量实现链表反转
    public static reverse(p: LinkList): any {
        let phead = p.getHead?.next;
        let tmp = new LinkList();
        tmp.init([])
        while (phead) {
            //头插法
            tmp.insert([phead.data], 0);
            phead = phead.next as NODE;
        }

        return tmp;
        // //头插法（纯NODE）
        // let cur = p.getHead?.next;
        // let reverseHead = new NODE('REVHEAD');
        // while (cur != null) {
        //     //保存下一个节点
        //     let next = cur.next
        //     cur.next = reverseHead.next
        //     reverseHead.next = cur
        //     //跳转到下一个节点
        //     cur = next
        // }
        // return reverseHead

    }
    //反向输出链表（递归）
    public reversePrint(p: NODE = this.head?.next as NODE): void {
        if (!p) {
            return;
        } else {
            this.reversePrint(p.next as NODE);
            console.log(p.data);
        }
    }

    //合并两个有序的链表，合并后仍然有序
    public static mergeLink(p1: LinkList, p2: LinkList): LinkList {
        let maxSize = p1.length + p2.length
        if (p1.length == 0 || p2.length == 0) {
            if (p1.length == 0 && p2.length != 0) {
                return p2
            } else if (p1.length != 0 && p2.length == 0) {
                return p1
            } else {
                return p1;
            }
        }
        let tmp: LinkList = new LinkList(maxSize);
        let p1Node = p1.getHead?.next
        let p2Node = p2.getHead?.next
        //先手动判断一次
        if (p1Node?.data < p2Node?.data) {
            tmp.init([p1Node?.data]);
            p1Node = p1Node?.next
        } else {
            tmp.init([p2Node?.data]);
            p2Node = p2Node?.next
        }
        // //大循环
        let data: any;
        for (let i = 1; i < maxSize; i++) {
            if (p1Node && p2Node) {
                if (p1Node.data > p2Node.data) {
                    data = p2Node.data
                    p2Node = p2Node.next
                } else {
                    data = p1Node.data
                    p1Node = p1Node.next
                }
            } else {
                if (p1Node) {
                    data = p1Node.data
                    p1Node = p1Node.next
                }
                if (p2Node) {
                    data = p2Node.data
                    p2Node = p2Node.next
                }
            }
            tmp.push(data);
        }
        return tmp
    }
}
export default LinkList;