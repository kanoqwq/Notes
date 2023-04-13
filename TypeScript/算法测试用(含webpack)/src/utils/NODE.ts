//节点
class NODE {

    //构造器
    constructor(data: any) {
        this._data = data
    }

    //下一个节点
    public next: NODE | null = null;
    //存储数据
    private _data: any;
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value
    }
}
export default NODE;