# Use lightweight Nginx base image
FROM nginx:alpine

# Copy static files from /public into Nginx's default directory
COPY public /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Nginx will start automatically via the base image's CMD
