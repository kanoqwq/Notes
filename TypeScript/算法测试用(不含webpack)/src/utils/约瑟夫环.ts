//约瑟夫环
class Josephu {

}



//创建一个环形单向链表
class CircleSingleLinkList {
    //创建first节点
    public first: NODE | undefined;
    public length: number = 0
    //添加节点构建为一个环形链表
    public create(nums: number): void {
        if (nums < 1) {
            throw new Error('num的值不正确')
        }
        let lastcur = this.first
        //开始构建环形链表
        for (let i = 1; i <= nums; i++) {
            let newNode = new NODE(i)
            if (i == 1) {
                this.first = newNode
                this.first.setNext(newNode)
                lastcur = this.first
            } else {
                lastcur!.setNext(newNode)
                //新节点的下一个永远指向头节点
                newNode.setNext(this.first!)
                lastcur = newNode
            }
            this.length++;
        }
    }
    //遍历当前环
    public visit(): void {
        if (this.first == null) {
            throw new Error('当前链表为空！');
        }
        let t = this.first
        while (true) {
            console.log(t.no);
            if (t.next == this.first) {
                break
            }
            t = t.next!
        }
    }
    //输出约瑟夫环出队步骤
    public print(start: number, count: number) {
        if (this.first == null) {
            throw new Error('链表为空')
        }
        if (!(start > 0 && count > 0 && start <= this.length)) {
            throw new Error('参数有误')
        }
        let Last = this.first;
        let First = this.first
        //last指向最后一个节点
        while (Last.next != this.first) {
            Last = Last.next!
        }
        //报数前，先让first和Last移动到start的位置
        for (let i = 1; i <= start - 1; i++) {
            First = First.next!
            Last = Last.next!
        }

        //报数时，不断循环访问链表，不断移动count-1次，每次报出一个人，直到圈中只剩一个节点
        while (true) {
            if (Last == First) {
                break;
            }
            for (let i = 1; i <= count - 1; i++) {
                First = First.next!
                Last = Last.next!
            }
            //报出数字
            console.log(First.no);
            //First后移一位
            First = First.next!;
            //连接
            Last.next = First
        }
        console.log(First.no);
        this.first = undefined;

    }
}

//创建一个NODE 表示一个节点
class NODE {
    public no: number;
    public next: NODE | undefined;
    public setNext(node: NODE) {
        this.next = node;
    }
    constructor(no: number) {
        this.no = no;
    }
}

let node = new CircleSingleLinkList();
node.create(5)
// node.visit()
node.print(1, 2)
