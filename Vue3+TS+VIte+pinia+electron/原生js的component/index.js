//原生js的虚拟dom组件实现
class kanoEle extends HTMLElement {
    constructor() {
        super()
        const shadowDom = this.attachShadow({ mode: 'open' })
        // template写法
        this.template = this.h('template')
        this.template.innerHTML = `
            <style>
                h2{
                    width:200px;
                    height:200px;
                    background:green
                }
            </style>
            <h2>kkk</h2>
        `
        shadowDom.appendChild(this.template.content.cloneNode(true))

        //创建元素写法
        // this.p = this.h('p')
        // this.p.innerText = 'kano'
        // this.p.setAttribute('style', 'width:100px;height:100px;background:red')
        // shadowDom.appendChild(this.p)
    }
    h(el) {
        return document.createElement(el)
    }
    connectedCallback() {
        console.log('第一次插入元素');
    }
    disconnectedCallback() {
        console.log('元素与DOM断开连接');
    }
    adoptedCallback() {
        console.log('元素被移动');
    }
    attributeChangedCallback() {
        console.log('元素被改变了');
    }
}

//定义组件
window.customElements.define('kano-p', kanoEle)