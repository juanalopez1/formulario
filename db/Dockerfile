FROM postgres
# esto es para que este en idioma español
RUN localedef -i en_EN -c -f UTF-8 -A /usr/share/locale/locale.alias en_EN.UTF-8
# esto crea una variable de entorno con el idioma
ENV LANG en_EN.utf8
COPY ./init.sql /docker-entrypoint-initdb.d
