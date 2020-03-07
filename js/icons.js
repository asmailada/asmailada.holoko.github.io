/*
 *  Render icon objects
 */
const twiconjson = '{"twicon-td-flag":{"text-zh":"台灣民主旗"},"twicon-roc-flag":{"text-zh":"中華民國國旗"},"twicon-main-island":{"text-zh":"台灣島"},"twicon-penghu-islands":{"text-zh":"澎湖群島"},"twicon-kinmen-island":{"text-zh":"金門島"},"twicon-green-island":{"text-zh":"綠島"},"twicon-lamay-island":{"text-zh":"琉球嶼"},"twicon-gueishan-island":{"text-zh":"龜山島"},"twicon-orchid-island":{"text-zh":"蘭嶼"},"twicon-grave-sense":{"text-zh":"六氏先生之墓"},"twicon-cks-hall":{"text-zh":"中正紀念堂"},"twicon-gate-cks":{"text-zh":"自由廣場牌樓"},"twicon-president-office":{"text-zh":"總統府"},"twicon-taipei101":{"text-zh":"台北101"},"twicon-np-mus":{"text-zh":"故宮博物館"},"twicon-shrine-tp":{"text-zh":"國民革命忠烈祠"},"twicon-longshan-tmp":{"text-zh":"龍山寺"},"twicon-sys-hall":{"text-zh":"國父紀念館"},"twicon-confucius-tmp":{"text-zh":"孔子廟"},"twicon-xingtian-tmp":{"text-zh":"行天宮"},"twicon-nt-mus":{"text-zh":"國立台灣博物館"},"twicon-grand-hotel":{"text-zh":"圓山大飯店"},"twicon-228-park":{"text-zh":"ニニ八平和公園"},"twicon-san-domingo":{"text-zh":"紅毛城"},"twicon-raohe-nm":{"text-zh":"饒河夜市"},"twicon-red-house":{"text-zh":"西門紅樓"},"twicon-beimen":{"text-zh":"臺北府城北門"},"twicon-xiaonanmen":{"text-zh":"臺北府城小南門"},"twicon-taipei-stn":{"text-zh":"台北駅"},"twicon-zeelandia":{"text-zh":"安平古堡"},"twicon-eg-castle":{"text-zh":"億載金城"},"twicon-provintia":{"text-zh":"赤崁樓"},"twicon-hy-statue":{"text-zh":"八田與一雕像"},"twicon-85tower":{"text-zh":"高雄85大樓"},"twicon-fb-stn":{"text-zh":"美麗島站"},"twicon-dt-pagoda":{"text-zh":"蓮池潭龍虎塔"},"twicon-rosary-church":{"text-zh":"天主教玫瑰堂"},"twicon-longteng-brg":{"text-zh":"龍騰斷橋"},"twicon-ly-mus":{"text-zh":"蘭陽博物館"},"twicon-lovers-brg":{"text-zh":"情人橋"},"twicon-hotspring-mus":{"text-zh":"北投溫泉博物館"},"twicon-tunghai-uni":{"text-zh":"東海大學"},"twicon-taichung-park":{"text-zh":"台中公園湖心亭"},"twicon-queens-head":{"text-zh":"女王頭"},"twicon-ntc-theater":{"text-zh":"臺中國家歌劇院"},"twicon-bagua":{"text-zh":"八卦山大佛"},"twicon-foguangshan":{"text-zh":"佛光山寺"},"twicon-vase-rock":{"text-zh":"花瓶石"},"twicon-tropic-cancer":{"text-zh":"北迴歸線標牌"},"twicon-fuguijiao-lh":{"text-zh":"富貴角燈塔"},"twicon-yuweng-lh":{"text-zh":"漁翁島燈塔"},"twicon-eluanbi-lh":{"text-zh":"鵝鑾鼻燈塔"},"twicon-kano-staue":{"text-zh":"嘉農棒球隊銅像"},"twicon-ershawan":{"text-zh":"二沙灣砲臺"},"twicon-dahu-park":{"text-zh":"大湖公園錦帶橋"},"twicon-balloon":{"text-zh":"熱氣球"},"twicon-taiwan-rw":{"text-zh":"台鐵"},"twicon-taipei-mrt":{"text-zh":"台北捷運"},"twicon-alishan-rw":{"text-zh":"阿里山林業鐵路"},"twicon-high-speed-rail":{"text-zh":"高鐵"},"twicon-gondola":{"text-zh":"貓空纜車"},"twicon-youbike":{"text-zh":"YouBike"},"twicon-yami-boat":{"text-zh":"達悟族拼板舟"},"twicon-dragon-boat":{"text-zh":"龍舟"},"twicon-lantern1":{"text-zh":"紙燈籠1"},"twicon-lantern2":{"text-zh":"紙燈籠2"},"twicon-sky-lantern":{"text-zh":"天燈"},"twicon-taiwanese-bag":{"text-zh":"茄芷袋"},"twicon-postbox1":{"text-zh":"郵筒"},"twicon-postbox2":{"text-zh":"歪腰郵筒"},"twicon-jug":{"text-zh":"酒壇"},"twicon-tea-pot":{"text-zh":"茶具"},"twicon-tapioca":{"text-zh":"珍珠奶茶"},"twicon-beer":{"text-zh":"台灣啤酒"},"twicon-apple-cider":{"text-zh":"蘋果西打"},"twicon-couplets":{"text-zh":"春聯"},"twicon-fortune":{"text-zh":"筊"},"twicon-electric-pot":{"text-zh":"大同電鍋"},"twicon-slipper":{"text-zh":"拖鞋"},"twicon-flying-fish":{"text-zh":"飛魚"},"twicon-black-bear":{"text-zh":"台灣黑熊"},"twicon-trash":{"text-zh":"一般垃圾"},"twicon-recycling":{"text-zh":"資源回收"},"twicon-queue-box":{"text-zh":"機車停等區"},"twicon-bicycle-lane":{"text-zh":"自行車道"},"twicon-red-man":{"text-zh":"小紅人"},"twicon-green-man":{"text-zh":"小綠人"},"twicon-l-nh-insurance":{"text-zh":"全民健康保險"},"twicon-l-pixnet":{"text-zh":"痞客邦"},"twicon-l-17live":{"text-zh":"17直播"},"twicon-l-wemo":{"text-zh":"WeMo"},"twicon-l-dcard":{"text-zh":"Dcard"},"twicon-l-easy-card":{"text-zh":"悠遊卡"},"twicon-l-ipass":{"text-zh":"一卡通"},"twicon-l-youbike":{"text-zh":"YouBike"},"twicon-l-luxgen":{"text-zh":"納智捷"},"twicon-l-post":{"text-zh":"台灣郵政"},"twicon-l-taiwan-rw":{"text-zh":"台灣鐵道"},"twicon-l-taipei-mrt":{"text-zh":"台北MRT"},"twicon-l-kaoxiong-mrt":{"text-zh":"高雄MRT"}}';
var twicon = JSON.parse(twiconjson);
var language = "zh";

window.onload = function(){
  /** icon args */
  var iconlist = document.getElementsByClassName("iconlist")[0];
  
  Object.keys(twicon).forEach(function(key){
    var twiconclass = key;
    var twicondesc = twicon[key]["text-zh"];
    var htmlcode = '<li class="col col-12 col-sm-6 col-md-4 col-lg-2" onclick="showModal(this)"><div class="icon-holder"><div class="icon"><i class="' + twiconclass + '"></i></div><span> ' + twicondesc + ' </span></div></a></li>';
    iconlist.innerHTML += htmlcode;
  });
}

function showModal(elem){
  /** modal args */
  var modal = document.getElementsByClassName("twi-modal")[0];
  var modaliconholder = document.getElementsByClassName("modal-icon-holder")[0].getElementsByTagName("i")[0];
  var modaltitle_p = document.getElementsByClassName("modal-title-holder")[0].getElementsByTagName("p")[0];
  var modaldescription_p = document.getElementsByClassName("modal-description")[0].getElementsByTagName("p")[0];
  var modaladdress_p = document.getElementsByClassName("modal-address")[0].getElementsByTagName("p")[0];
  // var modaldownload = document.getElementsByClassName("modal-download")[0];
  var modaldownloadunicodeglyph_i = document.getElementsByClassName("modal-download-unicode-glyph")[0].getElementsByTagName("i")[0];
  // var modaldownloadunicode_p = document.getElementsByClassName("modal-download-unicode")[0].getElementsByTagName("p")[0];
  var modaldownloadiframe_p = document.getElementsByClassName("modal-download-iframe")[0].getElementsByTagName("p")[0];
  
  var classname = elem.getElementsByTagName("i")[0].className;
  var title = twicon[classname]["text-"+language];
  var description = "日本統治時代に作られた台中公園は台中で最も歷史ある公園です。約10haの園区はかつては霧峰林家により寄付された「瑞軒」という名の私有庭園で、旧城北門楼とつながっています。公園内には人工湖、亭台楼閣、曲橋などの優美な施設、野外音楽ステージ、児童遊戲区、テニスコートなどのレジャー設備もあります。欧風建築の湖心亭は、縦貫鉄路の全線開通を記念し、1908年に建てられました。日本統治時代から台中市の象徵だった湖心亭は、1999年市定旧跡に指定されました。";
  var address = "住所：台中市北区公園路37-1号\n電話：+886-4-22224174";
  modaldownloadiframe_p.innerText = '<i class="' + classname + '"></i>'

  var oldclass = modaliconholder.className;
  modaliconholder.classList.remove(oldclass);
  modaliconholder.classList.add(classname);
  oldclass = modaldownloadunicodeglyph_i.className;
  modaldownloadunicodeglyph_i.classList.remove(oldclass);
  modaldownloadunicodeglyph_i.classList.add(classname);
  modaltitle_p.innerText = title;
  modaldescription_p.innerText = description;
  modaladdress_p.innerText = address;

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementsByClassName("twi-modal")[0];
  modal.style.display = "none";
}
/*
 *  Generate JSON
 */
// window.onload = function (){
//   var iconlist = document.getElementsByClassName("iconlist")[0];
//   console.log(iconlist);
//   var lis = iconlist.getElementsByTagName("li");
//   var twiconclass = [];
//   var twicondesc = [];
//   var twiconjson = {};
//   for(var i=0; i<lis.length; i++){
//     var classname = lis[i].getElementsByTagName("i")[0].className;
//     var spantext = lis[i].getElementsByTagName("span")[0].innerText;
//     twiconclass.push(classname);
//     twicondesc.push(spantext);
//     twiconjson[classname] = {"text-zh":spantext};
//   }
//   console.log(JSON.stringify(twiconclass));
//   console.log(JSON.stringify(twicondesc));
//   console.log(JSON.stringify(twiconjson))
// };

/*
 *  Fetch json from xmlhttp request
 */
// window.onload = function (){
//     // add li to class="iconlist"
//     var iconlist = document.getElementsByClassName("iconlist")[0];
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         var twicon = JSON.parse(this.responseText);
//         Object.keys(twicon).forEach(function(key){
//           var twiconclass = key;
//           var twicondesc = twicon[key]["text-zh"];
//           console.log("appendChild");
//           var htmlcode = '<li><div class="icon-holder"><div class="icon"><i class="' + twiconclass + '"></i></div><span> ' + twicondesc + ' </span></div></a></li>';
//           iconlist.innerHTML += htmlcode;
//         })
//       }
//     };
//     xmlhttp.open("GET", "twicon.json", true);
//     xmlhttp.send();
// }
