 # Or node:alpine if you prefer latest version

FROM node:lts-alpine 

WORKDIR /app

 # Copy package.json and package-lock.json
COPY package*.json ./ 

# Install dependencies

RUN npm install  
# Copy entire project codebase
COPY . .  

# Expose port (adjust based on your development server or production setup)
EXPOSE 5173  

# Command to run the application (replace with your actual command)
CMD [ "npm", "run", "dev" ]  