# wallet-backend

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