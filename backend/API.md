# Trinity Consultant - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All authenticated endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### Register
- **Method**: POST
- **Path**: `/auth/register`
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe",
  "role": "client" // or "consultant"
}
```

### Login
- **Method**: POST
- **Path**: `/auth/login`
- **Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Get Current User
- **Method**: GET
- **Path**: `/auth/me`
- **Authentication**: Required

### Update Profile
- **Method**: PUT
- **Path**: `/auth/profile`
- **Authentication**: Required
- **Body**:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "123456789",
  "bio": "Professional consultant"
}
```

---

## Consultant Endpoints

### Get All Consultants
- **Method**: GET
- **Path**: `/consultants`
- **Query Parameters**:
  - `expertise`: Filter by expertise
  - `minRating`: Minimum rating (1-5)
  - `sortBy`: "rating" or "price"

### Get Consultant by ID
- **Method**: GET
- **Path**: `/consultants/:id`

### Create Consultant Profile
- **Method**: POST
- **Path**: `/consultants`
- **Authentication**: Required
- **Body**:
```json
{
  "expertise": ["Business Strategy", "Marketing"],
  "hourlyRate": 100,
  "bio": "Senior consultant with 10 years experience",
  "certifications": ["MBA", "PMP"],
  "yearsExperience": 10,
  "languages": ["English", "Spanish"]
}
```

### Update Consultant Profile
- **Method**: PUT
- **Path**: `/consultants/:id`
- **Authentication**: Required (Consultant only)

### Get Consultant Services
- **Method**: GET
- **Path**: `/consultants/:id/services`

---

## Booking Endpoints

### Create Booking
- **Method**: POST
- **Path**: `/bookings`
- **Authentication**: Required
- **Body**:
```json
{
  "consultantId": 1,
  "serviceId": 1,
  "bookingDate": "2024-06-15T10:00:00Z",
  "durationMinutes": 60,
  "notes": "Discuss business strategy"
}
```

### Get My Bookings
- **Method**: GET
- **Path**: `/bookings/my-bookings`
- **Authentication**: Required

### Get Booking by ID
- **Method**: GET
- **Path**: `/bookings/:id`
- **Authentication**: Required

### Update Booking Status
- **Method**: PUT
- **Path**: `/bookings/:id/status`
- **Authentication**: Required
- **Body**:
```json
{
  "status": "confirmed" // pending, confirmed, completed, cancelled
}
```

### Cancel Booking
- **Method**: PUT
- **Path**: `/bookings/:id/cancel`
- **Authentication**: Required

---

## Review Endpoints

### Create Review
- **Method**: POST
- **Path**: `/reviews`
- **Authentication**: Required
- **Body**:
```json
{
  "bookingId": 1,
  "rating": 5,
  "comment": "Excellent service!"
}
```

### Get Consultant Reviews
- **Method**: GET
- **Path**: `/reviews/consultant/:consultantId`

### Get Review Statistics
- **Method**: GET
- **Path**: `/reviews/consultant/:consultantId/stats`

---

## Admin Endpoints

### Get Platform Statistics
- **Method**: GET
- **Path**: `/admin/stats`
- **Authentication**: Required (Admin only)

### Get All Users
- **Method**: GET
- **Path**: `/admin/users`
- **Authentication**: Required (Admin only)

### Verify Consultant
- **Method**: PUT
- **Path**: `/admin/consultants/:id/verify`
- **Authentication**: Required (Admin only)

### Get All Bookings
- **Method**: GET
- **Path**: `/admin/bookings`
- **Authentication**: Required (Admin only)

### Get All Payments
- **Method**: GET
- **Path**: `/admin/payments`
- **Authentication**: Required (Admin only)

### Deactivate User
- **Method**: PUT
- **Path**: `/admin/users/:id/deactivate`
- **Authentication**: Required (Admin only)

---

## Error Responses

### Validation Error (400)
```json
{
  "error": "Missing required fields"
}
```

### Unauthorized (401)
```json
{
  "error": "Invalid token"
}
```

### Forbidden (403)
```json
{
  "error": "Admin access required"
}
```

### Not Found (404)
```json
{
  "error": "Consultant not found"
}
```

### Server Error (500)
```json
{
  "error": "Failed to create booking"
}
```
