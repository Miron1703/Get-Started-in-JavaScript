document.querySelector('button').onclick = myclick;
function myclick() {
    let a = document.querySelector('.i-t').value;
    console.log(a);
    document.querySelector('#userTextField').innerHTML = a;
    document.querySelector('.i-t').value = "";
}
