document.addEventListener('DOMContentLoaded', function() {
    // 点击链接后的炫酷效果
    const links = document.querySelectorAll('.doc-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // 防止页面立即跳转
            document.body.style.transition = "background 0.5s ease";
            document.body.style.background = "#007BFF";
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 500); // 延迟跳转
        });
    });
});
