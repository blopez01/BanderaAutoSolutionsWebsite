# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:18-alpine as react-build
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . ./
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production

# server environment
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html



ENV PORT 3000
ENV HOST 0.0.0.0
USER root
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
# Start the app
# CMD [ "npx", "serve", "build" ]
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"