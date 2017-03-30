window.onload = function () {
    /*获取DOM元素*/
    var scoreInput = document.getElementById("scoreInput"),
        content = document.getElementById("content"),
        submit = document.getElementById("submit");
    var grade = "";

    /*点击提交btn时执行showLevel()*/
    submit.onclick = function () {
        showLevel();
    }

    /*键盘控制，按下enter时，阻止键盘默认事件，并执行分级showLevel()*/
    window.onkeydown = function (ev) {
        var event = ev || oEvent;
        if (event.keyCode == 13) {
            showLevel();
            return false;
        }
    }

    /*获取文本框中的数值，执行分级grading()，并将分级结果在页面中显示*/
    function showLevel() {
        score_v = scoreInput.value;
        grading(score_v);
        content.innerHTML = grade;
    }

    /*分数分等级*/
    function grading(v) {
        if (v == null || v == "") {
            grade = "分数不能为空";
        }
        else {
            switch (true) {
                case (v <= 100 && v >= 90):
                    grade = "一等";
                    break;
                case (v < 90 && v >= 80):
                    grade = "二等";
                    break;
                case (v < 80 && v >= 70):
                    grade = "三等";
                    break;
                case (v < 70 && v >= 60):
                    grade = "四等";
                case (v < 60 && v >= 50):
                    grade = "五等";
                    break;
                case (v < 50 && v >= 40):
                    grade = "六等";
                    break;
                case (v < 40 && v >= 30):
                    grade = "七等";
                    break;
                case  (v < 30 && v >= 20):
                    grade = "八等";
                    break;
                case  (v < 20 && v >= 10):
                    grade = "九等";
                    break;
                case (v < 10 && v >= 0):
                    grade = "十等";
                    break;
                default:
                    grade = "请输入0-100之间的的分数";
            }
        }
        content.className = "danger";
    }
}

