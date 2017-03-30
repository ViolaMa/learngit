window.onload = function () {
    /*获取元素*/
    var num = document.getElementsByName("num"),
        operators = document.getElementsByName("operator"),
        screen = document.getElementById("screen"),
        clearBtn = document.getElementById("clearBtn"),
        equalBtn = document.getElementById("equalBtn"),
        str = "", i = 0, j = 0, _opt, _v, _first, _sec, result = 0;
    var state = 0; //运算符按下的次数

    /* 初始显示的值为0*/
    screen.innerText = result;
    /*点击数字键，获取数值*/
    for (; i < num.length; i++) {
        num[i].onclick = function () {
            /*连续点击数字键，输入多位数*/
            _v = this.getAttribute("data-value");
            str += _v;
            screen.innerText = str;
        }
    }

    /* 获取运算符*/
    for (; j < operators.length - 1; j++) {
        operators[j].onclick = function () {  //连续点击多个运算符则会计算错误
            if (state == 0) {
                _first = parseFloat(str);  //获得第一个运算数
                str = "";  //重置str的值，以再次点击数字键时，获取第二个运算数
            }
            if (state == 2) {
                _first = result; //状态2，则表示已经点击过等于
            }
            _opt = this.getAttribute("data-operator");
            result = _first;
            result += _opt;
            screen.innerText = result;
            state = 1;  //按下运算符，状态即至为1
        }
    }

    equalBtn.onclick = function () {
        if (state == 1) { //若输入了运算符，则继续运算
            _sec = parseFloat(str);

            calculator(_first, _sec, _opt);
            screen.innerText = result;
            str = "";  //计算完成后，重置str，操作符和结果，以便于下一次计算
            _opt = "";
            state = 2;
        }
        else if (state == 0) {  //未点击运算符，则默认显示已经点击了的数字
            _first = str;
            result = _first;
        }
    }

    /*算数运算函数，根据运算符的情况，判断需进行的算数运算*/
    function calculator(a, b, opt) {
        if (!a || !b) {
            return;
        }
        else {
            if (opt == "+") {
                result = a + b;
            }
            if (opt == "-") {
                result = a - b;
            }
            if (opt == "*") {
                result = a * b;
            }
            if (opt == "/") {
                if (b == 0) {
                    result = "NAN";

                }
                else {
                    result = a / b;
                }
            }
            _first = result;
            return result;
        }
    }

    /*点击C按钮时清除已输入的数字,result重置为0*/
    clearBtn.onclick = clear;
    function clear() {
        result = 0;
        str = "";
        _first = 0;
        screen.innerText = result;
        state = 0;
    }

    var sinBtn = document.getElementById('sinBtn'),
        cosBtn = document.getElementById('cosBtn');
    sinBtn.onclick = function () {
        sinFunc();
    }
    cosBtn.onclick = function () {
        cosFunc();
    }
    function sinFunc() {
        if (state == 0) {
            _first = str;
        }
        console.log(_first);
        result = Math.sin(_first);
        screen.innerText = result;
        state = 2;
    }

    function cosFunc() {
        if (state == 0) {
            _first = str;
        }
        console.log(_first);
        result = Math.cos(_first);
        screen.innerText = result;
        state = 2;
    }
}
