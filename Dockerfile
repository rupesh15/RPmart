# Use an official Node.js image as the base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app (assuming create-react-app or similar)
RUN npm run build

# Expose port 80
# Start the app using a simple HTTP server
CMD ["npx", "serve", "-s", "build", "-l", "80"]
