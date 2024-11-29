# Use the official Node.js image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Expose the port your app will be running on (replace with your actual port, e.g., 3000)
EXPOSE 8080

# Command to start your Node.js application
CMD ["npm", "start"]
