import { FaChevronRight } from "react-icons/fa";
import { TbDeviceAirpods, TbSpeakerphone } from "react-icons/tb";
import { BsFillHouseHeartFill, BsPhoneFlip, BsUsbPlug } from "react-icons/bs";
import { HiOutlineTv } from "react-icons/hi2";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoIosLaptop } from "react-icons/io";
import { CgAppleWatch } from "react-icons/cg";
import { GiNewspaper, GiPc } from "react-icons/gi";

import config from "@/config";

export const MENU_DATA = [
  {
    icon: IoPhonePortraitOutline,
    categories: [
      {
        title: "Điện Thoại",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0554`,
      },
      {
        title: "Tablet",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0555`,
      },
    ],
    children: [
      {
        title: "Hãng điện thoại",
        content: [
          {
            name: "iPhone",
            href: "",
          },
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "OPPO",
            href: "",
          },
          {
            name: "realme",
            href: "",
          },
          {
            name: "vivo",
            href: "",
          },
          {
            name: "TECNO",
            href: "",
          },
          {
            name: "Infinic",
            href: "",
          },
          {
            name: "Nokia",
            href: "",
          },
          {
            name: "Nubia",
            href: "",
          },
          {
            name: "OnePlus",
            href: "",
          },
          {
            name: "Masstel",
            href: "",
          },
        ],
      },
      {
        title: "Mức giá điện thoại",
        content: [
          {
            name: "Dưới 2 triệu",
            href: "",
          },
          {
            name: "Từ 2 - 4 triệu",
            href: "",
          },
          {
            name: "Từ 4 - 7 triệu",
            href: "",
          },
          {
            name: "Từ 7 - 13 triệu",
            href: "",
          },
          {
            name: "Từ 13 - 20 triệu",
            href: "",
          },
          {
            name: "Trên 20 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Mức giá điện thoại",
        content: [
          {
            name: "Dưới 2 triệu",
            href: "",
          },
          {
            name: "Từ 2 - 4 triệu",
            href: "",
          },
          {
            name: "Từ 4 - 7 triệu",
            href: "",
          },
          {
            name: "Từ 7 - 13 triệu",
            href: "",
          },
          {
            name: "Từ 13 - 20 triệu",
            href: "",
          },
          {
            name: "Trên 20 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Điện thoại HOT",
        content: [
          {
            name: "iPhone 15 Pro Max",
            href: "",
          },
          {
            name: "Galaxy Z Fold6",
            href: "",
          },
          {
            name: "Galaxy Z Flip6",
            href: "",
          },
        ],
      },
      {
        title: "Hãng máy tính bảng",
        content: [
          {
            name: "iPad",
            href: "",
          },
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "Huawei",
            href: "",
          },
          {
            name: "Lenovo",
            href: "",
          },
          {
            name: "Nokia",
            href: "",
          },
          {
            name: "Teclast",
            href: "",
          },
          {
            name: "Máy đọc sách",
            href: "",
          },
          {
            name: "Kindle",
            href: "",
          },
          {
            name: "Boox",
            href: "",
          },
          {
            name: "Xem thêm tất cả Tablet",
            href: "",
          },
        ],
      },
      {
        title: "Máy tính bảng HOT",
        content: [
          {
            name: "iPad Air 2024",
            href: "",
          },
          {
            name: "iPad Pro 2024",
            href: "",
          },
          {
            name: "Galaxy Tab S9 FE 5G",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: IoIosLaptop,
    categories: [
      {
        title: "Laptop",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0556`,
      },
    ],
    children: [
      {
        title: "Thương hiệu",
        content: [
          {
            name: "Mac",
            href: "",
          },
          {
            name: "ASUS",
            href: "",
          },
          {
            name: "Lenovo",
            href: "",
          },
          {
            name: "Dell",
            href: "",
          },
          {
            name: "HP",
            href: "",
          },
          {
            name: "Acer",
            href: "",
          },
          {
            name: "LG",
            href: "",
          },
          {
            name: "Huawei",
            href: "",
          },
          {
            name: "MSI",
            href: "",
          },
          {
            name: "Gigabyte",
            href: "",
          },
          {
            name: "Vaio",
            href: "",
          },
          {
            name: "Microsoft Surface",
            href: "",
          },
        ],
      },
      {
        title: "Phân khúc giá",
        content: [
          {
            name: "Dưới 10 triệu",
            href: "",
          },
          {
            name: "Từ 10 - 15 triệu",
            href: "",
          },
          {
            name: "Từ 15 - 20 triệu",
            href: "",
          },
          {
            name: "Từ 20 - 25 triệu",
            href: "",
          },
          {
            name: "Từ 25 - 30 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Nhu cầu sử dụng",
        content: [
          {
            name: "Văn phòng",
            href: "",
          },
          {
            name: "Gaming",
            href: "",
          },
          {
            name: "Mỏng nhẹ",
            href: "",
          },
          {
            name: "Đồ họa - kỹ thuật",
            href: "",
          },
          {
            name: "Sinh viên",
            href: "",
          },
          {
            name: "Cảm ứng",
            href: "",
          },
          {
            name: "Laptop AI",
            href: "",
          },
          {
            name: "Mac CTO - Nâng cấp theo cách của bạn",
            href: "",
          },
        ],
      },
      {
        title: "Dòng chip",
        content: [
          {
            name: "Laptop Core i3",
            href: "",
          },
          {
            name: "Laptop Core i5",
            href: "",
          },
          {
            name: "Laptop Core i7",
            href: "",
          },
          {
            name: "Laptop Core i9",
            href: "",
          },
          {
            name: "Apple M1 Series",
            href: "",
          },
          {
            name: "Apple M2 Series",
            href: "",
          },
          {
            name: "Apple M3 Series",
            href: "",
          },
          {
            name: "AMD Ryzen",
            href: "",
          },
          {
            name: "Intel Core Ultra",
            href: "",
          },
        ],
      },
      {
        title: "Kích thước màn hình",
        content: [
          {
            name: "Laptop 12 inch",
            href: "",
          },
          {
            name: "Laptop 13 inch",
            href: "",
          },
          {
            name: "Laptop 14 inch",
            href: "",
          },
          {
            name: "Laptop 15.6 inch",
            href: "",
          },
          {
            name: "Laptop 16 inch",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: TbDeviceAirpods,
    categories: [
      {
        title: "Âm thanh",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0557`,
      },
    ],
    children: [
      {
        title: "Chọn loại tai nghe",
        content: [
          {
            name: "Bluetooth",
            href: "",
          },
          {
            name: "Chụp tai",
            href: "",
          },
          {
            name: "Nhép tai",
            href: "",
          },
          {
            name: "Có dây",
            href: "",
          },
          {
            name: "Thể thao",
            href: "",
          },
          {
            name: "Gaming",
            href: "",
          },
          {
            name: "Xem tất cả tai nghe",
            href: "",
          },
        ],
      },
      {
        title: "Hãng tai nghe",
        content: [
          {
            name: "Apple",
            href: "",
          },
          {
            name: "JBL",
            href: "",
          },
          {
            name: "Marshall",
            href: "",
          },
          {
            name: "Sony",
            href: "",
          },
          {
            name: "Soundpeats",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "Sennheiser",
            href: "",
          },
          {
            name: "Beats",
            href: "",
          },
          {
            name: "ASUS",
            href: "",
          },
          {
            name: "Soul",
            href: "",
          },
          {
            name: "Havit",
            href: "",
          },
          {
            name: "Edifier",
            href: "",
          },
        ],
      },
      {
        title: "Chọn theo giá",
        content: [
          {
            name: "Tai nghe dưới 200K",
            href: "",
          },
          {
            name: "Tai nghe dưới 500K",
            href: "",
          },
          {
            name: "Tai nghe dưới 1 triệu",
            href: "",
          },
          {
            name: "Tai nghe dưới 2 triệu",
            href: "",
          },
          {
            name: "Tai nghe dưới 5 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Chọn loại loa",
        content: [
          {
            name: "Loa Bluetooth",
            href: "",
          },
          {
            name: "Loa mini",
            href: "",
          },
          {
            name: "Loa Karaoke",
            href: "",
          },
          {
            name: "Loa Soundbar",
            href: "",
          },
          {
            name: "Loa vi tính",
            href: "",
          },
          {
            name: "Xem tất cả loa",
            href: "",
          },
        ],
      },
      {
        title: "Hãng loa",
        content: [
          {
            name: "JBL",
            href: "",
          },
          {
            name: "LG",
            href: "",
          },
          {
            name: "Sony",
            href: "",
          },
          {
            name: "Marshall",
            href: "",
          },
          {
            name: "Harman Kardon",
            href: "",
          },
          {
            name: "Thonsmart",
            href: "",
          },
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "Edifier",
            href: "",
          },
          {
            name: "Nowgo",
            href: "",
          },
          {
            name: "Nanomax",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm nổi bật",
        content: [
          {
            name: "AirPods Pro 2",
            href: "",
          },
          {
            name: "AirPods 2",
            href: "",
          },
          {
            name: "Galaxy Buds 3",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: CgAppleWatch,
    categories: [
      {
        title: "Đồng hồ",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0558`,
      },
      {
        title: "Camera",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee0559`,
      },
    ],
    children: [
      {
        title: "Loại đồng hồ",
        content: [
          {
            name: "Đồng hồ thông minh",
            href: "",
          },
          {
            name: "Vòng đeo tay thông minh",
            href: "",
          },
          {
            name: "Đồng hồ định vị trẻ em",
            href: "",
          },
          {
            name: "Dây đeo",
            href: "",
          },
        ],
      },
      {
        title: "Chọn theo thương hiệu",
        content: [
          {
            name: "Apple Watch",
            href: "",
          },
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "Huawei",
            href: "",
          },
          {
            name: "Coros",
            href: "",
          },
          {
            name: "Garmin",
            href: "",
          },
          {
            name: "Kieslect",
            href: "",
          },
          {
            name: "Amazfit",
            href: "",
          },
          {
            name: "Black Shark",
            href: "",
          },
          {
            name: "Mibro",
            href: "",
          },
          {
            name: "Masstel",
            href: "",
          },
          {
            name: "Haylou",
            href: "",
          },
          {
            name: "Kospet",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm nổi bật",
        content: [
          {
            name: "Apple Watch Series 9",
            href: "",
          },
          {
            name: "Samsung Galaxy Watch 7",
            href: "",
          },
          {
            name: "Samsung Galaxy Watch Ultra",
            href: "",
          },
        ],
      },
      {
        title: "Camera",
        content: [
          {
            name: "Camera an ninh",
            href: "",
          },
          {
            name: "Camera hành trình",
            href: "",
          },
          {
            name: "Action camera",
            href: "",
          },
          {
            name: "Gimbal",
            href: "",
          },
          {
            name: "Tripod",
            href: "",
          },
          {
            name: "Máy ảnh",
            href: "",
          },
          {
            name: "Flycam",
            href: "",
          },
          {
            name: "Xem tất cả camera",
            href: "",
          },
        ],
      },
      {
        title: "Camera nổi bật",
        content: [
          {
            name: "Camera an ninh Imou",
            href: "",
          },
          {
            name: "Camera an ninh Ezviz",
            href: "",
          },
          {
            name: "Camera an ninh Xiaomi",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: BsFillHouseHeartFill,
    categories: [
      {
        title: "Đồ gia dụng",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee055a`,
      },
    ],
    children: [
      {
        title: "Gia dụng nhà bếp",
        content: [
          {
            name: "Nồi chiên không dầu",
            href: "",
          },
          {
            name: "Máy rửa bát",
            href: "",
          },
          {
            name: "Lò vi sóng",
            href: "",
          },
          {
            name: "Nồi cơm điện",
            href: "",
          },
          {
            name: "Máy xay sinh tố",
            href: "",
          },
          {
            name: "Máy ép trái cây",
            href: "",
          },
          {
            name: "Máy làm sữa hạt",
            href: "",
          },
          {
            name: "Bếp điện",
            href: "",
          },
          {
            name: "Ấm siêu tốc",
            href: "",
          },
          {
            name: "Nồi áp suất",
            href: "",
          },
          {
            name: "Nồi nấu chậm",
            href: "",
          },
          {
            name: "Máy ép chậm",
            href: "",
          },
        ],
      },
      {
        title: "Sức khỏe - Làm đẹp",
        content: [
          {
            name: "Máy lọc không khí",
            href: "",
          },
          {
            name: "Máy đo huyết áp",
            href: "",
          },
          {
            name: "Máy sấy tóc",
            href: "",
          },
          {
            name: "Máy massage",
            href: "",
          },
          {
            name: "Máy cạo râu",
            href: "",
          },
          {
            name: "Cân sức khoẻ",
            href: "",
          },
          {
            name: "Bàn chải điện",
            href: "",
          },
          {
            name: "Máy tăm nước",
            href: "",
          },
          {
            name: "Tông đơ cắt tóc",
            href: "",
          },
        ],
      },
      {
        title: "Thiết bị gia đình",
        content: [
          {
            name: "Robot hút bụi",
            href: "",
          },
          {
            name: "Quạt",
            href: "",
          },
          {
            name: "Máy hút bụi cầm tay",
            href: "",
          },
          {
            name: "Máy rửa chén",
            href: "",
          },
          {
            name: "TV Box",
            href: "",
          },
          {
            name: "Máy chiếu",
            href: "",
          },
          {
            name: "Đèn thông minh",
            href: "",
          },
          {
            name: "Bàn ủi",
            href: "",
          },
          {
            name: "Chăm sóc thú cưng",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm nổi bật",
        content: [
          {
            name: "Robot hút bụi Dreame X40 Ultra",
            href: "",
          },
          {
            name: "Máy chơi game Sony PlayStation 5",
            href: "",
          },
          {
            name: "Máy chiếu Beecube X2 Max Gen 3",
            href: "",
          },
          {
            name: "Robot hút bụi Ecovacs X5 Pro Omni",
            href: "",
          },
          {
            name: "Máy Massage cổ Breo N5 Mini",
            href: "",
          },
          {
            name: "Robot hút bụi Xiaomi S20",
            href: "",
          },
          {
            name: "Máy lọc không khí Xiaomi",
            href: "",
          },
          {
            name: "Robot hút bụi Ecovacs",
            href: "",
          },
        ],
      },
      {
        title: "Thương hiệu gia dụng",
        content: [
          {
            name: "Philips",
            href: "",
          },
          {
            name: "Kangaroo",
            href: "",
          },
          {
            name: "Panasonic",
            href: "",
          },
          {
            name: "Sunhouse",
            href: "",
          },
          {
            name: "Sharp",
            href: "",
          },
          {
            name: "Cosori",
            href: "",
          },
          {
            name: "Bear",
            href: "",
          },
          {
            name: "Bluestone",
            href: "",
          },
          {
            name: "Dreame",
            href: "",
          },
          {
            name: "Kalite",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "Cuckoo",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: BsUsbPlug,
    categories: [
      {
        title: "Phụ kiện",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee055b`,
      },
    ],
    children: [
      {
        title: "Phụ kiện di động",
        content: [
          {
            name: "Phụ kiện Apple",
            href: "",
          },
          {
            name: "Dán màn hình",
            href: "",
          },
          {
            name: "Ốp lưng - Bao da",
            href: "",
          },
          {
            name: "Thẻ nhớ",
            href: "",
          },
          {
            name: "Apple Care+",
            href: "",
          },
          {
            name: "Samsung Care+",
            href: "",
          },
          {
            name: "Sim 4G",
            href: "",
          },
          {
            name: "Cáp, sạc",
            href: "",
          },
          {
            name: "Pin dự phòng",
            href: "",
          },
          {
            name: "Phụ kiện điện thoại",
            href: "",
          },
        ],
      },
      {
        title: "Phụ kiện laptop",
        content: [
          {
            name: "Chuột, bàn phím",
            href: "",
          },
          {
            name: "Balo Laptop | Túi chống sốc",
            href: "",
          },
          {
            name: "Phần mềm",
            href: "",
          },
          {
            name: "Webcam",
            href: "",
          },
          {
            name: "Giá đỡ",
            href: "",
          },
          {
            name: "Thảm, lót chuột",
            href: "",
          },
          {
            name: "Sạc laptop",
            href: "",
          },
          {
            name: "Camera phòng họp",
            href: "",
          },
        ],
      },
      {
        title: "Thiết bị mạng",
        content: [
          {
            name: "Thiết bị phát sóng WiFi",
            href: "",
          },
          {
            name: "Bộ phát wifi di động",
            href: "",
          },
          {
            name: "Bộ kích sóng WiFi",
            href: "",
          },
          {
            name: "Xem tất cả thiết bị mạng",
            href: "",
          },
        ],
      },
      {
        title: "Gaming Gear",
        content: [
          {
            name: "PlayStation",
            href: "",
          },
          {
            name: "ROG Ally",
            href: "",
          },
          {
            name: "MSI Claw",
            href: "",
          },
          {
            name: "Bàn phím Gaming",
            href: "",
          },
          {
            name: "Chuột chơi game",
            href: "",
          },
          {
            name: "Tai nghe Gaming",
            href: "",
          },
          {
            name: "Tay cầm chơi game",
            href: "",
          },
          {
            name: "Xem tất cả Gaming Gear",
            href: "",
          },
        ],
      },
      {
        title: "Phụ kiện khác",
        content: [
          {
            name: "Dây đeo đồng hồ",
            href: "",
          },
          {
            name: "Dây đeo Airtag",
            href: "",
          },
          {
            name: "Phụ kiện tiện ích",
            href: "",
          },
          {
            name: "Phụ kiện ô tô",
            href: "",
          },
          {
            name: "Đồ chơi trẻ em",
            href: "",
          },
          {
            name: "Trạm sạc dự phòng",
            href: "",
          },
        ],
      },
      {
        title: "Thiết bị lưu trữ",
        content: [
          {
            name: "Thẻ nhớ",
            href: "",
          },
          {
            name: "USB",
            href: "",
          },
          {
            name: "Ổ cứng di động",
            href: "",
          },
        ],
      },
      {
        title: "Phụ kiện Hot",
        content: [
          {
            name: "Ốp lưng iPhone 15",
            href: "",
          },
          {
            name: "Dán màn hình iPhone 15",
            href: "",
          },
          {
            name: "Cáp sạc iPhone 15",
            href: "",
          },
          {
            name: "Ốp lưng Z Flip 5",
            href: "",
          },
          {
            name: "Dán màn hình S24 Ultra | Plus",
            href: "",
          },
          {
            name: "Ốp lưng S24 Ultra | Plus",
            href: "",
          },
          {
            name: "DJI Mini 3",
            href: "",
          },
          {
            name: "DJI Air 3",
            href: "",
          },
          {
            name: "Săn deal đồng giá",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: GiPc,
    categories: [
      {
        title: "PC",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee055c`,
      },
      {
        title: "Màn hình",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee055d`,
      },
      {
        title: "Máy in",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee055e`,
      },
    ],
    children: [
      {
        title: "Loại PC",
        content: [
          {
            name: "Build PC",
            href: "",
          },
          {
            name: "Cấu hình sẵn",
            href: "",
          },
          {
            name: "All In One",
            href: "",
          },
          {
            name: "PC bộ",
            href: "",
          },
        ],
      },
      {
        title: "Chọn PC theo nhu cầu",
        content: [
          {
            name: "Gaming",
            href: "",
          },
          {
            name: "Đồ họa",
            href: "",
          },
          {
            name: "Văn phòng",
            href: "",
          },
        ],
      },
      {
        title: "Linh kiện máy tính",
        content: [
          {
            name: "CPU",
            href: "",
          },
          {
            name: "Main",
            href: "",
          },
          {
            name: "RAM",
            href: "",
          },
          {
            name: "Ổ cứng",
            href: "",
          },
          {
            name: "Nguồn",
            href: "",
          },
          {
            name: "VGA",
            href: "",
          },
          {
            name: "Tản nhiệt",
            href: "",
          },
          {
            name: "Case",
            href: "",
          },
          {
            name: "Xem tất cả",
            href: "",
          },
        ],
      },
      {
        title: "Chọn màn hình theo hãng",
        content: [
          {
            name: "ASUS",
            href: "",
          },
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "DELL",
            href: "",
          },
          {
            name: "LG",
            href: "",
          },
          {
            name: "MSI",
            href: "",
          },
          {
            name: "Acer",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "ViewSonic",
            href: "",
          },
          {
            name: "Philips",
            href: "",
          },
          {
            name: "AOC",
            href: "",
          },
        ],
      },
      {
        title: "Chọn mafnm hình theo nhu cầu",
        content: [
          {
            name: "Gaming",
            href: "",
          },
          {
            name: "Văn phòng",
            href: "",
          },
          {
            name: "Đồ họa",
            href: "",
          },
          {
            name: "Lập trình",
            href: "",
          },
          {
            name: "Màn hình di động",
            href: "",
          },
          {
            name: "Arm màn hình",
            href: "",
          },
          {
            name: "Xem tất cả",
            href: "",
          },
        ],
      },
      {
        title: "Gaming Gear",
        content: [
          {
            name: "PlayStation",
            href: "",
          },
          {
            name: "ROG Ally",
            href: "",
          },
          {
            name: "Bàn phím Gaming",
            href: "",
          },
          {
            name: "Chuột chơi game",
            href: "",
          },
          {
            name: "Tai nghe Gaming",
            href: "",
          },
          {
            name: "Tay cầm chơi Game",
            href: "",
          },
          {
            name: "Xem tất cả",
            href: "",
          },
        ],
      },
      {
        title: "Thiết bị văn phòng",
        content: [
          {
            name: "PlayStation",
            href: "",
          },
          {
            name: "ROG Ally",
            href: "",
          },
          {
            name: "Bàn phím Gaming",
            href: "",
          },
          {
            name: "Chuột chơi game",
            href: "",
          },
          {
            name: "Tai nghe Gaming",
            href: "",
          },
          {
            name: "Tay cầm chơi Game",
            href: "",
          },
          {
            name: "Xem tất cả",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: HiOutlineTv,
    categories: [
      {
        title: "Tivi",
        href: `${config.routes.product}?categoryid=66ebc5dea9bfeced32ee055f`,
      },
    ],
    children: [
      {
        title: "Chọn theo hãng",
        content: [
          {
            name: "Samsung",
            href: "",
          },
          {
            name: "LG",
            href: "",
          },
          {
            name: "Xiaomi",
            href: "",
          },
          {
            name: "Coocaa",
            href: "",
          },
          {
            name: "Sony",
            href: "",
          },
          {
            name: "Toshiba",
            href: "",
          },
          {
            name: "TCL",
            href: "",
          },
          {
            name: "Hisense",
            href: "",
          },
        ],
      },
      {
        title: "Chọn theo mức giá",
        content: [
          {
            name: "Dưới 5 triệu",
            href: "",
          },
          {
            name: "Từ 5 - 9 triệu",
            href: "",
          },
          {
            name: "Từ 9 - 12 triệu",
            href: "",
          },
          {
            name: "Từ 12 - 15 triệu",
            href: "",
          },
          {
            name: "Trên 15 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Chọn theo độ phân giải",
        content: [
          {
            name: "Tivi 4K",
            href: "",
          },
          {
            name: "Tivi 8K",
            href: "",
          },
          {
            name: "Tivi Full HD",
            href: "",
          },
          {
            name: "Tivi OLED",
            href: "",
          },
          {
            name: "Tivi QLED",
            href: "",
          },
          {
            name: "Android Tivi",
            href: "",
          },
        ],
      },
      {
        title: "Chọn theo kích thước",
        content: [
          {
            name: "Tivi 32 inch",
            href: "",
          },
          {
            name: "Tivi 43 inch",
            href: "",
          },
          {
            name: "Tivi 50 inch",
            href: "",
          },
          {
            name: "Tivi 55 inch",
            href: "",
          },
          {
            name: "Tivi 65 inch",
            href: "",
          },
          {
            name: "Tivi 70 inch",
            href: "",
          },
          {
            name: "Tivi 85 inch",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm nổi bật",
        content: [
          {
            name: "Xiaomi TV Max 86 inch",
            href: "",
          },
          {
            name: "Tivi Xiaomi A Pro 55 inch 4K",
            href: "",
          },
          {
            name: "Tivi LG Stanby Me 27inch",
            href: "",
          },
          {
            name: 'Tivi Coocaa 4K 70" 70C9',
            href: "",
          },
          {
            name: "Tivi Xiaomi A 32 inch HD",
            href: "",
          },
          {
            name: 'Tivi Samsung QLED 55" 55Q60BAK',
            href: "",
          },
          {
            name: "Giá treo tivi",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: IoPhonePortraitOutline,
    categories: [
      {
        title: "Thu cũ đổi mới",
        href: "",
      },
    ],
    children: [
      {
        title: "Chọn theo hãng",
        content: [
          {
            name: "Thu cũ iPhone",
            href: "",
          },
          {
            name: "Thu cũ Samsung",
            href: "",
          },
          {
            name: "Thu cũ Xiaomi",
            href: "",
          },
          {
            name: "Thu cũ Laptop",
            href: "",
          },
          {
            name: "Thu cũ Mac",
            href: "",
          },
          {
            name: "Thu cũ iPad",
            href: "",
          },
          {
            name: "Thu cũ đồng hồ",
            href: "",
          },
          {
            name: "Thu cũ Apple Watch",
            href: "",
          },
          {
            name: "Thu cũ 2G",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm trợ giá cao",
        content: [
          {
            name: "iPhone 15 Pro Max » 2 triệu",
            href: "",
          },
          {
            name: "iPhone 14 Pro Max » 2 triệu",
            href: "",
          },
          {
            name: "Galaxy S23 Ultra » 2 triệu",
            href: "",
          },
          {
            name: "Galaxy Z Fold 5 » 2 triệu",
            href: "",
          },
          {
            name: "Galaxy Z Flip 5 » 2 triệu",
            href: "",
          },
          {
            name: "Galaxy Tab S9 » 500K",
            href: "",
          },
          {
            name: "OPPO Find N3 » 5 triệu",
            href: "",
          },
          {
            name: "Oppo Find N3 Flip » 3 triệu",
            href: "",
          },
          {
            name: "Macbook » 2 triệu",
            href: "",
          },
          {
            name: "Laptop » 3 triệu",
            href: "",
          },
          {
            name: "Máy chơi game Rog Ally » 2 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm giá thu cao",
        content: [
          {
            name: "iPhone 15 Pro Max",
            href: "",
          },
          {
            name: "iPhone 14 Pro Max",
            href: "",
          },
          {
            name: "iPhone 13 Pro Max",
            href: "",
          },
          {
            name: "Samsung Galaxy Z Fold 5",
            href: "",
          },
          {
            name: "Samsung Galaxy Z Flip 5",
            href: "",
          },
          {
            name: "Samsung Galaxy S24 Ultra",
            href: "",
          },
          {
            name: "Macbook Air M1",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: BsPhoneFlip,
    categories: [
      {
        title: "Hàng cũ",
        href: "",
      },
    ],
    children: [
      {
        title: "Chọn loại sản phẩm cũ",
        content: [
          {
            name: "Điện thoại cũ",
            href: "",
          },
          {
            name: "Máy tính bảng cũ",
            href: "",
          },
          {
            name: "Mac cũ",
            href: "",
          },
          {
            name: "Laptop cũ",
            href: "",
          },
          {
            name: "Tai nghe cũ",
            href: "",
          },
          {
            name: "Loa cũ",
            href: "",
          },
          {
            name: "Đồng hồ thông minh cũ",
            href: "",
          },
          {
            name: "Nhà thông minh cũ",
            href: "",
          },
          {
            name: "Màn hình cũ",
            href: "",
          },
          {
            name: "Phụ kiện cũ",
            href: "",
          },
          {
            name: "Tivi Cũ",
            href: "",
          },
        ],
      },
      {
        title: "Chọn dòng iPhone cũ",
        content: [
          {
            name: "iPhone 15 series cũ",
            href: "",
          },
          {
            name: "iPhone 14 series cũ",
            href: "",
          },
          {
            name: "iPhone 13 series cũ",
            href: "",
          },
          {
            name: "iPhone 12 series cũ",
            href: "",
          },
          {
            name: "iPhone 11 series cũ",
            href: "",
          },
          {
            name: "Xem tất cả iPhone cũ",
            href: "",
          },
        ],
      },
      {
        title: "Điện thoại Android cũ",
        content: [
          {
            name: "Samsung cũ",
            href: "",
          },
          {
            name: "Xiaomi cũ",
            href: "",
          },
          {
            name: "OPPO cũ",
            href: "",
          },
          {
            name: "Nokia cũ",
            href: "",
          },
          {
            name: "realme cũ",
            href: "",
          },
          {
            name: "vivo cũ",
            href: "",
          },
          {
            name: "ASUS cũ",
            href: "",
          },
          {
            name: "TCL cũ",
            href: "",
          },
          {
            name: "Infinix cũ",
            href: "",
          },
        ],
      },
      {
        title: "Chọn hãng laptop cũ",
        content: [
          {
            name: "Laptop Dell cũ",
            href: "",
          },
          {
            name: "Laptop ASUS cũ",
            href: "",
          },
          {
            name: "Laptop Acer cũ",
            href: "",
          },
          {
            name: "Laptop HP cũ",
            href: "",
          },
          {
            name: "Laptop Surface cũ",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm nổi bật",
        content: [
          {
            name: "iPhone 15 Series Cũ",
            href: "",
          },
          {
            name: "iPhone 14 Series cũ",
            href: "",
          },
          {
            name: "iPhone 13 Series cũ",
            href: "",
          },
          {
            name: "Apple Watch Se 44mm 4G cũ đẹp",
            href: "",
          },
          {
            name: "Samsung Galaxy Z Flip4 cũ đẹp",
            href: "",
          },
          {
            name: "Xiaomi 12T Pro cũ đẹp",
            href: "",
          },
          {
            name: "Xiaomi 12T cũ đẹp",
            href: "",
          },
          {
            name: "Oppo Find N2 Flip đã kích hoạt",
            href: "",
          },
        ],
      },
      {
        title: "Sản phẩm Apple cũ",
        content: [
          {
            name: "Apple Watch cũ",
            href: "",
          },
          {
            name: "iPad cũ",
            href: "",
          },
        ],
      },
      {
        title: "Chọn tivi cũ",
        content: [
          {
            name: "Tivi cũ",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: TbSpeakerphone,
    categories: [
      {
        title: "Khuyến mãi",
        href: "",
      },
    ],
    children: [
      {
        title: "Khuyến mãi",
        content: [
          {
            name: "Hotsale cuối tuần",
            href: "",
          },
          {
            name: "Siêu sale phụ kiện",
            href: "",
          },
          {
            name: "Ưu đãi thanh toán",
            href: "",
          },
          {
            name: "Thu cũ 2G trợ giá đến 500k",
            href: "",
          },
          {
            name: "Khách hàng doanh nghiệp B2B",
            href: "",
          },
        ],
      },
      {
        title: "Thu cũ đổi giá hời",
        content: [
          {
            name: "iPhone 15 trợ giá đến 2 triệu",
            href: "",
          },
          {
            name: "Galaxy Z Fold5 trợ giá 2 triệu",
            href: "",
          },
          {
            name: "OnePlus Nord 3 trợ giá 2 triệu",
            href: "",
          },
          {
            name: "Laptop trợ giá đến 3 triệu",
            href: "",
          },
          {
            name: "Đồng hồ trợ giá đến 1 triệu",
            href: "",
          },
        ],
      },
      {
        title: "Ưu đãi thành viên",
        content: [
          {
            name: "Nâng cấp chính sách Smember 3.0",
            href: "",
          },
        ],
      },
      {
        title: "Ưu đãi sinh viên",
        content: [
          {
            name: "Tựu trường lên deal chiến HOT and NEW",
            href: "",
          },
          {
            name: "Đăng ký S-Student HOT and NEW",
            href: "",
          },
          {
            name: "Laptop giảm đến 800K",
            href: "",
          },
          {
            name: "Điện thoại giảm đến 6%",
            href: "",
          },
          {
            name: "Đồng hồ giảm thêm 6%",
            href: "",
          },
          {
            name: "Loa - tai nghe giảm thêm 5%",
            href: "",
          },
          {
            name: "Máy chơi game giảm thêm 5%",
            href: "",
          },
          {
            name: "Hàng cũ giảm thêm 5%",
            href: "",
          },
          {
            name: "Ưu đãi học viên Edu Talk",
            href: "",
          },
          {
            name: "Ưu đãi học viên Teky",
            href: "",
          },
        ],
      },
    ],
  },
  {
    icon: GiNewspaper,
    categories: [
      {
        title: "Tin công nghệ",
        href: "",
      },
    ],
    children: [
      {
        title: "Chuyên mục",
        content: [
          {
            name: "Tin công nghệ",
            href: "",
          },
          {
            name: "Khám phá",
            href: "",
          },
          {
            name: "S-Games",
            href: "",
          },
          {
            name: "Tư vấn",
            href: "",
          },
          {
            name: "Trên tay",
            href: "",
          },
          {
            name: "Thị trường",
            href: "",
          },
          {
            name: "Thủ thuật - Hỏi đáp",
            href: "",
          },
        ],
      },
    ],
  },
];
