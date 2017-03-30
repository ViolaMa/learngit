var arr = ['c', 'n', 'd', 'e', 'a', 'm', 'c', 'r', 'a', 'e', 'o', 'p', 'e', 'q', 'c', 'm', 'g', 'e'],
    count = {},
    pos = {};

arr.forEach(function (char, index) {//遍历数组，统计字母出现次数，并累计
    if (count[char]) {  // char是字符，为count对象的属性？
        count[char]++;  //count[char]后面为何可以++?
        pos[char] += ',' + index;
    }
    else {
        count[char] = 1;
        pos[char] = ',' + index;
    }
    console.log(char);
})
console.log(count);

var max = 0, letter;
for (i in count) { //获取出现次数最多的字母
    if (count[i] > max) {
        max = count[i];
        letter = i;
    }
}

window.onload = function () {
    var showArr = document.getElementById("showArr"),
        btn = document.getElementById("btn"),
        showMost = document.getElementById("showMost");

    showArr.innerText = arr;

    btn.onclick = function () { //点击在页面中显示结果
        showMost.innerText = "出现次数最多的是：" + letter + "， 出现的位置是：" + pos[letter];
    }
}
