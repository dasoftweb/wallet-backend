# wallet-backend

#Categories:
## GET /api/v1/categories
Respose:
```
{
    "status": "success",
    "code": 200,
    "data": {
        "result": [
            {
                "_id": "61291380ad91f55c123d058f",
                "name": "Main expanses",
                "type": "-"
            },
            {
                "_id": "61291e18ad91f55c123d059e",
                "name": "Food",
                "type": "-"
            },
            {
                "_id": "61291e72ad91f55c123d059f",
                "name": "Car",
                "type": "-"
            },
            {
                "_id": "61292065ad91f55c123d05a0",
                "name": "Regular Income",
                "type": "+"
            },
            {
                "_id": "6129208dad91f55c123d05a1",
                "name": "Non Regular Income",
                "type": "+"
            }
        ]
    }
}
```


#Statistic:

## GET /api/v1/statistics?date=2019-01
Respose:
```
{
    "status": "success",
    "code": 200,
    "data": {
        "result": [
            {
                "_id": "Car",
                "outcom": 500
            },
            {
                "_id": "Other",
                "outcom": 7000
            }
        ]
    }
}
```

#Transactions:
## POST /api/v1/transactions
Request:
```
{
    "name": "Some Alcohol",
    "type": "+",
    "date": "2021-08-01",
    "category": "Other",
    "amount": "3000"
}
```
Respose:
```
{
    "status": "success",
    "code": 201,
    "data": {
        "result": {
            "_id": "61290c064cf6ef3b54679911",
            "name": "Some Alcohol",
            "type": "+",
            "date": "2021-08-01T00:00:00.000Z",
            "category": "Other",
            "amount": 3000,
            "owner": "61290b884cf6ef3b54679906",
            "balanceAfter": 3000,
            "createdAt": "2021-08-27T16:00:06.966Z",
            "updatedAt": "2021-08-27T16:00:06.966Z"
        }
    }
}
```

## GET /api/v1/transactions
Respose:
```
{
    "status": "success",
    "code": 200,
    "data": {
        "result": {
            "transactions": [
                {
                    "_id": "61291f173a64702eb8e29917",
                    "type": "-",
                    "date": "2021-08-01T00:00:00.000Z",
                    "category": "Food",
                    "amount": 300,
                    "comment": "burger",
                    "owner": "6129161b985ce51bd020ef90",
                    "balanceAfter": -300,
                    "createdAt": "2021-08-27T17:21:27.096Z",
                    "updatedAt": "2021-08-27T17:21:27.096Z"
                },
                {
                    "_id": "61291f293a64702eb8e2991c",
                    "type": "-",
                    "date": "2021-08-01T00:00:00.000Z",
                    "category": "Car",
                    "amount": 1000,
                    "comment": "Repair",
                    "owner": "6129161b985ce51bd020ef90",
                    "balanceAfter": -1300,
                    "createdAt": "2021-08-27T17:21:45.329Z",
                    "updatedAt": "2021-08-27T17:21:45.329Z"
                },
                {
                    "_id": "612920f9203d89537c84de81",
                    "type": "+",
                    "date": "2021-08-01T00:00:00.000Z",
                    "category": "Non Regular Income",
                    "amount": 1000,
                    "comment": "",
                    "owner": "6129161b985ce51bd020ef90",
                    "balanceAfter": -300,
                    "createdAt": "2021-08-27T17:29:29.473Z",
                    "updatedAt": "2021-08-27T17:29:29.473Z"
                }
            ],
            "pagination": {
                "total": 3,
                "offset": null,
                "perPage": 20,
                "pageCount": 1,
                "currentPage": null,
                "pagingCounter": null,
                "hasPrevPage": false,
                "hasNextPage": false,
                "prev": null,
                "next": null
            }
        }
    }
}
```

#Users:

## POST /api/v1/users/login
Request:
```
{
    "email": "XXX@XXX.XXX",
    "password": "XXX"
}
```
Respose:
```
{
    "status": "OK",
    "code": 200,
    "data": {
        "token": "XXX",
        "user": {
            "email": "XXX@XXX.XXX",
            "name": "XXX"
        }
    }
}
```
## POST /api/v1/users/signup
Request:
```
{
    "email": "XXX@XXX.XXX",
    "password": "XXX",
    "name": "XXX"
}
```
Respose:
```
{
    "status": "Created",
    "code": 201,
    "data": {
        "user": {
            "email": "XXX@XXX.XXX",
            "name": "XXX"
        },
        "message": "Please, verify your E-mail"
    }
}
```
## GET /api/v1/users/logout
Respose:
```
{
    "status": "success",
    "code": 200,
    "message": "Logout success"
}
```
## GET - /api/v1/users/current
Respose:
```
{
    "status": "success",
    "code": 200,
    "data": {
        "email": "XXX@XXX.XXX",
        "name": "XXX"
    }
}
```
## PATCH - /api/v1/users
Request:
```
{ "name": "XXX" }
```
Respose:
```
{
    "status": "success",
    "code": 201,
    "data": {
        "user": {
            "email": "XXX",
            "name": "XXX"
        }
    }
}
```
## GET - /api/v1/users/verify/{token}
Respose:
```
{"status":"success","code":200,"message":"Verification successful"}
```
## POST - /api/v1/users/verify
Request:
```
{
    "email": "XXX@XXX.XXX"
}
```
Respose:
```
{"status":"success","code":200,"message":"Verification successful"}
```