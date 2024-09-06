FROM postgres
# esto es para que este en idioma español
RUN localedef -i es_ES -c -f UTF-8 -A /usr/share/locale/locale.alias es_ES.UTF-8
# esto crea una variable de entorno con el idioma
ENV LANG es_ES.utf8
COPY ./init.sql /docker-entrypoint-initdb.d
