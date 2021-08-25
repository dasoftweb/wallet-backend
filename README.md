# wallet-backend

#Balance:

## GET /api/v1/statistics/balance?dateFrom=2019-01&dateTo=2021-09
Respose:
```
{
    "status": "success",
    "code": 200,
    "data": {
        "result": [
            {
                "_id": "userbalance",
                "totalincom": 3000,
                "totaloutcom": 7500,
                "balance": -4500
            }
        ]
    }
}
```
#Statistic:

## GET /api/v1/statistics?dateFrom=2019-01&dateTo=2021-09
Respose:
```
{
    "status": "success",
    "code": 200,
    "data": {
        "result": [
            {
                "_id": "Car",
                "totalincom": 3000,
                "totaloutcom": 500
            },
            {
                "_id": "Other",
                "totalincom": 0,
                "totaloutcom": 7000
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
    "type": "-",
    "date": "2021-08-01",
    "category": "Other",
    "amount": "7000"
}
```
Respose:
```
{
    "status": "success",
    "code": 201,
    "data": {
        "result": {
            "_id": "61265a0ddb8c174444eb3562",
            "name": "Some Alcohol",
            "type": "-",
            "date": "2021-08-01T00:00:00.000Z",
            "category": "Other",
            "amount": 7000,
            "owner": "6123a14b17ac310c70995d4c",
            "createdAt": "2021-08-25T14:56:13.816Z",
            "updatedAt": "2021-08-25T14:56:13.816Z"
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
                    "_id": "6123fc8746d7891d101b4b50",
                    "name": "TEST",
                    "type": "+",
                    "date": "2019-01-01T00:00:00.000Z",
                    "category": "Car",
                    "amount": 1500,
                    "owner": "6123a14b17ac310c70995d4c",
                    "createdAt": "2021-08-23T19:52:39.143Z",
                    "updatedAt": "2021-08-23T19:52:39.143Z"
                },
                ......
            ],
            "pagination": {
                "total": 5,
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