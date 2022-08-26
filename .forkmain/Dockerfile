FROM node:17 AS builder

WORKDIR /workdir

COPY ./ ./

RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine AS runner

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

RUN echo "user  root;\
worker_processes  2;\
events {\
    worker_connections  1024;\
}\
http {\
    include       mime.types;\
    default_type  application/octet-stream;\
    gzip  on;\
    sendfile        on;\
    keepalive_timeout  65;\
    server {\
        listen 80;\
        server_name  localhost;\
        location / {\
            root   /usr/share/nginx/html;\
            index  index.html index.htm;\
            \
        }\
        error_page 404 /;\
        location = /404.html {\
            root   /usr/share/nginx/html;\
        }\
    }\
}"\
> /etc/nginx/nginx.conf

RUN rm -rf ./*

COPY --from=builder /workdir/build/ ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]