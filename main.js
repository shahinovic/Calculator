let spans = Array.from(document.querySelectorAll('.fun-btns>span'));
let icons = Array.from(document.querySelectorAll('.fun-btns>span>span:nth-child(1)'));
let spansCount = Array.from(document.querySelectorAll('.fun-btns>span')).length;
spans.forEach((ele) => {
    ele.style = `transform: rotate(calc(360deg / ${spansCount} * var(--i))) translateX(270px); --i: ${spans.indexOf(ele)};`;
})
icons.forEach((ele) => {
    ele.style.transform = `rotate(calc(360deg / ${-spansCount} * var(--i)))`;
})
// vars
let nums = Array.from(document.querySelectorAll('.nums>span'));
let arith = Array.from(document.querySelectorAll('.inp'));
let brackets = document.querySelector('.brackets');
let del = document.querySelector('.del');
let delAll = document.querySelector('.del-all');
let view = document.querySelector('.view');
let res = document.querySelector('.res');
view.value = '';
nums.forEach((ele) => {
    ele.onclick = function () {
        view.value = `${view.value}${ele.dataset.val}`;
        res.innerHTML = eval(view.value);
    }
});
arith.forEach((ele) => {
    ele.onclick = function () {
        if (ele.dataset.val != '.' && view.value != '') {
            console.log(parseInt(view.value))
            view.value = `${view.value} ${ele.dataset.val} `;
        } else if (ele == '.') {
            view.value = `${view.value}${ele.dataset.val}`;
        } else if (view.value == '' && ele.dataset.val == '-') {
            view.value = '-';
        }
    }
})

document.querySelector('.equal').onclick = function () {
    if (eval(view.value) = 'undefined') {
        res.innerHTML = '';
    } else {
        res.innerHTML = eval(view.value);
    }
    view.value = '';
}

del.onclick = _ => view.value = view.value.slice(0, view.value.length - 1);

delAll.onclick = function () {
    view.value = '';
    res.innerHTML = '';
}

brackets.onclick = function () {
    if (!this.classList.contains('close')) {
        view.value = `${view.value}(`;
    } else {
        view.value = `${view.value})`;
    }
    this.classList.toggle('close');
}