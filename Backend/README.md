# User Registration and Login Endpoint Documentation

## 1. Register User

### Endpoint
`POST /users/register`

### Description
Registers a new user in the system. Validates input, hashes the password, creates a user, and returns an authentication token with user data.

### Request Body
```
{
  "fullname": {
    "firstname": "<string, min 3 chars>",
    "lastname": "<string, optional>"
  },
  "email": "<valid email>",
  "password": "<string, min 6 chars>"
}
```

#### Example
```
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Responses
- **201 Created**: Returns JWT token and user object.
- **400 Bad Request**: Validation errors.
- **500 Internal Server Error**: Server error.

---

## 2. Login User

### Endpoint
`POST /users/login`

### Description
Authenticates a user with email and password. Returns a JWT token and user data on success.

### Request Body
```
{
  "email": "<valid email>",
  "password": "<string, min 6 chars>"
}
```

#### Example
```
{
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

### Responses
- **200 OK**: Returns JWT token and user object.
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // ...other user fields
    }
  }
  ```
- **400 Bad Request**: Validation errors.
  ```json
  {
    "errors": [
      {
        "msg": "invalid email",
        "param": "email",
        "location": "body"
      },
      // ...other errors
    ]
  }
  ```
- **401 Unauthorized**: Invalid email or password.
  ```json
  {
    "message": "Invalid email or password"
  }
  ```
- **500 Internal Server Error**: Server error.

---

## 3. Get User Profile

### Endpoint
`GET /users/profile`

### Description
Retrieves the profile information of the currently authenticated user.

### Authentication
Requires a valid JWT token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

### Responses
- **200 OK**: Returns user profile data
  ```json
  {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // ...other user fields
  }
  ```
- **401 Unauthorized**: Invalid or missing token
- **500 Internal Server Error**: Server error

---

## 4. Logout User

### Endpoint
`POST /users/logout`

### Description
Logs out the currently authenticated user by clearing the token cookie and blacklisting the current token.

### Authentication
Requires a valid JWT token either in cookies or Authorization header:
```
Authorization: Bearer <jwt_token>
```

### Responses
- **200 OK**: Successfully logged out
  ```json
  {
    "message": "Logged out successfully"
  }
  ```
- **401 Unauthorized**: Invalid or missing token
- **500 Internal Server Error**: Server error

---

# Driver Endpoints Documentation

## 1. Register Driver

### Endpoint
`POST /drivers/register`

### Description
Registers a new driver in the system. Validates input including vehicle information, creates a driver account, and returns the driver data.

### Request Body
```jsonc
{
  "fullname": {
    "firstname": "John", // required, string
    "lastname": "Smith"  // optional, string
  },
  "email": "john.smith@example.com", // required, valid email, unique
  "password": "secret123",           // required, string, min 6 chars
  "vehicle": {
    "color": "Black",                // required, string
    "numberplate": "ABC123",         // required, string, min 4 chars
    "capacity": 4,                    // required, integer, min 2
    "vehicleType": "car"             // required, one of: "car", "bike", "Auto-Rickshaw", "bus"
  }
}
```

### Success Response
- **201 Created**
```jsonc
{
  "token": "<jwt_token>",
  "driver": {
    "_id": "<driver_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "numberplate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other driver fields
  }
}
```

### Error Responses
- **400 Bad Request** (validation or duplicate email)
```jsonc
{
  "errors": [
    {
      "msg": "Vehicle capacity must be at least 2", // example error message
      "param": "vehicle.capacity",
      "location": "body"
    }
    // ...other validation errors
  ]
}
```
Or
```jsonc
{
  "message": "Driver already exists with this email"
}
```
- **500 Internal Server Error**
```jsonc
{
  "error": "Internal server error"
}
```

---

## 2. Login Driver

### Endpoint
`POST /drivers/login`

### Description
Authenticates a driver with email and password. Returns a JWT token and driver data on success.

### Request Body
```jsonc
{
  "email": "john.smith@example.com", // required, valid email
  "password": "secret123"            // required, string
}
```

### Success Response
- **200 OK**
```jsonc
{
  "token": "<jwt_token>",
  "driver": {
    "_id": "<driver_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "numberplate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other driver fields
  }
}
```

### Error Responses
- **400 Bad Request** (validation or invalid credentials)
```jsonc
{
  "errors": [
    {
      "msg": "Invalid email format", // example error message
      "param": "email",
      "location": "body"
    }
    // ...other validation errors
  ]
}
```
Or
```jsonc
{
  "message": "Invalid email and password"
}
```
- **500 Internal Server Error**
```jsonc
{
  "error": "Internal server error"
}
```

---

## 3. Get Driver Profile

### Endpoint
`GET /drivers/profile`

### Description
Retrieves the profile information of the currently authenticated driver.

### Authentication
Requires a valid JWT token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

### Success Response
- **200 OK**
```jsonc
{
  "driver": {
    "_id": "<driver_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Smith"
    },
    "email": "john.smith@example.com",
    "vehicle": {
      "color": "Black",
      "numberplate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
    // ...other driver fields
  }
}
```

### Error Responses
- **401 Unauthorized**: Invalid or missing token
- **404 Not Found**: Driver not found
- **500 Internal Server Error**: Server error

---

## 4. Logout Driver

### Endpoint
`GET /drivers/logout`

### Description
Logs out the currently authenticated driver by clearing the token cookie and blacklisting the current token.

### Authentication
Requires a valid JWT token either in cookies or Authorization header:
```
Authorization: Bearer <jwt_token>
```

### Success Response
- **200 OK**
```jsonc
{
  "message": "Logged out successfully"
}
```

### Error Responses
- **401 Unauthorized**: Invalid or missing token
- **500 Internal Server Error**: Server error

---

## Notes
- All vehicle information is required for driver registration
- Vehicle type is restricted to predefined options
- Vehicle capacity must be appropriate for the vehicle type
- Email must be unique in the system
- Protected endpoints (profile and logout) require a valid JWT token
- Tokens are automatically invalidated after logout

