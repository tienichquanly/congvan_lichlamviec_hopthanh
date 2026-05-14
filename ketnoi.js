/**************************************************
 * TỆP KẾT NỐI (ketnoi.js)
 * Lĩnh vực: Quản lý địa chỉ kết nối và Giao diện UI.
 * Nguyên tắc: Chỉ chứa link Web App, định danh, Link Logo.
 **************************************************/

var SCV_CONFIG_GAS_URL = "https://script.google.com/macros/s/AKfycbxQNLrkoHnxF81IO_QmB7rcIdjQhavLWNG6fy3VngBeR_2xG8rHxJAlrJLcAs_szZO9/exec";
var SCV_LINK_LOGO = "https://i.ibb.co/6R8Y9DNq/logo-l-a-ch-n6.png"; // Đồng chí thay thế bằng URL ảnh Logo thực tế (đuôi .png/.jpg)

var SCV_TEN_TRUONG = "TRƯỜNG TH&THCS HỢP THÀNH";
var SCV_TEN_TRUONG_UP = "TRƯỜNG TH&THCS HỢP THÀNH";

var SCV_TEN_PM = "Quản lý Công văn & Lịch công tác";
var SCV_TEN_PM_UP = "QUẢN LÝ CÔNG VĂN & LỊCH CÔNG TÁC";
var SCV_PHIEN_BAN = "V2.5.2026";
var SCV_TAC_GIA = "Hoàng Ngọc Lâm";
var SCV_TAC_GIA_UP = "HOÀNG NGỌC LÂM";

// MÃ CLIENT ID CỦA GOOGLE ĐĂNG NHẬP
var SCV_GOOGLE_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";

/* ========================================================================= */
/* KHỞI TẠO CẤU TRÚC HEADER TỰ ĐỘNG TỪ FILE JS                               */
/* ========================================================================= */
(function() {
    var metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'utf-8');
    document.head.appendChild(metaCharset);

    document.title = SCV_TEN_PM + " - " + SCV_TEN_TRUONG;
    
    var metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = "Hệ thống " + SCV_TEN_PM.toLowerCase() + " nội bộ - " + SCV_TEN_TRUONG + ".";
    document.head.appendChild(metaDesc);

    var linkIcon = document.createElement('link');
    linkIcon.rel = 'icon';
    linkIcon.href = SCV_LINK_LOGO;
    document.head.appendChild(linkIcon);
})();
