$(document).ready(function() {
    
    // 1. ฟังก์ชันสำหรับการสลับหน้า
    function showPage(targetClass) {
        // ซ่อนทุก section ที่เป็นเนื้อหาหลัก
        $('.content-home, .content-resume, .content-projects, .content-contact').hide();
        // แสดงเฉพาะ section ที่เลือก พร้อม animation เล็กน้อย
        $('.' + targetClass).fadeIn(300);
    }

    // 2. เมื่อคลิกที่เมนู (Resume, Projects, Contact) ใน <nav>
    $('.nav-link').on('click', function(e) {
        e.preventDefault(); 

        // จัดการ class active ให้กับเมนู
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        // ดึงชื่อหน้าจาก href หรือ text มากำหนด class ที่จะแสดง
        var target = $(this).attr('href').replace('.html', ''); 
        showPage('content-' + target);
    });

    // 3. เมื่อคลิกที่ Logo หรือปุ่ม Action ต่างๆ ในหน้า Home
    $('.logo a, .action-button').on('click', function(e) {
        e.preventDefault();
        
        // ล้าง class active ของเมนูหลักก่อน
        $('.nav-link').removeClass('active');
        
        // ตรวจสอบว่ากดปุ่มไหน เพื่อเปิดหน้านั้นและไฮไลท์เมนูให้ถูกต้อง
        if ($(this).hasClass('resume-button')) {
            $('a[href="resume.html"]').addClass('active');
            showPage('content-resume');
        } else if ($(this).hasClass('projects-button')) {
            $('a[href="projects.html"]').addClass('active');
            showPage('content-projects');
        } else if ($(this).hasClass('contact-button')) {
            $('a[href="contact.html"]').addClass('active');
            showPage('content-contact');
        } else {
            // กรณีคลิก Logo ให้กลับหน้า Home
            showPage('content-home');
        }
    });
});