$(document).ready(function () {
    // ฟังก์ชันสำหรับสลับหน้า
    function switchPage(pageName) {
        // 1. ซ่อนทุก section
        $('.content-home, .content-resume, .content-projects, .content-contact').hide();
        
        // 2. แสดงเฉพาะหน้าที่เลือก
        $('.content-' + pageName).fadeIn(300);

        // 3. เลื่อนหน้าจอไปบนสุด (Scroll to top)
        // ใช้แบบทันที
        window.scrollTo(0, 0); 
        
        // หรือถ้าอยากให้เลื่อนแบบนุ่มนวล (Smooth Scroll) ให้ใช้บรรทัดนี้แทน:
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    }

    // ส่วนการดักจับคลิก
    $('.nav-link, .action-button').on('click', function (e) {
        e.preventDefault();
        const target = $(this).data('target');
        
        $('.nav-link').removeClass('active');
        $(`.nav-link[data-target="${target}"]`).addClass('active');

        switchPage(target);
    });

    $('.logo a').on('click', function (e) {
        e.preventDefault();
        $('.nav-link').removeClass('active');
        switchPage('home');
    });
});