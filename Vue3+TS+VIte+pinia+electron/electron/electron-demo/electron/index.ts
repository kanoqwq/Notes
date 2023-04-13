import { app, BrowserWindow, Menu, ipcMain } from 'electron'
import path from 'path'

const createWindow = () => {
    //隐藏工具栏
    Menu.setApplicationMenu(null)
    const win = new BrowserWindow({
        title: 'kano的资源站',
        webPreferences: {
            //可以在渲染进程中调用node的一些方法
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    //是否为打包状态
    console.log(app.isPackaged);

    if (app.isPackaged) {

        win.loadFile(path.join(__dirname, '../dist/index.html'))
    } else {
        win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}:${process.env['VITE_DEV_SEVER_PORT']}`)
    }

    //接受传入的数据
    ipcMain.on('message', (e, num) => {
        console.log(num, '来咯');

    })
    //传出数据
    win.webContents.openDevTools()
    setTimeout(() => {
        win.webContents.send('kanomsg', { message: 'okk' })
    }, 3000);

    // win.loadURL('https://pan.kanokano.cn')
    // win.loadURL(`${process.env['VITE_DEV_SERVER_URL']}:${process.env['VITE_DEV_SEVER_PORT']}`)
}



app.whenReady().then(createWindow)