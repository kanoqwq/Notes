//记分牌
class ScorePanel {
    constructor(maxLevel: number = 10,levelUpPos:number = 10) {
        this.scoreElement = document.getElementById('score');
        this.levelElement = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.levelUpPos = levelUpPos;
    }

    score: number = 0;
    level: number = 1;
    maxLevel: number;
    levelUpPos:number;
    scoreElement: HTMLElement;
    levelElement: HTMLElement;

    //加分
    public addScore():void {
        this.scoreElement.innerHTML = (++this.score).toString();
        if(this.score % this.levelUpPos === 0){
            this.LevelUp()
        }
    }

    //升级
    private LevelUp():void {
        //限制等级
        if (this.level < this.maxLevel) {
            this.levelElement.innerHTML = (++this.level).toString();
        }
    }
}
export default ScorePanel;