const state = {
    page: 1,
    doanhnghiep: {
        "success": true,
        "data": [
            {
            "tenDonVi": { "tiengViet": "Viện Nghiên cứu Cơ khí", "tiengAnh": "National Research Institute of Mechanical Engineering", "vietTat": "NARIME" },
            "_id": "5beae889d6ae7d44d4ccdd66",
            "diaChi": "Số 4, đường Phạm Văn Đồng, phường Mai Dịch, Cầu Giấy, Hà Nội",
            "dienThoai": "02437647350",
            "fax": "02437649883",
            "email": "narime@narime.gov.vn",
            "website": "www.narime.gov.vn",
            "loaiDoanhNghiep": "Doanh nghiệp nhà nước",
            "quyMo": "Vừa",
            "diaChiSanXuat": "Công ty cổ phần Máy & Thiết bị Narime",
            "coQuanChuQuan": "Bộ Công Thương",
            "giamDoc": "Phan Đăng Phong",
            "nguoiDaiDienPhapLuat": "Phan Đăng Phong",
            "thongTinKinhTe": [{
                    "nam": [{
                            "_id": "5beae889d6ae7d44d4ccdd7e",
                            "tenNam": "2015",
                            "giaTri": "94,156"
                        },
                        {
                            "_id": "5beae889d6ae7d44d4ccdd7d",
                            "tenNam": "2016",
                            "giaTri": "112,710"
                        },
                        {
                            "_id": "5beae889d6ae7d44d4ccdd7c",
                            "tenNam": "2017",
                            "giaTri": "295,343"
                        }
                    ],
                    "_id": "5beae889d6ae7d44d4ccdd7b",
                    "stt": 1,
                    "chiTieu": "Giá trị thực tế tài sản DN"
                },
                {
                    "nam": [{
                            "_id": "5beae889d6ae7d44d4ccdd7a",
                            "tenNam": "2015",
                            "giaTri": "18.,878"
                        },
                        {
                            "_id": "5beae889d6ae7d44d4ccdd79",
                            "tenNam": "2016",
                            "giaTri": "15,277"
                        },
                        {
                            "_id": "5beae889d6ae7d44d4ccdd78",
                            "tenNam": "2017",
                            "giaTri": "11,590"
                        }
                    ],
                    "_id": "5beae889d6ae7d44d4ccdd77",
                    "stt": 2,
                    "chiTieu": "Trong đó: Máy móc, thiết bị"
                },
                { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd76", "tenNam": "2015", "giaTri": "502,104" }, { "_id": "5beae889d6ae7d44d4ccdd75", "tenNam": "2016", "giaTri": "965,659" }, { "_id": "5beae889d6ae7d44d4ccdd74", "tenNam": "2017", "giaTri": "1225,555" }], "_id": "5beae889d6ae7d44d4ccdd73", "stt": 3, "chiTieu": "Doanh thu" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd72", "tenNam": "2015", "giaTri": "320" }, { "_id": "5beae889d6ae7d44d4ccdd71", "tenNam": "2016", "giaTri": "330" }, { "_id": "5beae889d6ae7d44d4ccdd70", "tenNam": "2017", "giaTri": "342" }], "_id": "5beae889d6ae7d44d4ccdd6f", "stt": 4, "chiTieu": "Tổng số lao động doanh nghiệp" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd6e", "tenNam": "2015", "giaTri": "17,455" }, { "_id": "5beae889d6ae7d44d4ccdd6d", "tenNam": "2016", "giaTri": "18,083" }, { "_id": "5beae889d6ae7d44d4ccdd6c", "tenNam": "2017", "giaTri": "19,052" }], "_id": "5beae889d6ae7d44d4ccdd6b", "stt": 5, "chiTieu": "Tổng tiền lương doanh nghiệp" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd6a", "tenNam": "2015", "giaTri": "18,228" }, { "_id": "5beae889d6ae7d44d4ccdd69", "tenNam": "2016", "giaTri": "25,861" }, { "_id": "5beae889d6ae7d44d4ccdd68", "tenNam": "2017", "giaTri": "22,246" }], "_id": "5beae889d6ae7d44d4ccdd67", "stt": 6, "chiTieu": "Nộp ngân sách" }
            ],
            "tinhHinhTaiChinh": [{ "nam": [{ "_id": "5beae889d6ae7d44d4ccdda6", "tenNam": "2015", "giaTri": "722.238.107.898" }, { "_id": "5beae889d6ae7d44d4ccdda5", "tenNam": "2016", "giaTri": "846.435.055.308" }, { "_id": "5beae889d6ae7d44d4ccdda4", "tenNam": "2017", "giaTri": "747.582.862.490" }], "_id": "5beae889d6ae7d44d4ccdda3", "stt": 1, "chiTieu": "Tổng tài sản" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdda2", "tenNam": "2015", "giaTri": "603.400.119.355" }, { "_id": "5beae889d6ae7d44d4ccdda1", "tenNam": "2016", "giaTri": "728.920.581.295" }, { "_id": "5beae889d6ae7d44d4ccdda0", "tenNam": "2017", "giaTri": "510.019.394.759" }], "_id": "5beae889d6ae7d44d4ccdd9f", "stt": 2, "chiTieu": "Tài sản ngắn hạn" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd9e", "tenNam": "2015", "giaTri": "722.238.107.898" }, { "_id": "5beae889d6ae7d44d4ccdd9d", "tenNam": "2016", "giaTri": "846.435.055.308" }, { "_id": "5beae889d6ae7d44d4ccdd9c", "tenNam": "2017", "giaTri": "747.582.862.490" }], "_id": "5beae889d6ae7d44d4ccdd9b", "stt": 3, "chiTieu": "Tổng nguồn vốn" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd9a", "tenNam": "2015", "giaTri": "57.110.606.684" }, { "_id": "5beae889d6ae7d44d4ccdd99", "tenNam": "2016", "giaTri": "70.442.334.749" }, { "_id": "5beae889d6ae7d44d4ccdd98", "tenNam": "2017", "giaTri": "85.041.186.924" }], "_id": "5beae889d6ae7d44d4ccdd97", "stt": 4, "chiTieu": "Nguồn vốn lưu động" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd96", "tenNam": "2015", "giaTri": "166.381.425.307" }, { "_id": "5beae889d6ae7d44d4ccdd95", "tenNam": "2016", "giaTri": "178.686.221.108" }, { "_id": "5beae889d6ae7d44d4ccdd94", "tenNam": "2017", "giaTri": "313.630.725.807" }], "_id": "5beae889d6ae7d44d4ccdd93", "stt": 5, "chiTieu": "Nguồn Vốn chủ sở hữu" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd92", "tenNam": "2015", "giaTri": "555.856.682.591" }, { "_id": "5beae889d6ae7d44d4ccdd91", "tenNam": "2016", "giaTri": "667.748.834.200" }, { "_id": "5beae889d6ae7d44d4ccdd90", "tenNam": "2017", "giaTri": "433.952.136.683" }], "_id": "5beae889d6ae7d44d4ccdd8f", "stt": 6, "chiTieu": "Tổng nợ phải trả" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd8e", "tenNam": "2015", "giaTri": "546.289.512.671" }, { "_id": "5beae889d6ae7d44d4ccdd8d", "tenNam": "2016", "giaTri": "658.478.246.546" }, { "_id": "5beae889d6ae7d44d4ccdd8c", "tenNam": "2017", "giaTri": "424.978.207.835" }], "_id": "5beae889d6ae7d44d4ccdd8b", "stt": 7, "chiTieu": "Nợ ngắn hạn" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd8a", "tenNam": "2015", "giaTri": "500.139.433.303" }, { "_id": "5beae889d6ae7d44d4ccdd89", "tenNam": "2016", "giaTri": "962.047.090.992" }, { "_id": "5beae889d6ae7d44d4ccdd88", "tenNam": "2017", "giaTri": "1.227.314.586.626" }], "_id": "5beae889d6ae7d44d4ccdd87", "stt": 8, "chiTieu": "Tổng doanh thu" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd86", "tenNam": "2015", "giaTri": "6.454.183.330" }, { "_id": "5beae889d6ae7d44d4ccdd85", "tenNam": "2016", "giaTri": "16.444.662.205" }, { "_id": "5beae889d6ae7d44d4ccdd84", "tenNam": "2017", "giaTri": "22.323.719.841" }], "_id": "5beae889d6ae7d44d4ccdd83", "stt": 9, "chiTieu": "Lợi nhuận trước thuế" }, { "nam": [{ "_id": "5beae889d6ae7d44d4ccdd82", "tenNam": "2015", "giaTri": "5.086.549.099" }, { "_id": "5beae889d6ae7d44d4ccdd81", "tenNam": "2016", "giaTri": "13.138.462.323" }, { "_id": "5beae889d6ae7d44d4ccdd80", "tenNam": "2017", "giaTri": "17.867.614.627" }], "_id": "5beae889d6ae7d44d4ccdd7f", "stt": 10, "chiTieu": "Lợi nhuận sau thuế" }],
            "thongTinHoatDongKhac": "- Năng lực trong lĩnh vực thiết kế, cung cấp hệ thống lọc bụi tĩnh điện (ESP)\n- Năng lực trong lĩnh vực thiết kế, cung cấp hệ thống thải tro, xỉ (AHS)\n- Năng lực trong lĩnh vực thiết kế, cung cấp hệ thống cấp than (CHS)\n- Cung cấp, thiết kế, chế tạo, sửa chữa, lắp đặt các phụ tùng cho các nhà máy nhiệt điện: Nhiệt điện Phả Lại, Hải Phòng, Uông Bí, Cẩm Phả…",
            "nganhKinhDoanh": [],
            "createdAt": "2018-11-13T15:06:49.967Z",
            "updatedAt": "2018-11-13T15:06:49.967Z",
            "__v": 0
        }, {
            "tenDonVi": { "tiengViet": "Tổng công ty Cơ điện Xây dựng - CTCP", "tiengAnh": "Mechanization Electrification Construction Corporation – Joint Stock Company", "vietTat": "AGRIMECO" },
            "_id": "5beaf63cd6ae7d44d4ccde52",
            "diaChi": "Km 10, quốc lộ 1A, xã Tứ Hiệp, huyện Thanh Trì, TP Hà Nộ",
            "dienThoai": "02438614605",
            "fax": "0438615706",
            "email": "agrimeco@hn.vnn.vn",
            "website": "www.agrimeco.com.vn",
            "loaiDoanhNghiep": "Doanh nghiệp tư nhân",
            "quyMo": "Lớn",
            "diaChiSanXuat": "",
            "coQuanChuQuan": "",
            "giamDoc": "",
            "nguoiDaiDienPhapLuat": "",
            "thongTinKinhTe": [{
                "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde6a", "tenNam": "2015", "giaTri": "" },
                    { "_id": "5beaf63cd6ae7d44d4ccde69", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde68", "tenNam": "2017", "giaTri": "" }
                ],
                "_id": "5beaf63cd6ae7d44d4ccde67",
                "stt": 1,
                "chiTieu": "Giá trị thực tế tài sản DN"
            }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde66", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde65", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde64", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde63", "stt": 2, "chiTieu": "Trong đó: Máy móc, thiết bị" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde62", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde61", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde60", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde5f", "stt": 3, "chiTieu": "Doanh thu" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde5e", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde5d", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde5c", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde5b", "stt": 4, "chiTieu": "Tổng số lao động doanh nghiệp" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde5a", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde59", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde58", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde57", "stt": 5, "chiTieu": "Tổng tiền lương doanh nghiệp" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde56", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde55", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde54", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde53", "stt": 6, "chiTieu": "Nộp ngân sách" }],
            "tinhHinhTaiChinh": [{ "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde92", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde91", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde90", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde8f", "stt": 1, "chiTieu": "Tổng tài sản" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde8e", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde8d", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde8c", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde8b", "stt": 2, "chiTieu": "Tài sản ngắn hạn" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde8a", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde89", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde88", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde87", "stt": 3, "chiTieu": "Tổng nguồn vốn" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde86", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde85", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde84", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde83", "stt": 4, "chiTieu": "Nguồn vốn lưu động" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde82", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde81", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde80", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde7f", "stt": 5, "chiTieu": "Nguồn Vốn chủ sở hữu" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde7e", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde7d", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde7c", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde7b", "stt": 6, "chiTieu": "Tổng nợ phải trả" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde7a", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde79", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde78", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde77", "stt": 7, "chiTieu": "Nợ ngắn hạn" }, {
                "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde76", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde75", "tenNam": "2016", "giaTri": "" },
                    { "_id": "5beaf63cd6ae7d44d4ccde74", "tenNam": "2017", "giaTri": "" }
                ],
                "_id": "5beaf63cd6ae7d44d4ccde73",
                "stt": 8,
                "chiTieu": "Tổng doanh thu"
            }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde72", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde71", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde70", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde6f", "stt": 9, "chiTieu": "Lợi nhuận trước thuế" }, { "nam": [{ "_id": "5beaf63cd6ae7d44d4ccde6e", "tenNam": "2015", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde6d", "tenNam": "2016", "giaTri": "" }, { "_id": "5beaf63cd6ae7d44d4ccde6c", "tenNam": "2017", "giaTri": "" }], "_id": "5beaf63cd6ae7d44d4ccde6b", "stt": 10, "chiTieu": "Lợi nhuận sau thuế" }],
            "thongTinHoatDongKhac": "",
            "nganhKinhDoanh": [],
            "createdAt": "2018-11-13T16:05:16.490Z",
            "updatedAt": "2018-11-13T16:05:16.490Z",
            "__v": 0
        }]
    }
};

let doanhNgiep = state.doanhnghiep.data;

var rowsPerPage = 1;

var currentPage = 1;

// console.log(state.doanhnghiep.data);


// console.log(doanhNgiep);


var tbody = document.getElementById("tbody");

function create_elment(item, i) {
    return `
    <tr>
        <td>${i+1}</td>
        <td>${item.tenDonVi.tiengViet}</td>
        <td>${item.tenDonVi.vietTat}</td>
        <td>${item.diaChi}</td>  
        <td>${item.email}</td>
        <td><a href="/doanh-nghiep/chi-tiet-mo?id=5beae889d6ae7d44d4ccdd66" class="btn btn-info">
              Chi tiết
            </a></td>
    </tr>
    `;
}

loadData(currentPage*rowsPerPage - rowsPerPage, currentPage*rowsPerPage);

function loadData(start, end) {
    for (var i = start; i < end; i++) {
        console.log(doanhNgiep[i]);
        tbody.insertAdjacentHTML('beforeend', create_elment(doanhNgiep[i], i));
    }
    // doanhNgiep.forEach(item => {
    //     tbody.insertAdjacentHTML('beforeend', create_elment(item));
    // })
}

//console.log(doanhNgiep.length);

function changeClick(curr) {
    console.log(curr);
    var curr = parseInt(curr.innerHTML);
    var st = rowsPerPage*curr-1;
    var ed = rowsPerPage*curr+rowsPerPage-1;
    console.log(st);
    console.log(ed);
    tbody.innerHTML = "";

    loadData(st, ed);
}

function create_li(item) {
    return `
        <a style="display:inline-block" onclick="changeClick(this)" href="#" class="page-link">${item}</a>
    `;
}
taosubpag();

function taosubpag() {
    var subpage = document.getElementById("subpage");
    for (var i = 1; i <= Math.ceil(doanhNgiep.length / 1); i++) {
        var li = document.createElement("li");
        li.innerHTML = create_li(i);
        subpage.appendChild(li);
    }
};

function changeRowsPerPage(select) {
    rowsPerPage = select.options[select.selectedIndex].value;
    console.log(rowsPerPage);
    tbody.innerHTML = "";
    loadData(currentPage*rowsPerPage - rowsPerPage, currentPage*rowsPerPage);

    document.getElementById("subpage").innerHTML = "";
    taosubpag();
}