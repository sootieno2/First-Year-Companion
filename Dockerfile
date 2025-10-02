FROM nginx:alpine

# Copy site files into Nginx default folder
COPY . /usr/share/nginx/html

EXPOSE 80
