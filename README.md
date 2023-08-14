# Bandera Auto Solutions Website

A website created for Bandera Auto Solutions to increase customer engagement and establish a digital platform for the company.

## How to run:

### Live
[https://banderaautosolutions.com/](https://banderaautosolutions.com/)

### Locally
#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Create new production build

#### `firebase deploy`
Navigate to the root folder of the downloaded project and run 'firebase deploy' in the console
Changes will be reflected within a few minutes

## Deploy new Firebase functions

#### `firebase deploy --only functions`
Navigate to ./functions and run 'firebase deploy --only functions' in the console

## Create Docker image and run in a container

#### `docker build -t bas .`
#### `docker run -dp 127.0.0.1:3000:3000 bas`
Navigate to the root folder of the project and run the first command in the console
After the image finishes building, run the second command in the console to spin up the container
You can now view the project at [http://localhost:3000](http://localhost:3000)
Read [Official Docker Docs](https://docs.docker.com/get-started/02_our_app/) for additional details
