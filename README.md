# Messaging Website Project
*__Disclosure:__ The goal of this project is to learn how to create a general messaging website, which included log-in, sign-up, add/remove friends, and messaging system. It helping me being more involve with Web Development field and familiarize myself with Angular 6, Socket IO, Json Web Token, CORS, MongoDB, etc. This is a personal project and used for Senior Design CECS 491A & CECS 491B class at CSULB __(Full project link for the class, which included ASL single hand gesture recognition, python peer-to-peer video chat, and documentations can be found [here](https://github.com/chriztaka1997/ASL-to-hand-recognition))__. Majority code and styling of this project is from following tutorial [Angular Ionic Node Build A Real Web Mobile Chat App](https://www.udemy.com/angular-ionic-node-build-a-real-web-mobile-chat-app/) class on Udemy. I simply modify the tutorial and add extra functionalities as needed to build this website.*




### Instruction
*Note*: This will required 3 terminal. In my case, 2 terminal and a cmd. Try `sudo` the command if console return access errors. 

#### 1. Run Nodemon Server
```
cd chatApplication/server
nodemon server.js
```
![Nodemon Server](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/nodemon.PNG)
#### 2. Run MongoDB Server
- Make sure you have MongoDB Server install or download from [here](https://www.mongodb.com/download-center/community)
- I use cmd because MongoDB doesn't work with Linux Sub-system on Windows 10.
- In my case, I run this command:
` "N:\Programs\MongoDB\Server\4.0\bin\mongod.exe" --dbpath "N:\Programs\MongoDB\data\db" `
- Format:
` Windows 10 command format: directory_path_to_mongod.exe_file  --dbpath directory_path_to_the_database `
- Follow [MongoDB Documentation](https://docs.mongodb.com/manual/installation/) for instruction on how to run the server
![MongoDB Server](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/mongoDB.PNG)
#### 3. Run Angular Sever
```
cd chatApplication
ng serve -o
```
- The `-o` or `--open` command from Angular CLI will automatic open the browser with the address `http://localhost:4200` 
![Angular Server](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/angular.PNG)
### Sample Pictures
![LogIn](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/login.PNG)
![SignUp](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/signup.PNG)
![Homepage](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/home.PNG)
![Messaging](https://github.com/Insignite/MessagingWebsite/blob/master/sampleOutput/message.PNG)
