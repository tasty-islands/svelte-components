const restaurant = [
  {
    "Name": "제로투나인",
    "Address": "경기 성남시 분당구 운중로146번길 19-3",
    "detailCategoryName": "양식"
  },
  {
    "Name": "생선가게(사카나야)",
    "Address": "경기도 성남시 분당구 대왕판교로 255 1층(궁내동)",
    "detailCategoryName": "일식"
  },
  {
    "Name": "포크포크(판교유스페이스2점)",
    "Address": "경기도 성남시 분당구 대왕판교로 670 지하1층 B104호",
    "detailCategoryName": "기타"
  },
  {
    "Name": "킹스버거(분당점)",
    "Address": "경기도 성남시 분당구 성남대로331번길 9-6 정자동",
    "detailCategoryName": "패스트푸드"
  },
  {
    "Name": "최고야 전국5대짬뽕",
    "Address": "경기도 성남시 분당구 판교로227번길 6 브릿지 타워 1층 116,117호",
    "detailCategoryName": "중식"
  },
  {
    "Name": "킨파",
    "Address": "경기도 성남시 분당구 판교로227번길 6 삼평동, 브릿지 타워 1층",
    "detailCategoryName": "일식"
  },
  {
    "Name": "칠리셔스(Chilicious)",
    "Address": "경기도 성남시 분당구 판교로227번길 6, 1층 108호(삼평동, 브릿지타워)",
    "detailCategoryName": "양식"
  },
  {
    "Name": "하림(판교벤처밸리C)",
    "Address": "경기도 성남시 분당구 판교로228번길 15",
    "detailCategoryName": "기타"
  },
  {
    "Name": "하림(판교벤처밸리B)",
    "Address": "경기도 성남시 분당구 판교로228번길 15",
    "detailCategoryName": "푸드코트"
  },
  {
    "Name": "하림(판교벤처밸리A)",
    "Address": "경기도 성남시 분당구 판교로228번길 15",
    "detailCategoryName": "푸드코트"
  },
  {
    "Name": "하코야(판교우림점)",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 삼평동, 판교 우림 W-CITY, 219호",
    "detailCategoryName": "일식"
  },
  {
    "Name": "소호면가",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 (삼평동, 판교 우림 W-CITY) 2층 225호소호면가",
    "detailCategoryName": "한식"
  },
  {
    "Name": "춘업순댓국과0627부대찌개",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22(삼평동.판교우림w-city)",
    "detailCategoryName": "한식"
  },
  {
    "Name": "뚜레쥬르(판교우림점)",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 삼평동 121호",
    "detailCategoryName": "카페"
  },
  {
    "Name": "려원쭈구미볶음",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22, 지하1층 110호 삼평동, 판교 우림 W-CITY",
    "detailCategoryName": "한식"
  },
  {
    "Name": "키친박스",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 (삼평동, 판교 우림W-CITY)",
    "detailCategoryName": "분식"
  },
  {
    "Name": "꿀돼지두루치기",
    "Address": "경기도 성남시 분당구 삼평동 판교로255 우림W-city 지하106호",
    "detailCategoryName": "한식"
  },
  {
    "Name": "미소한우국밥",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 삼평동 우림W시티 212,213호",
    "detailCategoryName": "한식"
  },
  {
    "Name": "스윗밸런스(판교우림W시티점)",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 삼평동, 222호(판교우림W-CITY)",
    "detailCategoryName": "기타"
  },
  {
    "Name": "양평해장국(판교우림시티점)",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 206호",
    "detailCategoryName": "한식"
  },
  {
    "Name": "제주꺼먹돼지",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 B113호",
    "detailCategoryName": "한식"
  },
  {
    "Name": "모박사부대찌개(판교점)",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22 B118호",
    "detailCategoryName": "한식"
  },
  {
    "Name": "슈퍼커피(판교점)",
    "Address": "경기도 성남시 분당구 판교로255번길 9-22,  2층 217호(삼평동, 판교 우림W-CITY)",
    "detailCategoryName": "카페"
  },
  {
    "Name": "(주)엔바이콘 판교분식",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "분식"
  },
  {
    "Name": "(주)엔바이콘 판교분식_KIOSK",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "분식"
  },
  {
    "Name": "(주)엔바이콘 교소바",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36 NS홈쇼핑 지하1층",
    "detailCategoryName": "일식"
  },
  {
    "Name": "(주)엔바이콘 혼키라멘",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "일식"
  },
  {
    "Name": "(주)엔바이콘 판교순대",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "한식"
  },
  {
    "Name": "(주)엔바이콘 하림닭요리",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "한식"
  },
  {
    "Name": "(주)엔바이콘 하이포크",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "한식"
  },
  {
    "Name": "(주)엔바이콘 왕스덕",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "중식"
  },
  {
    "Name": "(주)엔바이콘 순우가",
    "Address": "경기도 성남시 분당구 대왕판교로645번길 36",
    "detailCategoryName": "한식"
  }
];

export default restaurant;

// export default fill(1000, (i) => {
// 	return {
// 		key: `_${i}`,
// 		name: getName(),
// 		content: createRandomGarbage(),
// 		avatar: avatars[rand(0, avatars.length)]
// 	};
// });