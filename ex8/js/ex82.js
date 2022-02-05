
// ex8,クリックするたびにcreateElementを代入するやり方が分からなかった
let speechObj = new SpeechSynthesisUtterance();//発話設定オブジェクト
speechObj.lang = "ja.JP"; //"en-US","en-GB","it-IT"
speechObj.pitch = 1.0;
speechObj.rate = 1.0;
speechObj.volume = 0.5;

let langObj = document.getElementById('select-lang');//selectタグの選択しのoptionの属性値を取得
let pitchObj = document.getElementById('pitch-range');
let speedObh = document.getElementById('speed-range');
let volumeObj = document.getElementById('volume-range');


let moved_pitch, moved_speed, moved_volume;




let img_num;　　 //画像枚数
let img, cap; //画像配列
let img_path = "./img/"; //画像ファイルのパスをファイル名と分離
let count;
let  mod_num = 0; //クリックのカウント数、　カウントを画像枚数で割った剰余
let imgObj, capObj; //imgタグ,figcaptionタグのオブジェクト
let bttnObj, resetObj; //ボタン、リセットのオブジェクト
let crimgObj = [], crcapObj = [];


// 画像のファイル配列
let img_file = ["Text.png", "Building.png", "BRIDGE.png", "BOAT.png"];
let img_alt_en = ["Photo of Text", "Photo of Building", "Photo of BRIDGE", "Photo of BOAT"]; //alt要素の配列
let img_cap_en = ["This image is Text", "This image is Building", "This image is BRIDGE", "This image is BOAT"]; //figcapの配列
// alt要素は発音させない
let img_alt_ja = ["この画像は文章です", "この画像は建物です", "この画像は橋です", "この写真は船です"];
let img_cap_ja = ["この画像は文章です", "この画像は建物です", "この画像は橋です", "この写真は船です"];

imgObj = document.getElementById('fig-img');
capObj = document.getElementById('fig-cap');
bttnObj = document.getElementById('change');
resetObj = document.getElementById('reset');



// 画像枚数をファイル名設定から取得
img_num = img_file.length; //length=配列の長さ取得メソッド,(Cはlen(配列)関数)
console.log("img_num=", img_num); //確認用ログ出力


for (count = 0; count < img_num; count++){
    crimgObj[count] = document.createElement('img');
    crimgObj[count].src = path + img_file[count];
    crimgObj[count].alt = img_file[count];

    crcapObj[count] = document.createElement('figcaption');
    crcapObj[count].innerHTML = img_cap[count];

    //変数値確認
    console.log("crimgObj[count].src=", crimgObj[count].src);
    console.log('crimgObj[count].alt=', crimgObj[count].alt);
    console.log('crimgObj[count].innerHTML=', crcap[count].innerHTML);

};

function change(count) {
  mod_num = count % img_num;
  imgObj.src = crimgObj[mod_num].src;
  imgObj.alt = crimgObj[mod_num].alt;
  capObj.innerHTML = crcapObj[mod_num].innerHTML;
  speechSynthesis.speak(speechObj); //発話させるメソッドspeak
}

function bttn() {
    count = count + 1;
    console.log("count =", count);
    change(count);
    switch (langObj.selectedIndex) {
      case 0: {
        break;
      }
      case 1: {
        capObj.innerHTML = img_cap_en[mod_num];
        speechEnObj.text = "This image is changed.";
        speechSynthesis.speak(speechEnObj);
        speechEnObj.text = img_capEn[mod_num];
        speechSynthesis.speak(speechEnObj);
        break;
      }
      case 2: {
        capObj.innerHTML = img_cap_ja[mod_num];
        speechJaObj.text = "画像を変更します。";
        speechSynthesis.speak(speechJaObj);
        speechJaObj.text = img_capJa[mod_num];
        speechSynthesis.speak(speechJaObj);
        break;
      }
    }
}

function reset() {
    count = 0;
    speechObj.lang = "ja.JP"; //"en-US","en-GB","it-IT"
    speechObj.pitch = 1.0;
    speechObj.rate = 1.0;
    speechObj.volume = 0.5;
    change(count);
}

function get_lang() {
    lang_sel_index = langObj.selectedIndex; //セレクトボックス上から0~の位置を取得
    speechObj.lang = langObj[lang_sel_index].value; //セレクトボックスのvalue属性値取得
    switch (langObj.selectedIndex) {
      case 0: {
        break;
      }
      case 1: {
        speechEnObj.text = "This page is guided in English.";
        speechSynthesis.speak(speechEnObj);
        break;
      }
      case 2: {
        speechJaObj.text = "このページは日本語で案内されます。";
        speechSynthesis.speak(speechJaObj);
        break;
      }
    }
}

function get_pitch() {
  moved_pitch = pitchObj;
  speechObj.pitch = moved_pitch;
  console("pitch:", moved_pitch);
  change();
}

function get_speed() {
  moved_speed = speedObj;
  speechObj.speed = moved_speed;
  console("speed:", moved_speed);
  change();
}

function get_volume() {
  moved_volume = volumeObj;
  speechObj.volume = moved_volume;
  console("volume:", moved_volume);
  change();
  console.log(mod_num);

}




// ボタンオブジェクトにクリックアクションと動作関数を割り当て
bttnObj.addEventListener("click", function() {
    bttn();
}, false);

resetObj.addEventListener("click", function() {
    reset();
}, false);

langObj.addEventListener("change", function () {
    get_lang();
}, false);

pitchObj.addEventListener("change", function () {
    get_pitch();
}, false);

speedObj.addEventListener("change", function () {
    get_speed();
}, false);

volumeObj.addEventListener("change", function () {
    get_volume();
}, false);