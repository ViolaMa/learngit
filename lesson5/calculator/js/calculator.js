/*只能计算a+b，a-b, a*b, a/b ，无法进行复合运算。
 点击数字后，点击运算符，再点击数字，后点击"=",即可计算出结果。
 不支持将当前计算结果作为运算数直接计算*/
window.onload = function () {
    /*获取元素*/
    var num = document.getElementsByName("num"),
        operators = document.getElementsByName("operator"),
        screen = document.getElementById("screen"),
        clearBtn = document.getElementById("clearBtn"),
        equalBtn = document.getElementById("equalBtn"),
        str = "", i = 0, j = 0, _opt, _v, _first, _sec, result = 0;

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
            _first = str;  //获得第一个运算数
            _opt = this.getAttribute("data-operator");  //获得操作符

            screen.innerText = result;
            result += _opt;
            str = "";  //重置str的值，以再次点击数字键时，获取第二个运算数
        }
    }

    equalBtn.onclick = function () {
        _sec = str; //获取第二个运算数
        if (_opt) { //若输入了运算符，则继续运算
            calculator(_first, _sec, _opt);
            screen.innerText = result;
            str = "";  //计算完成后，重置str，操作符和结果，以便于下一次计算
            _opt = "";
            result = 0;
        }
        else {  //未点击运算符，则默认显示已经点击了的数字
            _first = str;
            result = _first;
        }
    }

    /*算数运算函数，根据运算符的情况，判断需进行的算数运算*/
    function calculator(x, y, opt) {
        var a = parseInt(x),
            b = parseInt(y);
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
        return result;
    }

    /*点击C按钮时清除已输入的数字,result重置为0*/
    clearBtn.onclick = clear;
    function clear() {
        result = 0;
        str = "";
        screen.innerText = result;
    }
}
