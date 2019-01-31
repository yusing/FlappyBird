// this. 表示只屬於該物件(此處是小鳥)的成員

// 在電腦x由0開始向右為正,y軸是由0開始向下為正
/* e.g.
    (0,0), (1,0), (2,0), ...
    (0,1), (1,1), (2,1), ...
    (0,2), (1,2), (2,2), ...
    ...
 */

function Bird() { // 描述一隻小鳥的動作
    this.y = height/2; // 設小鳥y軸是油畫高度一半(中間)
    this.x = 25; // 設小鳥x在25
    this.w = this.h = 32; // 設小鳥長、寬為32

    this.gravity = 0.2; // dv/dt = 0.2
    this.velocity = 0; // velocity = dy/dt

    this.show = () => { // 函數用於顯示小鳥
        fill(255, 0, 0); // 為小鳥填上紅色 fill 的引數為(red,green,blue) red green blue 的範圍是(0 - 255)
        // ellipse 的引數為 (x軸, y軸, 寬度, 長度)
        ellipse(this.x, this.y, this.w, this.h); // 在(x,y) 畫一個 w x h (32x32) 的圓形代表小鳥
    };

    this.jump = () => { // 函數用於小鳥跳躍
        // a -= b 代表 a 的值減去b，a 變成 a - b
        // a /= b 代表 a 的值除去b，a 變成 a / b
        this.velocity -= this.h; // v <- v - 小鳥的高度(height)
        this.velocity /= 5; // v 縮少5倍
    };

    this.update = () => { // 函數用於更新小鳥xy位置
        this.velocity += this.gravity; // v <- v + g
        this.y += this.velocity; // y <- y　+ v

        // !a 代表a不成立， e.g. !true 是 false， !false 是 true
        if(!isInBetween(this.y, 0, height)) { // 如果小鳥的y 不 在0至height之間
            this.velocity = 0; // v <- 0
            this.y = height; // 小鳥的y設為小鳥的高度
        }
    };
}