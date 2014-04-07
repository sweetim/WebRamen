﻿var ramenType = new Array();
ramenType[0] = {
    name: "shoyu",
    info: "スープにしょうゆタレを使用した日本のラーメン。" +
        "1910年（明治43年）に、浅草の來々軒で出された東京ラーメンが初出であり、日本のラ" +
        "ーメンの原型である。だしは鶏がらおよびその他の材料を数時間煮込んで作るが、" +
        "その他にトンコツや牛骨をもだしの材料とするラーメン店もあるなど多様。" +
        "ネギ、玉ねぎ、にんにく、にんじんの他にも独自の材料を加えるラーメン店も多く、背油" +
        "やラードなどの油を入れる店もある。"
}

ramenType[1] = {
    name: "miso",
    info: "ミソは肉の臭みを抑える効果がある。ダシはトンコツや野菜を使用し煮出している。"
}

ramenType[2] = {
    name: "tantan",
    info: "中国四川省発祥の辛みを効かせたひき肉やザーサイの細切りなどをのせた麺料理" + 
        "陳建民が日本向けに改良した。"
}

ramenType[3] = {
    name: "shio",
    info: "ダシを塩ダレで調味したスープにゆでた中華麺を入れた日本のラーメン。" +
        "スープは鶏がらや豚骨を使用したダシを塩ダレで調味したものであり、豚骨ラーメンのダ" +
        "シのように強く煮出すことがないため混濁していない。"
}

$("#ramen_type li").click(function () {
    $("#ramen_type_info").text(ramenType[this.id].info);
});