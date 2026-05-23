# Trinity Consultant Platform

A comprehensive consulting service platform built with Flutter frontend and Node.js backend with PostgreSQL database.

## Project Structure

```
trinityconsultant/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── config/         # Database and env config
│   │   ├── routes/         # API routes
│   │   ├── middleware/     # Auth and custom middleware
│   │   ├── db/
│   │   │   └── schema.sql  # Database schema
│   │   └── index.js        # Server entry point
│   ├── .env.example
│   ├── package.json
│   ├── API.md
│   └── Dockerfile
│
├── frontend/               # Flutter web/mobile app
│   ├── lib/
│   │   ├── main.dart
│   │   ├── config/
│   │   ├── models/
│   │   ├── providers/
│   │   ├── screens/
│   │   ├── services/
│   │   └── widgets/
│   ├── pubspec.yaml
│   └── .env.example
│
├── docker-compose.yml      # Docker orchestration
└── README.md
```

## Features

### Core Features
- ✅ **Consultant Profiles** - Browse and filter consultants by expertise
- ✅ **Service Booking** - Schedule consultation appointments
- ✅ **User Authentication** - Secure JWT-based authentication
- ✅ **Payment Integration** - Secure payment processing
- ✅ **Admin Dashboard** - Manage consultants and services
- ✅ **Review & Rating** - Client feedback system
- ✅ **Search & Filter** - Find consultants by expertise, rating, hourly rate

### Technical Features
- 🔒 Secure authentication with JWT tokens
- 🗄️ Robust PostgreSQL database with indexed queries
- 📱 Responsive Flutter UI for web and mobile
- 🐳 Docker support for easy deployment
- 🔌 RESTful API with comprehensive documentation
- 🛡️ CORS protection and security headers (Helmet)

## Tech Stack

### Backend
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js 4.18
- **Database**: PostgreSQL 15
- **Authentication**: JWT (jsonwebtoken)
- **Security**: bcryptjs, helmet, CORS
- **Validation**: Joi
- **HTTP Client**: Axios

### Frontend
- **Framework**: Flutter 3.0+
- **State Management**: Provider 6.0+
- **HTTP Client**: Dio 5.2+
- **Local Storage**: Flutter Secure Storage, SharedPreferences
- **UI**: Material 3, Google Fonts
- **Utilities**: Intl, connectivity_plus

## Setup Instructions

### Prerequisites
- Node.js v16+ and npm
- Flutter v3.0+
- PostgreSQL 12+
- Docker & Docker Compose (optional)

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` with your database credentials:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=trinityconsultant
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
```

Start the server:
```bash
npm run dev          # Development with nodemon
npm start            # Production mode
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
flutter pub get
cp .env.example .env
```

Update `.env`:
```env
API_BASE_URL=http://localhost:5000
```

Run the app:
```bash
flutter run           # Default (mobile)
flutter run -d web   # Web version
flutter run -d chrome # Chrome
```

### Using Docker (Recommended)

```bash
docker-compose up --build
```

This will start:
- PostgreSQL on `localhost:5432`
- Backend API on `localhost:5000`
- Frontend on `localhost:3000`

## API Documentation

Comprehensive API documentation available in `backend/API.md`

### Key Endpoints

**Authentication**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

**Consultants**
- `GET /api/consultants` - List all consultants
- `GET /api/consultants/:id` - Get consultant details
- `POST /api/consultants` - Create consultant profile
- `PUT /api/consultants/:id` - Update consultant profile

**Bookings**
- `POST /api/bookings` - Create booking
- `GET /api/bookings/my-bookings` - Get user's bookings
- `PUT /api/bookings/:id/status` - Update booking status
- `PUT /api/bookings/:id/cancel` - Cancel booking

**Reviews**
- `POST /api/reviews` - Create review
- `GET /api/reviews/consultant/:consultantId` - Get consultant reviews

**Admin**
- `GET /api/admin/stats` - Platform statistics
- `GET /api/admin/users` - List all users
- `PUT /api/admin/consultants/:id/verify` - Verify consultant

## Database Schema

The application uses PostgreSQL with the following main tables:

- **users** - User accounts (clients, consultants, admins)
- **consultants** - Consultant profiles with expertise and ratings
- **services** - Services offered by consultants
- **bookings** - Booking records with status tracking
- **reviews** - Client reviews and ratings
- **payments** - Payment transaction records
- **availability_slots** - Consultant availability scheduling

See `backend/src/db/schema.sql` for complete schema.

## Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. User registers or logs in
2. Server returns a JWT token
3. Client stores token securely (Flutter Secure Storage)
4. Client includes token in Authorization header for all requests
5. Server validates token and processes request

## Development Workflow

### Creating a Feature

```bash
# Create feature branch from dev
git checkout -b feature/your-feature-name

# Make your changes
# Test locally
# Commit with clear messages
git add .
git commit -m "Add: Description of feature"

# Push and create pull request to dev
git push origin feature/your-feature-name
```

### Running Tests

```bash
# Backend tests (coming soon)
cd backend && npm test

# Frontend tests (coming soon)
cd frontend && flutter test
```

## Deployment

### Using Docker

```bash
docker-compose -f docker-compose.yml up -d
```

### Manual Deployment

1. Set up PostgreSQL database
2. Create `.env` file with production credentials
3. Install backend dependencies: `npm ci`
4. Build Flutter: `flutter build web`
5. Deploy using PM2 or systemd

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=production
DB_HOST=your_db_host
DB_PORT=5432
DB_NAME=trinityconsultant
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
API_BASE_URL=http://localhost:5000
```

## Security Considerations

- ✅ Passwords hashed with bcrypt
- ✅ JWT tokens for stateless authentication
- ✅ CORS protection
- ✅ Security headers with Helmet
- ✅ SQL injection prevention with parameterized queries
- ✅ Input validation with Joi
- ✅ Secure token storage in Flutter

## Troubleshooting

### Database Connection Error
- Check PostgreSQL is running
- Verify credentials in .env
- Ensure database exists

### Port Already in Use
- Backend: `lsof -i :5000` and kill process
- Frontend: `lsof -i :3000` and kill process

### Flutter Build Issues
- Run `flutter clean`
- Run `flutter pub get`
- Run `flutter pub upgrade`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request to the `dev` branch

## License

MIT License - see LICENSE file for details

## Contact

For questions or support, contact: itssubho2006@gmail.com

## Roadmap

- [ ] Real-time notifications with WebSocket
- [ ] Video consultation integration
- [ ] Advanced analytics dashboard
- [ ] Mobile app for iOS/Android
- [ ] Payment gateway integration (Stripe)
- [ ] Two-factor authentication
- [ ] Email notifications
- [ ] Consultant verification system
