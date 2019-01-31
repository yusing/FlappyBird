function Pipe() { // 描述一條水管
    this.hdist = random(128, 192); // 設上下兩條水管的垂直距離由128至192之間隨機數
    this.top = random(128, height/2); // 設上方水管的長度由 128 至 油畫寬度一半 之間隨機數
    this.bottom = height - this.top - this.hdist; // 設下方水管的長度為 油畫高度 - 上方水管的長度 - 上下兩條水管的垂直距離
    this.x = width; // 設水管x軸是油畫的寬度(在油畫最右邊)
    this.w = 20; // 水管寬度為 20
    this.speed = 2.5; // 設speed(dx/dt) 為 = 2.5
    this.highlight = false; // 水管預設不highlight(小鳥碰到水管才會highlight)

    this.show = () => { // // 函數用於顯示水管
        this.highlight ? fill(255, 0, 0) : fill(0, 255, 0); // highlight(小鳥碰到水管)嗎? 是的話水管填上紅色，否則填上綠色
        rect(this.x, 0, this.w, this.top); // 在(x,0) 畫出 (w x top) 大小的正方形表示上方的水管
        rect(this.x, height - this.bottom, this.w, this.bottom); // 在(x, height - bottom) 畫出 (w x bottom) 大小的正方形表示上方的水管
    };

    this.update = () => { // 函數用於把水管往左移
        // a -= b 代表 a 的值減去b，a 變成 a - b
        this.x -= this.speed; // x <- x - speed
    };
}