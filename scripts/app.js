const areas = [
  {
    id: 1,
    name: "北海道・東北",
    checked: false,
    prefs: [
      {
        id: 1,
        name: "北海道",
        checked: false,
      },
      {
        id: 2,
        name: "青森県",
        checked: false,
      },
      {
        id: 3,
        name: "岩手県",
        checked: false,
      },
      {
        id: 4,
        name: "宮城県",
        checked: false,
      },
      {
        id: 5,
        name: "秋田県",
        checked: false,
      },
      {
        id: 6,
        name: "山形県",
        checked: false,
      },
      {
        id: 7,
        name: "福島県",
        checked: false,
      }
    ]
  },
  {
    id: 2,
    name: "関東",
    checked: false,
    prefs: [
      {
        id: 8,
        name: "茨城県",
        checked: false,
      },
      {
        id: 9,
        name: "栃木県",
        checked: false,
      },
      {
        id: 10,
        name: "群馬県",
        checked: false,
      },
      {
        id: 11,
        name: "埼玉県",
        checked: false,
      },
      {
        id: 12,
        name: "千葉県",
        checked: false,
      },
      {
        id: 13,
        name: "東京都",
        checked: false,
      },
      {
        id: 14,
        name: "神奈川県",
        checked: false,
      }
    ]
  },
  {
    id: 3,
    name: "甲信越・北陸",
    checked: false,
    prefs:
      [
        {
          id:  15,
          name: "新潟県",
          checked: false,
        },
        {
          id: 16,
          name: "富山県",
          checked: false,
        },
        {
          id: 17,
          name: "石川県",
          checked: false,
        },
        {
          id: 18,
          name: "福井県",
          checked: false,
        },
        {
          id: 19,
          name: "山梨県",
          checked: false,
        },
        {
          id: 20,
          name: "長野県",
          checked: false,
        }
      ]
  },
  {
    id: 4,
    name: "東海",
    checked: false,
    prefs: [
      {
        id: 21,
        name: "岐阜県",
        checked: false,
      },
      {
        id: 22,
        name: "静岡県",
        checked: false,
      },
      {
        id: 23,
        name: "愛知県",
        checked: false,
      },
      {
        id: 24,
        name: "三重県",
        checked: false,
      }
    ]
  },
  {
    id: 5,
    name: "関西",
    checked: false,
    prefs: [
      {
        id: 25,
        name: "滋賀県",
        checked: false,
      },
      {
        id: 26,
        name: "京都府",
        checked: false,
      },
      {
        id: 27,
        name: "大阪府",
        checked: false,
      },
      {
        id: 28,
        name: "兵庫県",
        checked: false,
      },
      {
        id: 29,
        name: "奈良県",
        checked: false,
      },
      {
        id: 30,
        name: "和歌山県",
        checked: false,
      }]},
  {
    id: 6,
    name: "中国・四国",
    checked: false,
    prefs: [
      {
        id: 31,
        name: "鳥取県",
        checked: false,
      },
      {
        id: 32,
        name: "島根県",
        checked: false,
      },
      {
        id: 33,
        name: "岡山",
        checked: false,
      },
      {
        id: 34,
        name: "広島県",
        checked: false,
      },
      {
        id: 35,
        name: "山口県",
        checked: false,
      },
      {
        id: 36,
        name: "徳島県",
        checked: false,
      },
      {
        id: 37,
        name: "香川県",
        checked: false,
      },
      {
        id: 38,
        name: "愛媛県",
        checked: false,
      },
      {
        id: 39,
        name: "高知県",
        checked: false,
      }
    ]
  },
  {
    id: 7,
    name: "九州・沖縄",
    checked: false,
    prefs: [
      {
        id: 40,
        name: "福岡県",
        checked: false,
      },
      {
        id: 41,
        name: "佐賀県",
        checked: false,
      },
      {
        id: 42,
        name: "長崎県",
        checked: false,
      },
      {
        id: 43,
        name: "熊本県",
        checked: false,
      },
      {
        id: 44,
        name: "大分県",
        checked: false,
      },
      {
        id: 45,
        name: "宮崎県",
        checked: false,
      },
      {
        id: 46,
        name: "鹿児島県",
        checked: false,
      },
      {
        id: 47,
        name: "沖縄県",
        checked: false,
      }
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const vm = new Vue({
    el: '#app',
    data: {
      areas: areas,
      japanChecked: false,
      renderedNames: 'ここにプリントされるよー！',
    },
    methods: {
      checkArea(id) {
        this.areas.forEach(area => {
          if (area.id === id) {
            area.prefs.forEach(pref => {
              pref.checked = area.checked;
            });
          }
        });
      },
      checkPref(id) {
        this.areas.forEach(area => {
          area.prefs.forEach(pref => {
            if(pref.id === id) {
              if(pref.checked) {
                const isEveryChecked = area.prefs.every(pref => {
                  return pref.checked;
                });
                if(isEveryChecked) { area.checked = pref.checked }
              } else {
                const isSomeChecked = area.prefs.some(pref => {
                  return pref.checked;
                });
                if(isSomeChecked) {
                  area.checked = pref.checked;
                  this.japanChecked = pref.checked;
                }
              }
            }
          })
        })
      },
      checkJapan() {
        this.areas.forEach(area => {
          area.checked = this.japanChecked;
          area.prefs.forEach(pref => {
            pref.checked = this.japanChecked;
          })
        })
      },
      clearAll() {
        this.areas.forEach(area => {
          area.checked = false;
          area.prefs.forEach(pref => {
            pref.checked = false;
          })
        });
        this.japanChecked = false;
      },
      renderNames() {
        const names = [];
        if(this.japanChecked) {
          names.push('全国');
        } else {
          this.areas.forEach(area => {
            if(area.checked) {
              names.push(area.name);
            } else {
              area.prefs.forEach(pref => {
                if(pref.checked) {
                  names.push(pref.name);
                }
              });
            }
          })
        }
        this.renderedNames = names.join('、');
      }
    },
  })
});
