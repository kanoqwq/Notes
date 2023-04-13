import LinkList from "./utils/LinkList";
import NODE from "./utils/NODE";

//输入输出

(() => {
    try {

        //链表反转
        let link = new LinkList();
        let link2 = new LinkList();
        link.init([1, 3, 4, 5, 7, 9, 11, 12])
        link2.init([2, 6, 8, 10,22,33,123])

        // link = LinkList.reverse(link);
        // link.reversePrint()
        let pp = LinkList.mergeLink(link, link2)
        pp.print()


    } catch (e) {
        console.log(e);
    }
})()
