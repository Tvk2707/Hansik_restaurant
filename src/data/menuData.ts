import { MenuItem, SpaceGalleryItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pho-bo-dac-biet',
    name: 'Phở bò đặc biệt',
    price: 89000,
    priceFormatted: '89.000đ',
    category: 'best-seller',
    isBestSeller: true,
    tags: ['Best Seller', 'Đặc sản'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvBsZ8SGzhKjNTYEi-aew_RhiEhI7J2qrRfYNbfZkTlHm60TD8FiRsM47AYHhSrIp976LnRycuILJvsuba4oEdp2l9s4TxpUR9ECUR2ul4JpIvQVngbw_pwCcJ9KLAKGrspj4IXTIsv-NfVRYdWhBr59vXp_m3wiBDD9qaylZlbmswnt-n7aFUwh2s1OeERHf1KWJIXMDBKPX2W1hdDE88ypW5aU_lGHVhcJ_WaD_EdgIoGd1QXPUxxQWuJ',
    description: 'Nước dùng hầm xương 24h thanh ngọt đậm đà, thăn bò Wagyu thượng hạng cùng bánh phở thủ công mềm mướt.',
    ingredients: ['Thăn bò Wagyu', 'Nước dùng hầm 24 tiếng', 'Bánh phở tráng tay', 'Hành hoa', 'Thảo mộc tự nhiên'],
    spiceLevel: 0
  },
  {
    id: 'ca-kho-to',
    name: 'Cá kho tộ',
    price: 119000,
    priceFormatted: '119.000đ',
    category: 'best-seller',
    isBestSeller: true,
    tags: ['Best Seller', 'Cơm nhà'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLs9EZD74eFhAigx9e7oU6FoQwrb8ET9yVhzaVeHBi0GSzbv32klVrl57lBbrWikfpWh3plcFMl6o-gUiXLlmjgNQPCFxwQA98fTjMS5-ANGhoo4_wvRNYAgtoQn-LoKFitZD-do1lyH2ywRC7UWxftcELcK-IB7VbOjEmK4a9h-DMiaV3f40Xy1uND4tgztE4gUJCSAF2UVwl6B2piP-se5HXNRPRmQMBu8MZdmeaSerW1G9Rr4L5wsgtm0',
    description: 'Cá lóc tươi kho quẹt kẹo, thơm lừng tiêu xanh và ớt hiểm trong tộ đất sét truyền thống.',
    ingredients: ['Cá lóc đồng', 'Nước mắm nhĩ Phú Quốc', 'Tiêu xanh', 'Ớt hiểm', 'Thịt ba chỉ'],
    spiceLevel: 1
  },
  {
    id: 'com-sen-ngu-vi',
    name: 'Cơm sen ngũ vị',
    price: 129000,
    priceFormatted: '129.000đ',
    category: 'best-seller',
    isBestSeller: true,
    tags: ['Best Seller', 'Chữ ký Sen Vàng'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuruEulPDu_hrtYSsVGtWq4_YR2pMsvY9IRuXxW0CmqYZBuZPBXTO53gOaa9_iiLLLYBdpbOHpsFc1RIkWUQY2oOBluht07sr9dUNS6Xe_qR2wRn_migE4bkre5igta2up_rdSS-LIGUW_ArTbAZx5AiVbiFEYkxbhcTDj43c6Z3zWUuFW7hGt5rEX30RmaVR6HxVYmtVXFw6FWpnTj2bEeB78xjfAl98yiqlMTM21drrDUOOMNs3CWHZc',
    description: 'Cơm chiên hạt sen bùi béo, lạp xưởng, tôm khô gói trọn trong lá sen thơm ngát thanh tao.',
    ingredients: ['Hạt sen Đồng Tháp', 'Tôm khô', 'Lạp xưởng tươi', 'Cà rốt', 'Đậu Hà Lan', 'Lá sen'],
    spiceLevel: 0
  },
  {
    id: 'lau-rieu-cua-dong',
    name: 'Lẩu riêu cua đồng',
    price: 249000,
    priceFormatted: '249.000đ',
    category: 'best-seller',
    isBestSeller: true,
    isNew: true,
    tags: ['Best Seller', 'Món mới'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLukBIk0G-1x2IzyP-sp9js1l0v9Xknv8KcYly0pES4dOnM1K0NRBS1sR9yp4ttMB87NQygA8csDFEfOiZf0qWieI4rIs-ZnT0iuXsGGzj50k2vJsBMrfKNEnRX2BX3-wx6cxrQOOm_q8eFoFG2T4pu-n--rnk3PojfFOSkMW_iIPRYs_Ot-sezktVchcaIRfUbbRfXegl9pAUKyJZle2b-IjKVOrILnSazQ27cUM6irEo8_1tUDwqBRHXPp',
    description: 'Nước lẩu ngọt thanh từ cua đồng tươi, ăn kèm bắp bò bắp và rau muống chẻ, hoa chuối dân dã.',
    ingredients: ['Cua đồng tươi giã tay', 'Bắp bò hoa', 'Đậu hũ chiên giòn', 'Cà chua', 'Rau sống theo mùa'],
    spiceLevel: 1
  },
  {
    id: 'bun-cha-ha-noi',
    name: 'Bún chả Hà Nội',
    price: 95000,
    priceFormatted: '95.000đ',
    category: 'main',
    isBestSeller: true,
    tags: ['Best Seller', 'Hà Nội'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7soO-ksrIK5TWxmL2YAQnoKqu7igr2NzI3WMp0OrBi_6lNoU9jzYnhgCHlON7YOZCu95qe0Gxk7LSwna-7CnGIfxaaKx6gI_SwErj8BOBbjy3mHgm5o-KU3DWP2dK_fL7NxJacF_oHANx4WJs7S5mBK0vkva32vnx76IY_5xhqcwPHxLOyKA7TjnkEX54QjPEb8oxDlg3oG0GMeBiE7GNjcd8nLFn4WWgFKd4v0JeC8xYljsGQ3-eBg',
    description: 'Chả nướng than hoa thơm phức, nước chấm chua ngọt tinh tế ăn kèm bún rối và rau sống tươi mát.',
    ingredients: ['Thịt ba chỉ nướng', 'Chả viên nướng than', 'Nước mắm dấm đu đủ', 'Bún tươi', 'Rau thơm các loại'],
    spiceLevel: 0
  },
  {
    id: 'ga-nuong-la-sen',
    name: 'Gà nướng lá sen',
    price: 139000,
    priceFormatted: '139.000đ',
    category: 'new',
    isNew: true,
    tags: ['Món mới', 'Độc đáo'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzH69phOCK0n0HZFo6kk4m04ds-rGlXblDWTYAYFqljorYshHuGJenNykWB4MrrvIIDI_5kEfpXvJvpkPx_bgY_k0psmZ7ICqEbepDrCjzmsvIHgjqxpQsc9ZOv3ZcgtHwUkTV-erYUJz-YIqI8dJD3h3fH74YPooITXDhQUZ9YDgHIe9GXvMXCSU1puHvR72DNx8GzuEqxEWicYCtOfiJgt3IO4Q9DQiPLepxAKXxoqu-mRz62erx0A',
    description: 'Gà đồi ướp gia vị đặc biệt nướng nguyên con trong bọc lá sen giữ trọn vị ngọt thơm mềm bộc lộ.',
    ingredients: ['Gà đồi thả vườn', 'Gia vị thảo mộc', 'Sả củ', 'Lá sen tươi', 'Muối ớt chanh'],
    spiceLevel: 1
  },
  {
    id: 'salad-sen-tom-su',
    name: 'Salad sen tôm sú',
    price: 109000,
    priceFormatted: '109.000đ',
    category: 'new',
    isNew: true,
    tags: ['Món mới', 'Khai vị'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAa1B4uqdekb05Ft0hMqt08Sl1Buj-MgYozTS3jOB0xvH8TCIAw2WcplLklKYiilbAELrhMgbcasLn2vF94Nr2dtd_JB-j8HHVFSF_RZJm5-1NEKeVOFNj54L50F1hg6oyvrpiEGzBcH3OjswBFypgqjAA5MQcxcCB1LnyzCGbCdcKyIYERCT-IcKW9_ZptQUNiVIqELqQ_VE3Vkb1XIMbpQi4-3tV4gLS-m_go-YSGysvq-0_aXcSHug',
    description: 'Ngó sen giòn giòn, tôm sú tươi ngọt hòa quyện cùng nước trộn chua ngọt thanh mát dễ ăn.',
    ingredients: ['Ngó sen tươi', 'Tôm sú hấp', 'Cà rốt', 'Rau răm', 'Đậu phụng rang', 'Hành phi'],
    spiceLevel: 0
  },
  {
    id: 'che-com-hat-sen',
    name: 'Chè cốm hạt sen',
    price: 59000,
    priceFormatted: '59.000đ',
    category: 'new',
    isNew: true,
    tags: ['Món mới', 'Tráng miệng'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALH0ReJnkRmZ7yh2rfQqy0pQm9TaNIo3wOqqT-kpSsQ8NGghN1eajU_Z72X97Mn2yvr17ncc1Y31dmNYC8DdAUbxH7qHf3WX6tM_2oRQEzm04uU1MlGFr81gGxfc8g9o4bndYf1aAEAKCx1vcGet4Qkqu6wzSw68fbSD8QjEOcZaqFxtyCs7kTfcx96Xi_UTa-itHor5yM7Zons6RohnTxRDH1Vjt0bBYwzN4CbAZG9FUEw537MivcNw',
    description: 'Món tráng miệng đậm đà hương thu Hà Nội với cốm dẻo thơm nức và hạt sen bùi ngậy.',
    ingredients: ['Cốm làng Vòng', 'Hạt sen tươi', 'Bột sắn dây', 'Nước cốt dừa thơm'],
    spiceLevel: 0
  },
  {
    id: 'nem-cua-be',
    name: 'Nem cua bể Hải Phòng',
    price: 145000,
    priceFormatted: '145.000đ',
    category: 'main',
    isBestSeller: true,
    tags: ['Đặc sản', 'Hải Phòng'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvBsZ8SGzhKjNTYEi-aew_RhiEhI7J2qrRfYNbfZkTlHm60TD8FiRsM47AYHhSrIp976LnRycuILJvsuba4oEdp2l9s4TxpUR9ECUR2ul4JpIvQVngbw_pwCcJ9KLAKGrspj4IXTIsv-NfVRYdWhBr59vXp_m3wiBDD9qaylZlbmswnt-n7aFUwh2s1OeERHf1KWJIXMDBKPX2W1hdDE88ypW5aU_lGHVhcJ_WaD_EdgIoGd1QXPUxxQWuJ',
    description: 'Nem vuông giòn rụm, nhân cua bể tươi ngon đậm đà hương vị biển mặn mòi.',
    ingredients: ['Thịt cua bể', 'Thịt heo băm', 'Mộc nhĩ', 'Miến dong', 'Bánh đa nem'],
    spiceLevel: 0
  },
  {
    id: 'banh-xeo-tom-nhay',
    name: 'Bánh xèo tôm nhảy',
    price: 85000,
    priceFormatted: '85.000đ',
    category: 'main',
    isBestSeller: false,
    tags: ['Miền Trung'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLs9EZD74eFhAigx9e7oU6FoQwrb8ET9yVhzaVeHBi0GSzbv32klVrl57lBbrWikfpWh3plcFMl6o-gUiXLlmjgNQPCFxwQA98fTjMS5-ANGhoo4_wvRNYAgtoQn-LoKFitZD-do1lyH2ywRC7UWxftcELcK-IB7VbOjEmK4a9h-DMiaV3f40Xy1uND4tgztE4gUJCSAF2UVwl6B2piP-se5HXNRPRmQMBu8MZdmeaSerW1G9Rr4L5wsgtm0',
    description: 'Vỏ bánh mỏng giòn tan, nhân tôm đất nhảy lách tách tươi rói ăn kèm rau sống.',
    ingredients: ['Bột gạo', 'Tôm đất tươi', 'Giá đỗ', 'Hành lá', 'Rau sống các loại'],
    spiceLevel: 0
  },
  {
    id: 'cha-ca-la-vong',
    name: 'Chả cá Lã Vọng',
    price: 185000,
    priceFormatted: '185.000đ',
    category: 'main',
    isBestSeller: true,
    tags: ['Đặc sản Hà Nội'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7soO-ksrIK5TWxmL2YAQnoKqu7igr2NzI3WMp0OrBi_6lNoU9jzYnhgCHlON7YOZCu95qe0Gxk7LSwna-7CnGIfxaaKx6gI_SwErj8BOBbjy3mHgm5o-KU3DWP2dK_fL7NxJacF_oHANx4WJs7S5mBK0vkva32vnx76IY_5xhqcwPHxLOyKA7TjnkEX54QjPEb8oxDlg3oG0GMeBiE7GNjcd8nLFn4WWgFKd4v0JeC8xYljsGQ3-eBg',
    description: 'Cá lăng nướng chảo thơm nức mùi thì là, mắm tôm nguyên bản chuẩn vị Hà Nội xưa.',
    ingredients: ['Cá lăng', 'Thì là', 'Hành hoa', 'Lạc rang', 'Mắm tôm', 'Bún rối'],
    spiceLevel: 0
  },
  {
    id: 'bo-luc-lac',
    name: 'Bò lúc lắc',
    price: 165000,
    priceFormatted: '165.000đ',
    category: 'main',
    isBestSeller: false,
    tags: ['Fusion'],
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLuruEulPDu_hrtYSsVGtWq4_YR2pMsvY9IRuXxW0CmqYZBuZPBXTO53gOaa9_iiLLLYBdpbOHpsFc1RIkWUQY2oOBluht07sr9dUNS6Xe_qR2wRn_migE4bkre5igta2up_rdSS-LIGUW_ArTbAZx5AiVbiFEYkxbhcTDj43c6Z3zWUuFW7hGt5rEX30RmaVR6HxVYmtVXFw6FWpnTj2bEeB78xjfAl98yiqlMTM21drrDUOOMNs3CWHZc',
    description: 'Thăn bò thượng hạng xém cạnh mềm ngọt, quyện cùng nước sốt đậm đà và rau củ tươi xanh.',
    ingredients: ['Thăn bò', 'Hành tây', 'Ớt chuông', 'Cà chua bi', 'Sốt lúc lắc đặc biệt'],
    spiceLevel: 0
  }
];

export const SPACE_ITEMS: SpaceGalleryItem[] = [
  {
    id: 'space-main',
    title: 'Không gian gia đình',
    subtitle: 'Ấm cúng & Khoáng đạt',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCD4Dte2pnEKtAhkWg4tqO8MlbA87nfrqbZOL8cI0MlLEaAxlRmG3FpuCyazVA25F3eJkzzV_Wp5XcfQm92Ri981nx-TqK31WVB79GbmzdgskShgsIOO4C2vgckvdV2FvE2tpOb11wSKw5AvrXEGZYwnsbZwQgq_neLkUJFmzHZLedUEnXSNLndWBHAJyT4meOnKsDrM3CMz86VfBJ33xY5D-MFob_I91nt_9aV4mwf11mIzKPRNcknAQ',
    description: 'Thiết kế mở giao thoa ánh sáng tự nhiên và nội thất gỗ mộc mạc, hoàn hảo cho những bữa tiệc gia đình sum vầy.',
    capacity: '2 - 20 người',
    colSpan: 'md:col-span-8'
  },
  {
    id: 'space-romantic',
    title: 'Góc lãng mạn',
    subtitle: 'Riêng tư & Tinh tế',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0bKUeywl0sVdBbpeSBeq1J7l_cG_AmrGIVPhjgQ-3Y_old09YwW4xtt9EjQM1ocqplfBJP-wQkRb_XKU2NNRHRiqgI66ecwMco_jAHLgU9mbOM5iqm8IRhUENXwp6C22PQmQxGqwzlNvNnVv_JxTOkf8NNI4V4BBOgRGORBQGgyh84EKnZi4D-ZAHrmLks_fcyX7N1Wu078yzBxZdtQVlOnhzGf2EMrKNp_YDK-2_Z-zxmPDepHgbTQ',
    description: 'Góc nhỏ ấm cúng với ánh đèn vàng dịu nhẹ, hoa sen tươi trên bàn dành riêng cho các cặp đôi.',
    capacity: '2 người',
    colSpan: 'md:col-span-4'
  },
  {
    id: 'space-vip',
    title: 'Phòng VIP doanh nhân',
    subtitle: 'Sang trọng & Đẳng cấp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFKyWVI7Vxt0OQftd3GY4MM1evyzvG6IksUymrVSPV0IVgh8doMi-aB9bFb9LhzeocINSWL__enZ7uPbOpyybXylgyEzj6I7h643QnNfA7dqFoyzdPXYzK0gmLSQV6IrYEjEw-_zgUc3c_fszFRbcgwoJ3_UoPLU4vCJum2SyP9C4Cb1WAVdTYlOIqPJW0qki80H0FSI6IncP5Cgluom3RE7J6jAt8bunlHyfeX6eiq2XYaKXnTlAmiw',
    description: 'Phòng tiệc riêng cách âm, trang bị bàn gỗ lớn cao cấp cùng dịch vụ phục vụ riêng cho các buổi tiếp khách quan trọng.',
    capacity: '6 - 16 người',
    colSpan: 'md:col-span-4'
  }
];
