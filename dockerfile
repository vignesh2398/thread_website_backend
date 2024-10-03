# 1. Use the official Node.js image as the base image
FROM node:18

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy the package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install --production

# 5. Copy the rest of the application code to the working directory
COPY . .

# 6. Expose the port the app runs on (change if different)
EXPOSE 3000

# 7. Define the command to run the application
CMD ["node", "index.js"]
