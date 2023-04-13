declare module ".vue" {
    import { DefineComponent } from 'vue'
    const compoment: DefineComponent<{}, {}, any>
    export default compoment
}