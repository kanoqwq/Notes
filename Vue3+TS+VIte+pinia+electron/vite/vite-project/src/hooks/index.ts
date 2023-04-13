import { onMounted } from "vue"
type Options = {
    el: string
}


export default function (options: Options): Promise<{ baseUrl: string }> {
    return new Promise(resolve => {
        onMounted(() => {
            let img: HTMLImageElement = document.querySelector(options.el) as HTMLImageElement
            img.onload = () => {
                console.log(img);
                resolve({
                    baseUrl: ToBase64(img)
                })
            }

        })

        const ToBase64 = (el: HTMLImageElement): string => {
            //使用canvas转换图片
            const canvas: HTMLCanvasElement = document.createElement('canvas') as HTMLCanvasElement
            const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
            canvas.width = el.width
            canvas.height = el.height
            console.log(canvas.width ,canvas.height);
            ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
            return canvas.toDataURL('image/png')
        }
    })

}