document.addEventListener('DOMContentLoaded', function() {
    // 动态添加一个新的日期链接
    var docList = document.getElementById('doc-list');
    var newDocItem = document.createElement('li');
    newDocItem.innerHTML = '<a href="docs/2024-09-15.html">2024-09-15</a>';
    docList.appendChild(newDocItem);
});