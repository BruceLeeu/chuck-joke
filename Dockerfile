FROM nginxinc/nginx-unprivileged:1.25-alpine3.18

# switch to root user to prepare the image
USER root
RUN nginxPackages="Headers More"

# copy the build output
COPY dist/chuck-joke/browser /usr/share/nginx/html
COPY nginx_default.conf /etc/nginx/conf.d/default.conf

# set directory permissions for nginx user (Uncomment when assets are used)

# RUN chown -R nginx:nginx /usr/share/nginx/html/assets/

# switch to non-root user

USER nginx

CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
