const datos_json = require(__dirname + "/../datos/wakanim.tv.json");
const sort_properties = function sortObjectByKeyNameList(object, sortWith) {
    let keys;
    let sortFn;
    if (typeof sortWith === 'function') {
        sortFn = sortWith;
    } else {
        keys = sortWith;
    }
    let objectKeys = Object.keys(object);
    return (keys || []).concat(objectKeys.sort(sortFn)).reduce(function (total, key) {
        if (objectKeys.indexOf(key) !== -1) {
            total[key] = object[key];
        }
        return total;
    }, Object.create(null));
};
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
    datos_json[index] = sort_properties(datos_json[index], [
        "title",
        "seasons",
        "episodes",
        "rating",
        "year",
        "genres",
        "description",
        "link",
        "image"
    ]);
}
const { Parser } = require("@json2csv/plainjs");
try {
    const parser = new Parser();
    const datos_csv = parser.parse(datos_json);
    require("fs").writeFileSync(__dirname + "/../datos/wakanim.tv.csv", datos_csv, "utf8");
    console.log("OK.");
} catch (err) {
    console.error(err);
}