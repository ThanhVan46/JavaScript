function upDate(previewPic) {
    // Bước 1: Kiểm tra xem sự kiện kích hoạt và kiểm tra thuộc tính của previewPic
    console.log("Di chuột vào ảnh thành công!");
    console.log("Đường dẫn ảnh (src): " + previewPic.src);
    console.log("Mô tả ảnh (alt): " + previewPic.alt);

    // Lấy phần tử khung hiển thị lớn bằng ID
    let imageDiv = document.getElementById("image");

    // Bước 2: Thay đổi nội dung chữ thành alt của ảnh đang di chuột qua
    imageDiv.innerHTML = previewPic.alt;

    // Bước 3: Thay đổi ảnh nền (background-image) thành src của ảnh đang di chuột qua
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Bước 1: Trả ảnh nền về giá trị ban đầu (trống)
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";

    // Bước 2: Trả lại đoạn văn bản ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}