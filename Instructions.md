"Author": Asma Sassi
"Email": asmasassi123@gmail.com
--------------------------------------------------
Instructions:
I- Installing NPM
    1. First of all, to manipulate packages of application we need Node Package Manager(NPM)
    2. We need to download Node.js: https://nodejs.org/en/
    3. Update npm in CMD > npm install npm@latest -g
    4. npm init to create package.json where all project's details is included in there (packages installed, version, etc.)
II- Installing packages:
    1. In order to build an AngularJS App, we need to install angular package > npm install --save angular
    2. To make our App responsive, we install bootstrap package > npm install bootstrap@3
    3. Install jquery libraries for bootstrap needs > npm install jquery
    4. To use global icons, we install font-awesome > npm install font-awesome@4
    5. To be able to use app's routing, we install angular-route > npm install angular-route
II- Project structure: 
    .Now, we will create two files in the root directory. app.js and index.html
    1. index.html 
    2. app.js: include routing
    3. assets: all necessary libraries
    4. node_modules: It contains packages that are installed by npm
    5. controllers
    6. views: partial views that will be included later in index.html
III- Project development:
    1. Build index.html and call libraries in it
    2. Build header.html, then call it into index.html
    3. The same thing with footer.html
    4. Configure routes and views in app.js
    5. Test
    6. Adding Contact and About Pages
      6.a) Add contact.css under styles folder
      6.b) Call it in index.html
     // 6.c) Build contact form (contact.html)
     // 6.d) Add contact.php in index.html for form action
IV-  Chart:
    1. To add graph in the app, we install angular-chart package >npm install angular-chart.js --save
    2. Include the dependencies in index.html
    3. Declare a dependency 'chart.js' in app.js
  
 

