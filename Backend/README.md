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
```json
{
  "fullname": {
    "firstname": "<string, required>",
    "lastname": "<string, optional>"
  },
  "email": "<valid email>",
  "password": "<string, min 6 chars>",
  "vehicle": {
    "color": "<string, required>",
    "numberplate": "<string, min 4 chars>",
    "capacity": "<number, min 2>",
    "vehicleType": "car" | "bike" | "Auto-Rickshaw" | "bus"
  }
}
```

#### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "secret123",
  "vehicle": {
    "color": "Black",
    "numberplate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Validation Rules
- First name is required
- Email must be valid format
- Password must be at least 6 characters
- Vehicle color is required
- Vehicle number plate must be at least 4 characters
- Vehicle capacity must be at least 2
- Vehicle type must be one of: "car", "bike", "Auto-Rickshaw", "bus"

### Responses
- **201 Created**: Returns driver object with vehicle details
  ```json
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
    }
  }
  ```
- **400 Bad Request**: Validation errors
  ```json
  {
    "errors": [
      {
        "msg": "Vehicle capacity must be at least 2",
        "param": "vehicle.capacity",
        "location": "body"
      }
      // ...other validation errors
    ]
  }
  ```
- **500 Internal Server Error**: Server error

### Notes
- All vehicle information is required for driver registration
- Vehicle type is restricted to predefined options
- Vehicle capacity must be appropriate for the vehicle type
- Email must be unique in the system

