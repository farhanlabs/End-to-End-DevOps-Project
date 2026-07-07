# Stage 1: Code ko build karne ke liye
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production me serve karne ke liye (Nginx)
FROM nginx:alpine
# Vite ka output 'dist' folder me jata hai, isliye /app/dist use kiya hai
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]