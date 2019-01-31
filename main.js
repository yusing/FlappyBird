// 在編程裡， = 代表賦值 e.g. a = 5 後，a的值便是5
// === 表示比較， e.g. 5 === 5 便是 true(真)， 5 === 6 便是假(false)
// if(c && d) 表示條件c和條件d是否同時成立
// if(e % f) 表示 e 是否能被 f 整除
// return 表示函數回傳一些值 e.g. return 1;
// ; 表示一句程式句的結束
// a. 表示屬於 物件 a 的成員 e.g. me.parent 表示屬於me的家人

let bird; //.宣告變數bird
let pipes = []; // 宣告一維陣列pipes(水管) 陣列大概就是matrix
const interval = 40; // 相隔多少個frame出像一個水管

function isInBetween(cmp, lower, upper) {  // 檢查cmp是否>=lower同時<=upper，以cmp, lower, upper 作引數
    return cmp >= lower && cmp <= upper;
}

function setup() { // 執行遊戲前的準備工作
    createCanvas(400, 600); // 創建一幅400x600的油畫
    bird = new Bird(); // 賦值bird為新的小鳥
}

function draw() { // 當遊戲運行時執行以下步驟
    background(0); // 黑色底色
    bird.update(); // 更新bird的x,y軸位置
    bird.show(); // 顯示小鳥

    if(frameCount % interval === 0) { // 如果總畫格能整除interval (畫格=frame per second=fps，通常1秒60畫格)
        pipes.push(new Pipe()); // pipes 陣列加入新的水管
    }

    for (let i = 0; i < pipes.length; i++) { // 設i由0到pipes陣列的長度
        let pipe = pipes[i]; // 設第i個水管叫pipe
        pipe.show(); // 顯示水管
        pipe.update(); // 更新水管的xy軸

        // 如果小鳥的x軸在範圍(水管的x軸 至 水管的x軸+水管寬度)內 同時 如果小鳥的y軸在範圍(上方的水管的x軸+1 至 上方的水管的x軸+上下兩個水管的距離)內
        // 代表小鳥碰到了水管
        if(isInBetween(bird.x, pipes[i].x, pipes[i].x+5) && !isInBetween(bird.y, pipes[i].top+1, pipes[i].top+pipes[i].hdist))
        {
            pipe.highlight = true; // 水管變為紅色
        }
    }
}

function keyPressed() { // 當有按鍵按下
    if(key === ' ') { // 如果按下的鍵是空格
        bird.jump(); // 小鳥跳起
    }
}