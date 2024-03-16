if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_shavian_digraph());
}
function Keyboard_shavian_digraph()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_shavian_digraph";
  this.KN="Shavian Digraph";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Fairfax Hax HD"',K102:0};
  this.KV.KLS={
    "default": ["","","","","","","","","","","","","","","","","","𐑢","𐑧","𐑮","𐑑","𐑘","𐑳","𐑦","𐑪","𐑐","[","]","\\","","","","𐑩","𐑕","𐑛","𐑓","𐑜","𐑣","𐑡","𐑒","𐑤",";","'","","","","","","","𐑟","𐑒𐑕","·","𐑝","𐑚","𐑯","𐑥",",",".","/","","","","","",""]
  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=1;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=0 /* 0x0000 */;
  this.KS=1;
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q"
              },
              {
                "id": "K_W",
                "text": "\uD801\uDC62"
              },
              {
                "id": "K_E",
                "text": "\uD801\uDC67"
              },
              {
                "id": "K_R",
                "text": "\uD801\uDC6E"
              },
              {
                "id": "K_T",
                "text": "\uD801\uDC51"
              },
              {
                "id": "K_Y",
                "text": "\uD801\uDC58"
              },
              {
                "id": "K_U",
                "text": "\uD801\uDC73"
              },
              {
                "id": "K_I",
                "text": "\uD801\uDC66"
              },
              {
                "id": "K_O",
                "text": "\uD801\uDC6A"
              },
              {
                "id": "K_P",
                "text": "\uD801\uDC50"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "\uD801\uDC69"
              },
              {
                "id": "K_S",
                "text": "\uD801\uDC55"
              },
              {
                "id": "K_D",
                "text": "\uD801\uDC5B"
              },
              {
                "id": "K_F",
                "text": "\uD801\uDC53"
              },
              {
                "id": "K_G",
                "text": "\uD801\uDC5C"
              },
              {
                "id": "K_H",
                "text": "\uD801\uDC63"
              },
              {
                "id": "K_J",
                "text": "\uD801\uDC61"
              },
              {
                "id": "K_K",
                "text": "\uD801\uDC52"
              },
              {
                "id": "K_L",
                "text": "\uD801\uDC64"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "\uD801\uDC5F"
              },
              {
                "id": "K_X",
                "text": "\uD801\uDC52\uD801\uDC55"
              },
              {
                "id": "K_C",
                "text": "\u00B7"
              },
              {
                "id": "K_V",
                "text": "\uD801\uDC5D"
              },
              {
                "id": "K_B",
                "text": "\uD801\uDC5A"
              },
              {
                "id": "K_N",
                "text": "\uD801\uDC6F"
              },
              {
                "id": "K_M",
                "text": "\uD801\uDC65"
              },
              {
                "id": "K_PERIOD",
                "sk": [
                  {
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I"
              },
              {
                "id": "K_O",
                "text": "O"
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "50",
                "text": "A"
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "sk": [
                  {
                    "layer": "default",
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "layer": "default",
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "layer": "default",
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "layer": "default",
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "150",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "50",
                "text": "$"
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "|"
              },
              {
                "layer": "default",
                "id": "K_BKSLASH"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_LBRKT",
                "pad": "110",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COMMA",
                    "text": "<"
                  },
                  {
                    "layer": "shift",
                    "id": "K_LBRKT",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": ">"
                  },
                  {
                    "layer": "shift",
                    "id": "K_RBRKT",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "id": "K_SLASH"
              },
              {
                "width": "100",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "150",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "610",
                "id": "K_SPACE"
              },
              {
                "width": "150",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  },
  "tablet": {
    "font": "Tahoma",
    "displayUnderlying": false,
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q"
              },
              {
                "id": "K_W",
                "text": "\uD801\uDC62"
              },
              {
                "id": "K_E",
                "text": "\uD801\uDC67"
              },
              {
                "id": "K_R",
                "text": "\uD801\uDC6E"
              },
              {
                "id": "K_T",
                "text": "\uD801\uDC51"
              },
              {
                "id": "K_Y",
                "text": "\uD801\uDC58"
              },
              {
                "id": "K_U",
                "text": "\uD801\uDC73"
              },
              {
                "id": "K_I",
                "text": "\uD801\uDC66"
              },
              {
                "id": "K_O",
                "text": "\uD801\uDC6A"
              },
              {
                "id": "K_P",
                "text": "\uD801\uDC50"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "\uD801\uDC69"
              },
              {
                "id": "K_S",
                "text": "\uD801\uDC55"
              },
              {
                "id": "K_D",
                "text": "\uD801\uDC5B"
              },
              {
                "id": "K_F",
                "text": "\uD801\uDC53"
              },
              {
                "id": "K_G",
                "text": "\uD801\uDC5C"
              },
              {
                "id": "K_H",
                "text": "\uD801\uDC63"
              },
              {
                "id": "K_J",
                "text": "\uD801\uDC61"
              },
              {
                "id": "K_K",
                "text": "\uD801\uDC52"
              },
              {
                "id": "K_L",
                "text": "\uD801\uDC64"
              },
              {
                "width": "10",
                "id": "T_new_88",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "shift",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "\uD801\uDC5F"
              },
              {
                "id": "K_X",
                "text": "\uD801\uDC52\uD801\uDC55"
              },
              {
                "id": "K_C",
                "text": "\u00B7"
              },
              {
                "id": "K_V",
                "text": "\uD801\uDC5D"
              },
              {
                "id": "K_B",
                "text": "\uD801\uDC5A"
              },
              {
                "id": "K_N",
                "text": "\uD801\uDC6F"
              },
              {
                "id": "K_M",
                "text": "\uD801\uDC65"
              },
              {
                "id": "K_PERIOD",
                "sk": [
                  {
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I"
              },
              {
                "id": "K_O",
                "text": "O"
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "pad": "70",
                "text": "A"
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "width": "10",
                "id": "T_new_122",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "nextlayer": "default",
                "width": "110",
                "id": "K_SHIFT",
                "sp": "2",
                "text": "*Shift*"
              },
              {
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "layer": "default",
                "id": "K_PERIOD",
                "sk": [
                  {
                    "layer": "default",
                    "id": "K_COMMA",
                    "text": ","
                  },
                  {
                    "layer": "shift",
                    "id": "K_1",
                    "text": "!"
                  },
                  {
                    "layer": "shift",
                    "id": "K_SLASH",
                    "text": "?"
                  },
                  {
                    "layer": "default",
                    "id": "K_QUOTE",
                    "text": "'"
                  },
                  {
                    "layer": "shift",
                    "id": "K_QUOTE",
                    "text": "\""
                  },
                  {
                    "layer": "default",
                    "id": "K_BKSLASH",
                    "text": "\\"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COLON",
                    "text": ":"
                  },
                  {
                    "layer": "default",
                    "id": "K_COLON",
                    "text": ";"
                  }
                ]
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "numeric",
                "width": "140",
                "id": "K_NUMLOCK",
                "sp": "1",
                "text": "*123*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "layer": "shift",
                "id": "K_4",
                "pad": "70",
                "text": "$"
              },
              {
                "layer": "shift",
                "id": "K_2",
                "text": "@"
              },
              {
                "layer": "shift",
                "id": "K_3",
                "text": "#"
              },
              {
                "layer": "shift",
                "id": "K_5",
                "text": "%"
              },
              {
                "layer": "shift",
                "id": "K_7",
                "text": "&"
              },
              {
                "layer": "shift",
                "id": "K_HYPHEN",
                "text": "_"
              },
              {
                "layer": "default",
                "id": "K_EQUAL",
                "text": "="
              },
              {
                "layer": "shift",
                "id": "K_BKSLASH",
                "text": "|"
              },
              {
                "layer": "default",
                "id": "K_BKSLASH"
              },
              {
                "width": "10",
                "id": "T_new_156",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "width": "110",
                "id": "K_SHIFT",
                "sp": "1",
                "text": "*Shift*"
              },
              {
                "id": "K_LBRKT",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "\u00AB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_COMMA",
                    "text": "<"
                  },
                  {
                    "layer": "shift",
                    "id": "K_LBRKT",
                    "text": "{"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_9",
                "text": "("
              },
              {
                "layer": "shift",
                "id": "K_0",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "\u00BB"
                  },
                  {
                    "layer": "shift",
                    "id": "K_PERIOD",
                    "text": ">"
                  },
                  {
                    "layer": "shift",
                    "id": "K_RBRKT",
                    "text": "}"
                  }
                ]
              },
              {
                "layer": "shift",
                "id": "K_EQUAL",
                "text": "+"
              },
              {
                "layer": "default",
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "layer": "shift",
                "id": "K_8",
                "text": "*"
              },
              {
                "layer": "default",
                "id": "K_SLASH"
              },
              {
                "width": "90",
                "id": "K_BKSP",
                "sp": "1",
                "text": "*BkSp*"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "nextlayer": "default",
                "width": "140",
                "id": "K_LOWER",
                "sp": "1",
                "text": "*abc*"
              },
              {
                "width": "120",
                "id": "K_LOPT",
                "sp": "1",
                "text": "*Menu*"
              },
              {
                "width": "630",
                "id": "K_SPACE"
              },
              {
                "width": "140",
                "id": "K_ENTER",
                "sp": "1",
                "text": "*Enter*"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KVER="16.0.145.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_A /* 0x41 */)) {
      if(k.KFCM(1,t,['𐑪'])){
        r=m=1;   // Line 96
        k.KDC(1,t);
        k.KO(-1,t,"𐑴");
      }
      else if(k.KFCM(1,t,['𐑦'])){
        r=m=1;   // Line 121
        k.KDC(1,t);
        k.KO(-1,t,"𐑾");
      }
      else if(1){
        r=m=1;   // Line 70
        k.KDC(0,t);
        k.KO(-1,t,"𐑩");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_B /* 0x42 */)) {
      if(1){
        r=m=1;   // Line 20
        k.KDC(0,t);
        k.KO(-1,t,"𐑚");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_C /* 0x43 */)) {
      if(1){
        r=m=1;   // Line 131
        k.KDC(0,t);
        k.KO(-1,t,"·");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_D /* 0x44 */)) {
      if(1){
        r=m=1;   // Line 24
        k.KDC(0,t);
        k.KO(-1,t,"𐑛");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_E /* 0x45 */)) {
      if(k.KFCM(1,t,['𐑩'])){
        r=m=1;   // Line 82
        k.KDC(1,t);
        k.KO(-1,t,"𐑨");
      }
      else if(k.KFCM(1,t,['𐑧'])){
        r=m=1;   // Line 84
        k.KDC(1,t);
        k.KO(-1,t,"𐑰");
      }
      else if(1){
        r=m=1;   // Line 74
        k.KDC(0,t);
        k.KO(-1,t,"𐑧");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_F /* 0x46 */)) {
      if(1){
        r=m=1;   // Line 30
        k.KDC(0,t);
        k.KO(-1,t,"𐑓");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_G /* 0x47 */)) {
      if(k.KFCM(1,t,['𐑯'])){
        r=m=1;   // Line 66
        k.KDC(1,t);
        k.KO(-1,t,"𐑙");
      }
      else if(1){
        r=m=1;   // Line 28
        k.KDC(0,t);
        k.KO(-1,t,"𐑜");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_H /* 0x48 */)) {
      if(k.KFCM(1,t,['𐑕'])){
        r=m=1;   // Line 56
        k.KDC(1,t);
        k.KO(-1,t,"𐑖");
      }
      else if(k.KFCM(1,t,['𐑟'])){
        r=m=1;   // Line 58
        k.KDC(1,t);
        k.KO(-1,t,"𐑠");
      }
      else if(k.KFCM(1,t,['𐑑'])){
        r=m=1;   // Line 60
        k.KDC(1,t);
        k.KO(-1,t,"𐑔");
      }
      else if(k.KFCM(1,t,['𐑛'])){
        r=m=1;   // Line 62
        k.KDC(1,t);
        k.KO(-1,t,"𐑞");
      }
      else if(k.KFCM(1,t,['·'])){
        r=m=1;   // Line 64
        k.KDC(1,t);
        k.KO(-1,t,"𐑗");
      }
      else if(k.KFCM(1,t,['𐑩'])){
        r=m=1;   // Line 90
        k.KDC(1,t);
        k.KO(-1,t,"𐑭");
      }
      else if(k.KFCM(1,t,['𐑒'])){
        r=m=1;   // Line 125
        k.KDC(1,t);
        k.KO(-1,t,"𐑣𐑒");
      }
      else if(1){
        r=m=1;   // Line 52
        k.KDC(0,t);
        k.KO(-1,t,"𐑣");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_I /* 0x49 */)) {
      if(k.KFCM(1,t,['𐑪'])){
        r=m=1;   // Line 102
        k.KDC(1,t);
        k.KO(-1,t,"𐑶");
      }
      else if(1){
        r=m=1;   // Line 72
        k.KDC(0,t);
        k.KO(-1,t,"𐑦");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_J /* 0x4A */)) {
      if(1){
        r=m=1;   // Line 50
        k.KDC(0,t);
        k.KO(-1,t,"𐑡");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_K /* 0x4B */)) {
      if(1){
        r=m=1;   // Line 26
        k.KDC(0,t);
        k.KO(-1,t,"𐑒");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_L /* 0x4C */)) {
      if(1){
        r=m=1;   // Line 44
        k.KDC(0,t);
        k.KO(-1,t,"𐑤");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_M /* 0x4D */)) {
      if(1){
        r=m=1;   // Line 46
        k.KDC(0,t);
        k.KO(-1,t,"𐑥");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_N /* 0x4E */)) {
      if(1){
        r=m=1;   // Line 48
        k.KDC(0,t);
        k.KO(-1,t,"𐑯");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_O /* 0x4F */)) {
      if(k.KFCM(1,t,['𐑪'])){
        r=m=1;   // Line 98
        k.KDC(1,t);
        k.KO(-1,t,"𐑵");
      }
      else if(1){
        r=m=1;   // Line 76
        k.KDC(0,t);
        k.KO(-1,t,"𐑪");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_P /* 0x50 */)) {
      if(1){
        r=m=1;   // Line 18
        k.KDC(0,t);
        k.KO(-1,t,"𐑐");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Q /* 0x51 */)) {
      if(1){
        r=m=1;   // Line 132
        k.KDC(0,t);
        k.KDO(-1,t,0);
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_R /* 0x52 */)) {
      if(k.KFCM(2,t,['𐑩','𐑦'])){
        r=m=1;   // Line 110
        k.KDC(2,t);
        k.KO(-1,t,"𐑺");
      }
      else if(k.KFCM(2,t,['𐑧','𐑩'])){
        r=m=1;   // Line 116
        k.KDC(2,t);
        k.KO(-1,t,"𐑽");
      }
      else if(k.KFCM(1,t,['𐑩'])){
        r=m=1;   // Line 106
        k.KDC(1,t);
        k.KO(-1,t,"𐑸");
      }
      else if(k.KFCM(1,t,['𐑪'])){
        r=m=1;   // Line 108
        k.KDC(1,t);
        k.KO(-1,t,"𐑹");
      }
      else if(k.KFCM(1,t,['𐑳'])){
        r=m=1;   // Line 112
        k.KDC(1,t);
        k.KO(-1,t,"𐑻");
      }
      else if(k.KFCM(1,t,['𐑧'])){
        r=m=1;   // Line 114
        k.KDC(1,t);
        k.KO(-1,t,"𐑼");
      }
      else if(k.KFCM(1,t,['𐑦'])){
        r=m=1;   // Line 117
        k.KDC(1,t);
        k.KO(-1,t,"𐑽");
      }
      else if(1){
        r=m=1;   // Line 42
        k.KDC(0,t);
        k.KO(-1,t,"𐑮");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_S /* 0x53 */)) {
      if(1){
        r=m=1;   // Line 34
        k.KDC(0,t);
        k.KO(-1,t,"𐑕");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_T /* 0x54 */)) {
      if(1){
        r=m=1;   // Line 22
        k.KDC(0,t);
        k.KO(-1,t,"𐑑");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_U /* 0x55 */)) {
      if(k.KFCM(2,t,['𐑘','𐑪'])){
        r=m=1;   // Line 123
        k.KDC(2,t);
        k.KO(-1,t,"𐑿");
      }
      else if(k.KFCM(1,t,['𐑪'])){
        r=m=1;   // Line 94
        k.KDC(1,t);
        k.KO(-1,t,"𐑫");
      }
      else if(1){
        r=m=1;   // Line 78
        k.KDC(0,t);
        k.KO(-1,t,"𐑳");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_V /* 0x56 */)) {
      if(1){
        r=m=1;   // Line 32
        k.KDC(0,t);
        k.KO(-1,t,"𐑝");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_W /* 0x57 */)) {
      if(k.KFCM(1,t,['𐑩'])){
        r=m=1;   // Line 92
        k.KDC(1,t);
        k.KO(-1,t,"𐑷");
      }
      else if(k.KFCM(1,t,['𐑪'])){
        r=m=1;   // Line 100
        k.KDC(1,t);
        k.KO(-1,t,"𐑬");
      }
      else if(1){
        r=m=1;   // Line 40
        k.KDC(0,t);
        k.KO(-1,t,"𐑢");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_X /* 0x58 */)) {
      if(1){
        r=m=1;   // Line 127
        k.KDC(0,t);
        k.KO(-1,t,"𐑒𐑕");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Y /* 0x59 */)) {
      if(k.KFCM(1,t,['𐑧'])){
        r=m=1;   // Line 86
        k.KDC(1,t);
        k.KO(-1,t,"𐑱");
      }
      else if(k.KFCM(1,t,['𐑩'])){
        r=m=1;   // Line 88
        k.KDC(1,t);
        k.KO(-1,t,"𐑲");
      }
      else if(1){
        r=m=1;   // Line 38
        k.KDC(0,t);
        k.KO(-1,t,"𐑘");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_Z /* 0x5A */)) {
      if(1){
        r=m=1;   // Line 36
        k.KDC(0,t);
        k.KO(-1,t,"𐑟");
      }
    }
    return r;
  };
}
