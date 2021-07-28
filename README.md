# product-svc
A Nodejs app using [Express 4](http://expressjs.com/).

## Running Locally

**Step 1:** Make sure you have [Node.js](http://nodejs.org/) installed.

**Step 2:** Run these commands i.e., to clone the repo and installing dependencies:
```sh
git clone https://github.com/tanishkul/product-svc.git
npm install
```

**Step 3:** Create a file .env for the config variables which will be same as the .env.example.
```sh
NODE_ENV=dev
PORT=9000
MONGO_URL=mongodb://localhost:27017/product-db
```
- **NODE_ENV** is the node environment.
- **PORT** is the port number on which the node server will be running.
- **MONGO_URL** is the mongoDB connection string.

**STEP 4:** Start the service, using this command:
```sh
npm start
```
Your app should now be running on [localhost:9000](http://localhost:9000/api/).

**NOTE:** If you change value of any .env variable, then you have to restart the service.

## API DOCUMENTATION

### 1. Create a category
**Request**

`POST /api/category/` 
**For locally:** http://localhost:9000/api/category/

**Request Body(form-data)**:<br>

      name:category
      parentId:6100f0685b2a237a79e10de4 // Only provide parentId if you're creating sub-category, Then parentId refers to the category'id 

 **Response**
    
      {
    "data": {
        "name": "category",
        "parentId": "6100f0685b2a237a79e10de4",
        "originalId": "6100f08c5b2a237a79e10dea",
        "id": "6100f08c5b2a237a79e10dea"
    },
    "message": "Data created successfully",
    "status": "OK"
    }
    
### 2. Get all categories (main and sub)
**Request**

`GET /api/category/` 
**For locally:** http://localhost:9000/api/category/

 **Response**
    
     {
    "data": [
        {
            "_id": "61001bdfe727f61e31ce86be",
            "name": "Electronics",
            "parentId": null,
            "originalId": "61001bdfe727f61e31ce86be"
        },
        {
            "_id": "61001edde727f61e31ce86c0",
            "name": "Laptop",
            "parentId": "61001bdfe727f61e31ce86be",
            "originalId": "61001edde727f61e31ce86c0"
        },
        {
            "_id": "6100f0685b2a237a79e10de4",
            "name": "Furniture",
            "parentId": null,
            "originalId": "6100f0685b2a237a79e10de4"
        },
        {
            "_id": "6100f07c5b2a237a79e10de6",
            "name": "Table",
            "parentId": "6100f0685b2a237a79e10de4",
            "originalId": "6100f07c5b2a237a79e10de6"
        },
        {
            "_id": "6100f0835b2a237a79e10de8",
            "name": "Desk",
            "parentId": "6100f0685b2a237a79e10de4",
            "originalId": "6100f0835b2a237a79e10de8"
        },
        {
            "_id": "6100f08c5b2a237a79e10dea",
            "name": "Chair",
            "parentId": "6100f0685b2a237a79e10de4",
            "originalId": "6100f08c5b2a237a79e10dea"
        }
    ],
    "message": "Data fetched successfully",
    "status": "OK"
    }
    
### 3. Get main categories
**Request**

`GET /api/category/main` 
**For locally:** http://localhost:9000/api/category/main/

 **Response**
    
      {
    "data": [
        {
            "_id": "61001bdfe727f61e31ce86be",
            "name": "Electronics",
            "parentId": null,
            "originalId": "61001bdfe727f61e31ce86be"
        },
        {
            "_id": "6100f0685b2a237a79e10de4",
            "name": "Furniture",
            "parentId": null,
            "originalId": "6100f0685b2a237a79e10de4"
        }
    ],
    "message": "Data fetched successfully",
    "status": "OK"
    }
    
### 4. Get sub categories
**Request**

`GET /api/category/sub/:id` 
**For locally:** http://localhost:9000/api/category/sub/:id

**Request Params**:<br>

      id: 6100f0685b2a237a79e10de4 // id of the category

 **Response**
    
     {
    "data": [
        {
            "_id": "6100f07c5b2a237a79e10de6",
            "name": "Table",
            "parentId": "6100f0685b2a237a79e10de4",
            "originalId": "6100f07c5b2a237a79e10de6"
        },
        {
            "_id": "6100f0835b2a237a79e10de8",
            "name": "Desk",
            "parentId": "6100f0685b2a237a79e10de4",
            "originalId": "6100f0835b2a237a79e10de8"
        },
        {
            "_id": "6100f08c5b2a237a79e10dea",
            "name": "Chair",
            "parentId": "6100f0685b2a237a79e10de4",
            "originalId": "6100f08c5b2a237a79e10dea"
        }
    ],
    "message": "Data fetched successfully",
    "status": "OK"
    }
    
 ### 5. Create product
**Request**

`POST /api/product/` 
**For locally:** http://localhost:9000/api/product/

**Request Body**:<br>

    name:Hp laptop,
    categoryId:61001edde727f61e31ce86c0 // categoryId of the sub category

 **Response**
    
     {
    "data": {
        "categoryId": "61001edde727f61e31ce86c0",
        "name": "Hp laptop",
        "originalId": "610139875a171c27c0441f64",
        "id": "610139875a171c27c0441f64"
    },
    "message": "Data created successfully",
    "status": "OK"
    }
    
 ### 6. Get product of a category
**Request**

`GET /api/product/category/:id` 
**For locally:** http://localhost:9000/api/product/category/:id

**Request Params**:<br>

      id: 61001bdfe727f61e31ce86be // id of category

 **Response**
    
      {
    "data": [
        {
            "_id": "610022a205893f4e45ca757d",
            "categoryId": "61001edde727f61e31ce86c0",
            "name": "Dell Inspirion",
            "originalId": "610022a205893f4e45ca757d"
        },
        {
            "_id": "61002a975a508911b6fe27bb",
            "categoryId": "61001edde727f61e31ce86c0",
            "name": "Hp laptop",
            "originalId": "61002a975a508911b6fe27bb"
        }
    ],
    "message": "Data fetched successfully",
    "status": "OK"
    }
    
 ### 7. Get product of a subcategory
**Request**

`GET /api/product/subcategory/:id` 
**For locally:** http://localhost:9000/api/product/subcategory/:id

**Request Params**:<br>

      id: 61001edde727f61e31ce86c0 // id of subcategory

 **Response**
    
      {
    "data": [
        {
            "_id": "610022a205893f4e45ca757d",
            "categoryId": "61001edde727f61e31ce86c0",
            "name": "Dell Inspirion",
            "originalId": "610022a205893f4e45ca757d"
        },
        {
            "_id": "61002a975a508911b6fe27bb",
            "categoryId": "61001edde727f61e31ce86c0",
            "name": "Hp laptop",
            "originalId": "61002a975a508911b6fe27bb"
        }
    ],
    "message": "Data fetched successfully",
    "status": "OK"
    }
 
    
## Database and query design
  In this nodejs service, mongoose is used to save the categories and products.
