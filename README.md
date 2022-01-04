 ## Description
 VUE 3 ToDo App With Rest API
 ## Screenshot
 ![alt text](https://raw.githubusercontent.com/gazi-dis/vue3-todo-withapi/master/screenshots/ss1.png)
 ## Installation Prerequisites
 ### Fake REST API - JSON SERVER
 #### Json Server Installation
 ```sh
npm install -g json-server
```
 #### Serve REST Service
 ```sh
cd fakeRestApi
json-server --watch db.json
```
#### API Test
![alt text](https://raw.githubusercontent.com/gazi-dis/vue3-todo-withapi/master/screenshots/ss2.png)

## Project Installation
```sh
npm install
npm run serve
```
### For production environments...

```sh
npm install --production
NODE_ENV=production node app
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
localhost:8080
```

## License

MIT
