//引入样式
import './css/style.less';
//游戏组件
import GameControl from "./modules/Control";

let startBtn: HTMLElement = document.getElementById('start')!
let mode: HTMLElement = document.querySelector('#mode')!
let controlPanel = document.querySelector('.control-panel')!
let Game: GameControl;
startBtn.addEventListener('click', () => {
    startBtn.classList.add('hide')
    mode.classList.remove('hide')
})

mode.addEventListener('click', (e) => {
    let m = (e.target as HTMLElement).getAttribute('data')
    mode.classList.add('hide')
    Game = new GameControl(m)
})
controlPanel.addEventListener('click', (e) => {
    if (Game) {
        let key = (e.target as HTMLElement).getAttribute('data')
        console.log(key)
        Game.ChangeDirection(key);
    }

})
