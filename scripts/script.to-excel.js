const { json2csv } = require("json-2-csv");
const datos_json = require(__dirname + "/../datos/wakanim.tv.json");
for(let index = 0; index < datos_json.length; index++) {
    datos_json[index].genres = datos_json[index].genres.join(" | ");
    if(datos_json[index].seasons) {
        datos_json[index].seasons = datos_json[index].seasons.replace(" seasons", "").replace(" season", "").trim();
    } else {
        datos_json[index].seasons = 0;
    }
    if(datos_json[index].rating) {
        datos_json[index].rating = datos_json[index].rating.replace("%", "").trim();
    } else {
        datos_json[index].rating = 0;
    }
    if(datos_json[index].episodes) {
        datos_json[index].episodes = datos_json[index].episodes.replace(" episodes", "").replace(" episode", "").trim();
    } else {
        datos_json[index].episodes = 0;
    }
    datos_json[index].title = datos_json[index].title.replace(";", '";');
}
json2csv(datos_json, function(error, datos_csv) {
    require("fs").writeFileSync(__dirname + "/../datos/wakanim.tv.csv", datos_csv, "utf8");
}, {
    excelBOM: true
});
