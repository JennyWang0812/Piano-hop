// 定义音频
const sounds = {
    C: new Audio("C1.mp3"),
    D: new Audio("D1.mp3"),
    E: new Audio("E1.mp3")
};

// 获取按钮和图片
const buttons = document.querySelectorAll('.key');
const rabbit = document.getElementById('rabbit');
const squirrel = document.getElementById('squirrel');
const tiger = document.getElementById('tiger');

// 为按钮添加点击事件
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const key = this.id; // 获取按钮的 id (C, D, E)
        playSound(key); // 播放音频
        changeCharacterImage(key); // 根据按键显示不同的图标
    });
});

// 播放声音
function playSound(key) {
    sounds[key].play();
}

// 根据按键切换角色图标
function changeCharacterImage(key) {
    // 隐藏所有图标
    rabbit.style.display = "none";
    squirrel.style.display = "none";
    tiger.style.display = "none";

    // 根据按键显示相应图标
    if (key === "C") {
        rabbit.style.display = "block";
    } else if (key === "D") {
        squirrel.style.display = "block";
    } else if (key === "E") {
        tiger.style.display = "block";
    }
}
