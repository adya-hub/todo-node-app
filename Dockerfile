# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy app source including views
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
