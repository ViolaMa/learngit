window.onload = function () {
    var styleChange = document.getElementById('styleChange');
    var theme = getCookie('theme'); //获取cookies

    styleChange.setAttribute('href', 'css/' + theme + '.css');

    var changeTheme = document.getElementById('changeTheme'), //通过id获取ID为“changeTheme”的div
        changeThemeBtns = changeTheme.getElementsByTagName('a'); //获取“changeTheme”下的所有“a”标签

    for (var i = 0; i < changeThemeBtns.length; i++) {
        changeThemeBtns[i].onclick = function () {
            var color = this.getAttribute('data-color'); //点击时获取a标签的data-color属性，从而确定对应的css文件
            changeThemeFunc(styleChange, color);//调用changeThemeFunc()函数
            setCookie('theme', color, 10); //设置cookies
            return false; //取消默认行为
        }
    }

    var selectBtn = document.getElementById('selectBtn'),
        subSelect = document.getElementById('subSelect'),
        subSelectA = subSelect.getElementsByTagName('a');
    selectBtn.onclick = function () {
        Show(subSelect);
        return false;
    }
    for (var i = 0; i < subSelectA.length; i++) { //点击搜索框的下拉按钮，可以选择搜索的选项
        subSelectA[i].onclick = function () {
            var title = this.getAttribute('title');
            selectBtn.innerHTML = title;
            Disappeare(subSelect);
            return false;
        }
    }

    var dateInfo = document.getElementById('dateInfo'),
        dateContent = document.getElementById('dateContent'),
        constellation = document.getElementById('constellation'),
        constellationContent = document.getElementById('constellationContent');

    /*鼠标悬浮在日期和星座运势上，可以显示下方的div*/
    dateInfo.onmouseover = function () {
        Show(dateContent);
    }
    dateInfo.onmouseout = function () {
        Disappeare(dateContent);
    }
    dateContent.onmouseover = function () {
        Show(dateContent);
    }
    constellation.onmouseover = function () {
        Show(constellationContent);
    }
    constellation.onmouseout = function () {
        Disappeare(constellationContent);
    }
}

function Show(obj) { //元素显示
    obj.style.display = 'block';
}

function Disappeare(obj) { //元素消失
    obj.style.display = 'none';
}

/*通过修改link 的href来修改样式文件，从而更改主题颜色*/
function changeThemeFunc(obj, color) {
    obj.setAttribute('href', 'css/' + color + '.css');
}

function setCookie(name, value, iDay) { //设置cookies
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate;
}

function getCookie(name) { //读取cookies
    var arr = document.cookie.split('; ');
    var i = 0;
    for (i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');
        if (arr2[0] == name) {
            var getC = decodeURIComponent(arr2[1]);
            return getC;
        }
    }
    return '';
}

function removeCookie(name) { //删除cookies
    setCookie(name, '1', -1);
}