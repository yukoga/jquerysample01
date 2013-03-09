var allPrefTable = {
  "01": "北海道",
  "02": "青森県",
  "03": "岩手県",
  "04": "宮城県",
  "05": "秋田県",
  "06": "山形県",
  "07": "福島県",
  "08": "茨城県",
  "09": "栃木県",
  "10": "群馬県",
  "11": "埼玉県",
  "12": "千葉県",
  "13": "東京都",
  "14": "神奈川県",
  "15": "新潟県",
  "16": "富山県",
  "17": "石川県",
  "18": "福井県",
  "19": "山梨県",
  "20": "長野県",
  "21": "岐阜県",
  "22": "静岡県",
  "23": "愛知県",
  "24": "三重県",
  "25": "滋賀県",
  "26": "京都県",
  "27": "大阪府",
  "28": "兵庫県",
  "29": "奈良県",
  "30": "和歌山県",
  "31": "鳥取県",
  "32": "島根県",
  "33": "岡山県",
  "34": "広島県",
  "35": "山口県",
  "36": "徳島県",
  "37": "香川県",
  "38": "愛媛県",
  "39": "高知県",
  "40": "福岡県",
  "41": "佐賀県",
  "42": "長崎県",
  "43": "熊本県",
  "44": "大分県",
  "45": "宮崎県",
  "46": "鹿児島県",
  "47": "沖縄県"
};

var eastPrefTable = { 
  "01": "北海道",
  "02": "青森県",
  "03": "岩手県",
  "04": "宮城県",
  "05": "秋田県",
  "06": "山形県",
  "07": "福島県",
  "08": "茨城県",
  "09": "栃木県",
  "10": "群馬県",
  "11": "埼玉県",
  "12": "千葉県",
  "13": "東京都",
  "14": "神奈川県",
  "15": "新潟県",
  "19": "山梨県",
  "20": "長野県",
  "21": "岐阜県",
  "22": "静岡県",
  "23": "愛知県",
  "24": "三重県"
};

var westPrefTable = { 
  "16": "富山県",
  "17": "石川県",
  "18": "福井県",
  "25": "滋賀県",
  "26": "京都県",
  "27": "大阪府",
  "28": "兵庫県",
  "29": "奈良県",
  "30": "和歌山県",
  "31": "鳥取県",
  "32": "島根県",
  "33": "岡山県",
  "34": "広島県",
  "35": "山口県",
  "36": "徳島県",
  "37": "香川県",
  "38": "愛媛県",
  "39": "高知県",
  "40": "福岡県",
  "41": "佐賀県",
  "42": "長崎県",
  "43": "熊本県",
  "44": "大分県",
  "45": "宮崎県",
  "46": "鹿児島県",
  "47": "沖縄県"
};

var ecmsMap = function() {
  this.o = new Object();
  this.k = new Array();
}
ecmsMap.prototype = {
  set : function(key, object) {
    if (!this.o[key]) { this.k[this.k.length] = key; }
    this.o[key] = object;
  },
  get : function(key) { return this.o[key]; },
  remove : function(key) { this.o[key] = undefined; },
  getLength : function() { return this.k.length; },
  each : function(callback, thisargs) {
    var _this;
    if ( this === null ) throw new TypeError('this is null or not defined.');
    if ( {}.toString.call(callback) !== "[object Function]" ) throw new TypeError(callback + ' is not a function.');
    if ( thisargs ) _this = thisargs;
    for (var i=0 ; i<this.getLength() ; i++) {
      var _key = this.k[i], _obj = this.o[_key];
      if (_obj) {
        var _result = callback.call(_this, _key, _obj);
        if (_result === false) { break; }
      }
    }
  },
  filter : function(callback, thisargs) {
    var _m = new ecmsMap(), _this;
    if ( this === null ) throw new TypeError('this is null or not defined.');
    if ( {}.toString.call(callback) !== "[object Function]" ) throw new TypeError(callback + ' is not a function.');
    if ( thisargs ) _this = thisargs;
    for (var i=0; i<this.getLength() ; i++) {
      var _key = this.k[i], _obj = this.o[_key];
      if (callback.call(_this, _key, _obj) === true) {
        _m.set(_key, _obj);        
      }
    }
    return _m;
  },
}


var ecmsUtil = function(){}
ecmsUtil.prototype = {
  insertDoms: function(target, elem, attr) {
    var _self = this;
    var _elm = document.createElement(elem);
    _elm = this.setAttr(_elm, attr);
    $(target).append(_elm);
  },
  insertDomsForAll: function(target, prefmap) {
    var _self = this;
    var _elm = document.createElement('div');
    this.appendLabelForPref(_elm, 'all', '全国');
    this.appendUIForAll(_elm, 'all');
    prefmap.each(function(k, v) {
      this.appendHiddenForPref(_elm, k);
    }, _self);
    $(target).append(_elm);
    console.log("insertDomsForAll");
  },
  insertDomsForEast: function(target, prefmap) {
    var _self = this;
    var _elm = document.createElement('div');
    this.appendLabelForPref(_elm, 'east', '東日本');
    this.appendUIForAll(_elm, 'east');
    prefmap.each(function(k, v) {
      this.appendHiddenForPref(_elm, k);
    }, _self);
    $(target).append(_elm);
    console.log("insertDomsForEast");
  },
  insertDomsForWest: function(target, prefmap) {
    var _self = this;
    var _elm = document.createElement('div');
    this.appendLabelForPref(_elm, 'west', '西日本');
    this.appendUIForAll(_elm, 'west');
    prefmap.each(function(k, v) {
      this.appendHiddenForPref(_elm, k);
    }, _self);
    $(target).append(_elm);
    console.log("insertDomsForWest");
  },
  insertDomsForPref: function(target, prefmap) {
    var _self = this;
    prefmap.each(function(k, v) {
      var _elm = document.createElement('div');
      this.appendLabelForPref(_elm, k, v);
      this.appendUIForPref(_elm, k);
      this.appendHiddenForPref(_elm, k);
      $(target).append(_elm);
    }, _self);
    console.log("insertDomsForPref");
  },
  appendLabelForPref: function(element, prefcode, prefname) {
    $(element).attr('class', 'preflabel').attr('id', 'pref_' + prefcode);
    $(element).append(prefname);
    console.log("appendLabelForPref");
  },
  appendUIForPref: function(element, prefcode) {
    $(element).append('<span class="prefui"><a href="javascript:void(0);" id="addDetailedArea_' 
        + prefcode + '">詳細地域を入力する</a>&nbsp;|&nbsp;<a href="javascript:void(0);" id="delPrefData_' + prefcode + '">削除する</a></span><br />');
    $(element).children().children('#delPrefData_' + prefcode).click(function() {
      $(this).parent().parent().remove();
    });
    $(element).children().children('#addDetailedArea_' + prefcode).click(function() {
      var _elm = document.createElement('textarea');
      $(_elm).attr({name: 'cityarea_' + prefcode, rows: '10', cols: '100'});
      $(this).parent().parent().append(_elm);
    });
    console.log("appendUIForPref");
  },
  appendUIForAll: function(element, prefcode) {
    $(element).append('<span class="prefui"><a href="javascript:void(0);" id="delPrefData_' + prefcode + '">削除する</a></span><br />');
    $(element).children().children('#delPrefData_' + prefcode).click(function() {
      $(this).parent().parent().remove();
    });
    console.log("appendUIForPref");
  },
  appendHiddenForPref: function(element, prefcode) {
    $(element).append('<input type="hidden" name="prefcode[]" value="' + prefcode + '" />');
    console.log("appendHiddenForPref");
  },
}


$(function() {
  var _util = new ecmsUtil();
  var _east = new ecmsMap(), _west = new ecmsMap(), _all = new ecmsMap();
  Object.keys(eastPrefTable).forEach(function(v) {
    _east.set(v, this[v]);
  }, eastPrefTable);
  Object.keys(westPrefTable).forEach(function(v) {
    _west.set(v, this[v]);
  }, westPrefTable);
  Object.keys(allPrefTable).forEach(function(v) {
    _all.set(v, this[v]);
  }, allPrefTable);
  
  $('#prefBoxModal').dialog({
    autoOpen: false,
   	height: 380,
  	width: 680,
  	modal: true,
  	buttons: {
      '都道府県を登録する': function() {
        var _pushData = {};
        var _prefCode = [];
		   	$('[name="prefcode[]"]:checked').each(function(){
          _prefCode.push(this.value);
		  	});
		  	if (($.inArray('99', _prefCode) > -1)
          || 
          (($.inArray('98', _prefCode) > -1) && ($.inArray('97', _prefCode) > -1))
          ) {
          _util.insertDomsForAll('#prefdata', _all);
		      console.log("「全国」と「東日本」「西日本」あるいは他の都道府県を選択した場合、すべての都道府県に対してデータが登録されます。");
		  	} else if ($.inArray("98", _prefCode) > -1) {
          _util.insertDomsForWest('#prefdata', _west);
		      console.log("「西日本」として、西日本のすべての都道府県にデータが登録されます。");
		  	} else if ($.inArray("97", _prefCode) > -1) {
          _util.insertDomsForEast('#prefdata', _east);
		      console.log("「東日本」として、東日本のすべての都道府県にデータが登録されます。");
		  	} else {
          var _insertList = _all.filter(function(k, v) {
            return ($.inArray(k, _prefCode) > -1); 
          });
          _util.insertDomsForPref('#prefdata', _insertList);
          console.log("都道府県のデータを追加します");
        }
			 	$(this).dialog('close');		  	  	
		  },
			'キャンセル': function() {
				$(this).dialog('close');
			}
		},
		'close': function() {
      console.log('called #prefBoxModal.close');
		}
  });
  $('#prefbutton').click(function(){
  	$('#prefBoxModal').dialog('open');
  });
});
