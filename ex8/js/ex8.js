let img_num;
let path = "./img/";
let count, mod_num=0;
let imgObj, capObj;
let bttnObj, resetObj;
// 画像のファイル配列
let img_file = ["Text.png", "Building.png", "BRIDGE.png", "BOAT.png"];
let img_alt_en = [
  "Photo of Text",
  "Photo of Building",
  "Photo of BRIDGE",
  "Photo of BOAT",
]; //alt要素の配列
let img_cap_en = [
  "This image is Text",
  "This image is Building",
  "This image is BRIDGE",
  "This image is BOAT",
]; //figcapの配列
// alt要素は発音させない
let img_alt_ja = [
  "この画像は文章です",
  "この画像は建物です",
  "この画像は橋です",
  "この画像は船です",
];
let img_cap_ja = [
  "この画像は文章です",
  "この画像は建物です",
  "この画像は橋です",
  "この画像は船です",
];
let langObj;

imgObj = document.getElementById("fig-img");
capObj = document.getElementById("fig-cap");
bttnObj = document.getElementById("change");
resetObj = document.getElementById("reset");
langObj = document.getElementById("select-lang");
pitchObj = document.getElementById("pitch-range");
rateObj = document.getElementById("rate-range");
volumeObj = document.getElementById("volume-range");

img_num = img_file.length;
console.log("img_num=%d", img_num);
console.log(mod_num);

let speechObj = new SpeechSynthesisUtterance();
let speechEnObj = new SpeechSynthesisUtterance();
let speechJaObj = new SpeechSynthesisUtterance();

speechEnObj.lang = "en-US";
speechEnObj.volume = 1.0;
speechEnObj.rate = 1.0;
speechEnObj.pitch = 0.5;

speechJaObj.lang = "ja-JP";
speechJaObj.volume = 1.0;
speechJaObj.rate = 1.0;
speechJaObj.pitch = 0.5;

count = 0;
function bttn() {
  count = count + 1;
  mod_num = count % img_num;
  imgObj.src = path + img_file[mod_num];

  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      imgObj.alt = img_alt_en[mod_num];
      capObj.innerHTML = img_cap_en[mod_num];
      speechEnObj.text = "This image is changed.";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      imgObj.alt = img_alt_ja[mod_num];
      capObj.innerHTML = img_cap_ja[mod_num];
      speechJaObj.text = "画像を変更します。";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function reset() {
  imgObj.src = path + img_file[0];
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      imgObj.alt = img_alt_en[0];
      capObj.innerHTML = img_cap_en[0];
      speechEnObj.text = "Resetted.";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[0];
      speak(speechEnObj);
      break;
    }
    case 2: {
      imgObj.alt = img_alt_ja[0];
      capObj.innerHTML = img_cap_ja[0];
      speechJaObj.text = "リセットします。";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[0];
      speak(speechJaObj);
      break;
    }
  }
}

function lang() {
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "This page is guided in English.";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "このページは日本語で案内されます。";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function get_pitch() {
  console.log("pitch");
  let moved_pitch = pitchObj.value;
  speechObj.pitch = moved_pitch;
  speechEnObj.pitch = moved_pitch;
  speechJaObj.pitch = moved_pitch;

  console.log("pitch:", moved_pitch);
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "Voice pitch has changed";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "声の高さが変更されました";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
        speak(speechJaObj);
      break;
    }
  }
}

function get_speed() {
  console.log("speed");

  let moved_rate = rateObj.value;
  speechObj.rate = moved_rate;
  speechEnObj.rate = moved_rate;
  speechJaObj.rate = moved_rate;

  console.log("speed:", moved_rate);
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "Voice speed has changed";
      speak(speechEnObj);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "声の速さが変更されました";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function get_volume() {
  console.log("volume");
  let moved_volume = volumeObj.value;
  speechObj.volume = moved_volume;
  speechEnObj.volume = moved_volume;
  speechJaObj.volume = moved_volume;

  console.log("volume:", moved_volume);
  switch (langObj.selectedIndex) {
    case 0: {
      break;
    }
    case 1: {
      speechEnObj.text = "Voice volume has changed";
      console.log(img_cap_en[mod_num]);
      speechEnObj.text = img_cap_en[mod_num];
      speak(speechEnObj);
      break;
    }
    case 2: {
      speechJaObj.text = "声の大きさが変更されました";
      speak(speechJaObj);
      speechJaObj.text = img_cap_ja[mod_num];
      speak(speechJaObj);
      break;
    }
  }
}

function speak(speakObj) {
  speechSynthesis.speak(speakObj);
}

bttnObj.addEventListener(
  "click",
  function () {
    bttn();
  },
  false
);
resetObj.addEventListener(
  "click",
  function () {
    reset();
  },
  false
);

langObj.addEventListener(
  "change",
  function () {
    lang();
  },
  false
);

pitchObj.addEventListener(
  "change",
  function () {
    get_pitch();
  },
  false
);

rateObj.addEventListener(
  "change",
  function () {
    get_speed();
  },
  false
);

volumeObj.addEventListener(
  "change",
  function () {
    get_volume();
  },
  false
);
