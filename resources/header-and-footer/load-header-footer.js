document.addEventListener("DOMContentLoaded", function() {
    // Header Load
    fetch('/resources/header-and-footer/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            setupScrollEffect();
        });

    // Footer Load
    fetch('/resources/header-and-footer/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            
            // বর্তমান সাল অটো সেট করার কোড (ইংরেজি ফরম্যাটে)
            document.getElementById('year').textContent = new Date().getFullYear();
        });
});

function setupScrollEffect() {
    const header = document.getElementById("main-header");
    
    window.addEventListener("scroll", function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // যদি স্ক্রল পজিশন একদম উপরে (0) থাকে তবেই দেখাবে
        if (scrollTop <= 5) {
            header.style.top = "0";
        } 
        // অন্যথায় স্ক্রল করলেই হাইড হয়ে যাবে
        else {
            header.style.top = "-100px"; 
        }
    });
}
