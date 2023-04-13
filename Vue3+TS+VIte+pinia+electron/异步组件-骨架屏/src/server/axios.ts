export const axios = {
    get<T>(url: string, delay: number = 0): Promise<T> {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest()
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    setTimeout(() => {
                        resolve(JSON.parse(xhr.responseText))
                    }, delay)
                }
            }
            xhr.send(null)
        })
    }
}