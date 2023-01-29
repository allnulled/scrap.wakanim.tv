# scrap.wakanim.tv

Scrap del site wakanim.tv. Más de 380 títulos.

## Aplicación

Puedes ir directamente a la aplicación de búsqueda a:

 - [https://allnulled.github.io/scrap.wakanim.tv](https://allnulled.github.io/scrap.wakanim.tv/index.html)

## Explicación

El scrap ha sido realizado con:
 - Script de cliente:
   - El script de [`./scripts/script.general.js`](https://github.com/allnulled/scrap.wakanim.tv/blob/main/scripts/script.general.js).

## Pasos

Primero, hay que cambiarse la IP a una de un país como (en este caso) **Netherlands**, y entrar en el site.

Sin entrar en demasiados detalles (porque puede ser tedioso el proceso, y a veces se dan más vueltas de las necesarias, para ajustarse a las casuísticas del escenario, revisiones y comprobaciones de datos, etc.), se aplica el script en [`./scripts/script.general.js`](https://github.com/allnulled/scrap.wakanim.tv/blob/main/scripts/script.general.js) en la página que nos carga los máximos títulos posibles, y esto imprime por consola un JSON, que es el que se aprovecha luego. Hay algunas irregularidades en algunos campos (`episodes` y `seasons`). *Parecen* irregularidades lícitas: los títulos no tienen temporadas porque se refieren a alguna temporada concreta, o el formato en que se presenta no acepta episodios.

El resultado es la extracción localizada en [`./datos/wakanim.tv.json`](https://github.com/allnulled/scrap.wakanim.tv/blob/main/datos/wakanim.tv.json).

A continuación, embedemos los datos para que se muestren en la aplicación (en [./app/app.calo](https://github.com/allnulled/scrap.wakanim.tv/blob/main/app/app.calo)), y adecuamos los últimos detalles de la aplicación para que se ajuste.

## Notas

 - Las imágenes se han obviado para no molestar demasiado a los servidores de [wakanim.tv](wakanim.tv).
 - Los datos recopilados están en formato JSON en [`datos/wakanim.tv.json`](https://github.com/allnulled/scrap.wakanim.tv/blob/main/datos/wakanim.tv.json).