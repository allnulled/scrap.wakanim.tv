# scrap.wakanim.tv

## Explicación

Primero, hay que cambiarse la IP a una de un país como Netherlands, y entrar en el site.

Sin entrar en demasiados detalles, aplicamos el script en [`./scripts/script.general.js`](#) en la página que nos carga los máximos títulos posibles. Hay algunas irregularidades en algunos campos (`episodes` y `seasons`).

El resultado es la extracción localizada en [`./datos/wakanim.tv.json`](#).

A continuación, embedemos los datos para que se muestren en la aplicación, y adecuamos los últimos detalles de la aplicación para que se ajuste.