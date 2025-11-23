# 🏪 Enterpot - Wholesale Food Products E-Commerce Platform

<div align="center">

![Flutter](https://img.shields.io/badge/Flutter-3.0+-02569B?logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-3.0+-0175C2?logo=dart&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS-lightgrey)
![Backend](https://img.shields.io/badge/Backend-.NET-512BD4?logo=.net&logoColor=white)
![License](https://img.shields.io/badge/License-Proprietary-red)

[![Google Play](https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.newenterpot.app)
[![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)](https://apps.apple.com/app/id6451003683)

**Enterprise-grade B2B E-Commerce Platform for Wholesale Food Products Distribution**

*Serving retail traders across Saudi Arabia* | *بيع منتجات الجملة للمواد الغذائية لتجار التجزئة*

[Features](#-key-features) • [Architecture](#-architecture) • [Tech Stack](#-technology-stack) • [Screens](#-app-screens--features)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Business Model](#-business-model)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Technical Highlights](#-technical-highlights)
- [App Screens & Features](#-app-screens--features)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [Contributing](#-contributing)

---

## 🎯 Overview

**Enterpot** is a sophisticated, production-ready mobile application designed for wholesale food product distribution. The platform connects large-scale food suppliers with retail traders across Saudi Arabia, facilitating bulk purchases, order management, and real-time delivery tracking.

### Business Context
- **Target Market**: Saudi Arabia (KSA)
- **Business Type**: B2B Wholesale E-Commerce
- **Primary Users**: Retail traders purchasing food products in bulk
- **Language Support**: Arabic (RTL) & English (LTR)
- **Backend**: .NET RESTful API

### 📱 Download Links
- **Android**: [Google Play Store](https://play.google.com/store/apps/details?id=com.newenterpot.app)
- **iOS**: [App Store](https://apps.apple.com/app/id6451003683)

**Package Information**:
- **Android Package**: `com.newenterpot.app`
- **iOS Bundle ID**: `com.directchoice.enterpot`

---

## 💼 Business Model

### For Retail Traders (Clients)
- Browse extensive catalog of wholesale food products
- Place bulk orders with quantity management
- Track orders in real-time
- Manage multiple delivery addresses
- View order history and invoices
- Receive push notifications for order updates
- Guest browsing capability

### For Delivery Personnel
- View assigned orders on interactive map
- Real-time location tracking (updates every 15 seconds)
- Navigate to delivery locations
- Verify delivery codes
- Update order status
- Download invoices
- Track delivery history

### For Business Owners
- Remote app control (Kill Switch)
- Analytics integration (Firebase Analytics)
- Multi-flavor support for different environments
- Comprehensive order management system
- Real-time delivery tracking

---

## 🚀 Key Features

### 🗺️ **Advanced Google Maps Integration**
- **Interactive Map Views**: Multiple map implementations for different use cases
  - Order location picker with custom markers
  - Delivery orders map with multiple markers
  - Real-time delivery tracking map
  - Client location visualization
- **Real-time Location Tracking**: 
  - Background location updates every 15 seconds
  - High-accuracy GPS positioning
  - Location persistence to backend
  - Custom marker icons and animations
- **Navigation Integration**: Direct integration with external map apps
- **Polyline Support**: Route visualization capabilities

### 👥 **Dual User System Architecture**
- **Client Mode**: Full e-commerce experience
  - Product browsing and search
  - Shopping cart management
  - Order placement and tracking
  - Address management
  - Profile management
- **Delivery Mode**: Delivery personnel interface
  - Order assignment view
  - Map-based order visualization
  - Delivery verification system
  - Status update workflow
- **Dynamic Theme Switching**: Different UI themes per user type
- **Role-based Navigation**: Context-aware routing

### 🔔 **Comprehensive Notification System**
- **Firebase Cloud Messaging (FCM)**:
  - Foreground notifications (Android)
  - Background message handling
  - Notification tap navigation
  - Deep linking to order details
- **Local Notifications**: Platform-specific notification channels
- **Notification History**: In-app notification center
- **Smart Token Management**: 
  - Automatic token refresh
  - Token caching for offline scenarios
  - Login-triggered token sync

### 💳 **Payment Gateway Integration - ClickPay**
- **ClickPay Payment Gateway**: Integrated with ClickPay payment processing system
- **WebView-based Payment**: Secure payment processing via WebView
- **Backend-Provided Payment URLs**: Payment links generated by .NET backend API
- **Payment Flow**: 
  - Order checkout API (`/Order/OrderCheckOut`) returns `paidLink` from ClickPay
  - ClickPay payment URL loaded in secure WebView
  - Payment result handled via URL query parameters (`Result=Success`)
  - Automatic cart clearing on successful payment
- **Payment Methods**: Supports multiple payment methods through ClickPay (Credit Cards, Debit Cards, Mada, etc.)
- **Order Pre-processing**: Cart validation before payment
- **Coupon System**: Discount code application
- **Invoice Generation**: Automatic invoice creation
- **Payment Status Tracking**: Real-time payment result handling

### 🛒 **Advanced Shopping Cart System**
- **SQLite Local Database**: Offline-first cart management
- **Dual Cart Types**: 
  - Products cart with quantity management
  - Offers cart (special promotions)
- **Quantity Validation**: Max quantity enforcement
- **Cart Persistence**: Survives app restarts
- **Real-time Updates**: Instant cart synchronization
- **Cart Operations**:
  - Add/Remove products
  - Increment/Decrement quantities
  - Bulk operations
  - Cart clearing

### 🌍 **Internationalization (i18n)**
- **Full RTL Support**: Native Arabic right-to-left layout
- **Dynamic Language Switching**: Runtime language change
- **Complete Localization**: All UI elements translated
- **Locale-aware Formatting**: Date, time, currency formatting
- **Language Persistence**: User preference saved

### 🎨 **Flavor-based Architecture**
- **Multi-Environment Support**: Different configurations per flavor
- **Environment-specific APIs**: Configurable base URLs
- **Theme Customization**: Per-flavor theming
- **Build Variants**: Easy switching between dev/staging/prod

### 🔒 **Security & Control Features**
- **Kill Switch**: Remote app control mechanism
- **Token-based Authentication**: JWT token management
- **Secure Storage**: Encrypted local storage
- **API Security**: Bearer token authentication
- **Permission Management**: Runtime permission handling

### 📱 **Additional Features**
- **Offline Support**: SQLite for cart persistence
- **Image Caching**: Optimized image loading
- **Pull-to-Refresh**: Data refresh patterns
- **Search Functionality**: Product and offer search
- **Category Navigation**: Hierarchical category browsing
- **Order History**: Complete order tracking
- **Profile Management**: User profile editing
- **Address Management**: Multiple delivery addresses
- **Chat System**: In-app messaging (UI ready)
- **Dark Mode Support**: Theme switching capability

---

## 🛠️ Technology Stack

### **Frontend Framework**
- **Flutter** `3.0+` - Cross-platform mobile framework
- **Dart** `3.0+` - Programming language

### **State Management**
- **GetX** `^4.6.6` - Reactive state management, dependency injection, and routing

### **Local Storage**
- **SQLite (sqflite)** `^2.4.2` - Local database for cart persistence
- **GetStorage** `^2.1.1` - Key-value storage for app preferences

### **Networking**
- **HTTP** `^1.2.2` - RESTful API communication
- **Connectivity Plus** `^6.1.5` - Network connectivity monitoring

### **Maps & Location**
- **Google Maps Flutter** `^2.13.1` - Interactive map integration
- **Geolocator** `^14.0.2` - Location services
- **Flutter Polyline Points** `^3.0.1` - Route visualization
- **Label Marker** `^1.0.1` - Custom map markers

### **Push Notifications**
- **Firebase Core** `^3.15.2` - Firebase initialization
- **Firebase Messaging** `^15.2.10` - Cloud messaging
- **Firebase Analytics** `^11.6.0` - User analytics
- **Flutter Local Notifications** `^19.4.1` - Local notification display

### **UI/UX Libraries**
- **Carousel Slider** `^5.0.0` - Image carousels
- **Shimmer** `^3.0.0` - Loading placeholders
- **Flutter Staggered Grid View** `^0.7.0` - Advanced grid layouts
- **Convex Bottom Bar** `^3.2.0` - Bottom navigation
- **Pinput** `^5.0.2` - OTP input fields
- **Cached Network Image** `^3.4.1` - Image caching
- **Flutter SVG** `^2.2.1` - SVG rendering
- **Flutter Widget from HTML** `^0.17.1` - HTML rendering

### **Utilities**
- **Intl** `^0.20.2` - Internationalization
- **URL Launcher** `^6.3.2` - External URL handling
- **WebView Flutter** `^4.13.0` - WebView for payments
- **Permission Handler** `^12.0.1` - Runtime permissions
- **Path Provider** `^2.1.5` - File system paths
- **Open FileX** `^4.7.0` - File opening
- **Chewie** `^1.12.1` - Video player

### **Backend**
- **.NET RESTful API** - Backend services
- **Base URL**: `https://enterpot.net/api`
- **Payment Gateway**: ClickPay integration (backend-managed payment URLs)

### **Development Tools**
- **Build Runner** `^2.4.13` - Code generation
- **JSON Serializable** `^6.8.0` - JSON serialization
- **Flutter Lints** `^3.0.0` - Linting rules

---

## 🏗️ Architecture

### **Architectural Pattern**
- **MVVM (Model-View-ViewModel)** with GetX
- **Repository Pattern** for data layer
- **Dependency Injection** via GetX

### **Project Structure**
```
lib/
├── common/                    # Shared code across app
│   ├── data/
│   │   ├── model/            # Data models (JSON serializable)
│   │   ├── network/          # API client, token management
│   │   └── repo/             # Repository layer (API calls)
│   ├── presentation/
│   │   ├── view/             # UI screens
│   │   └── widget/           # Reusable widgets
│   ├── shared/               # Shared utilities
│   │   ├── db_helper.dart    # SQLite database
│   │   ├── routing/          # Navigation configuration
│   │   ├── theme/            # App theming
│   │   └── languages.dart    # Localization
│   └── vm/                   # ViewModels (GetX controllers)
├── delivery/                  # Delivery-specific features
│   └── presentation/
│       └── view/             # Delivery screens
└── flavors/                   # Flavor configuration
    ├── main_common.dart      # Common app initialization
    ├── flavor_config.dart    # Flavor settings
    └── main_enterpot.dart    # Enterpot flavor entry
```

### **Key Architectural Decisions**

1. **Flavor-based Configuration**
   - Centralized configuration in `FlavorConfig`
   - Environment-specific API endpoints
   - Theme and language customization per flavor

2. **Dependency Injection**
   - GetX binding system for VM registration
   - Lazy initialization where appropriate
   - Permanent bindings for global state

3. **State Management**
   - GetX Controllers for business logic
   - Reactive updates via `GetBuilder` and `Obx`
   - State persistence via GetStorage

4. **Navigation**
   - Named routes with parameters
   - Type-safe routing configuration
   - Deep linking support

5. **Data Layer**
   - Repository pattern abstraction
   - Model serialization/deserialization
   - Network error handling
   - Token management

---

## 💡 Technical Highlights

### **1. Cart Management with SQLite**

**Implementation**: Offline-first cart using SQLite for persistence

```dart
// Database schema for products and offers
- ProductsCartTable: productId, name, photo, quantity, price, maxQuantity
- OffersCartTable: offerId, name, photo, description, price

// Key operations:
- Add product with quantity validation
- Increment/decrement with max quantity check
- Persistent storage across app restarts
- Real-time UI updates
```

**Benefits**:
- Works offline
- Fast local operations
- Data persistence
- Quantity validation at database level

### **2. Real-time Location Tracking**

**Implementation**: Background location updates every 15 seconds

```dart
// Delivery location tracking
Timer.periodic(Duration(seconds: 15), (timer) {
  getCurrentPosition();
  updateLocationToBackend();
});

// Features:
- High-accuracy GPS positioning
- Background location updates
- Automatic backend synchronization
- Permission handling
```

**Use Cases**:
- Delivery personnel tracking
- Order location updates
- Route optimization
- ETA calculations

### **3. Google Maps Integration**

**Multiple Map Implementations**:

1. **Location Picker**: Custom marker with tap-to-select
2. **Orders Map**: Multiple markers for delivery orders
3. **Delivery Tracking**: Real-time delivery and client positions
4. **Navigation**: External map app integration

**Technical Features**:
- Custom marker icons
- Camera animations
- Marker clustering (prepared)
- Polyline routes
- Gesture handling

### **4. Notification System Architecture**

**Three-tier Notification Handling**:

1. **Foreground**: Local notifications when app is open
2. **Background**: Background message handler
3. **Terminated**: Notification tap navigation

**Token Management**:
- Automatic token refresh
- Token caching for offline scenarios
- Login-triggered sync
- Token invalidation on logout

### **5. Payment Gateway Integration - ClickPay**

**Implementation**: ClickPay payment gateway integration via WebView with backend-provided payment URLs

**Payment Provider**: [ClickPay](https://www.clickpay.com.sa/) - Leading payment gateway in Saudi Arabia

**Flow**:
```
Cart → Order Creation → Checkout API → Backend Returns ClickPay paidLink → 
WebView Loads ClickPay Payment URL → User Completes Payment on ClickPay → 
Result Query Parameter Check → Cart Cleared → Success/Failure Handling
```

**Technical Details**:
- **Payment Gateway**: ClickPay
- Payment URL received from backend API endpoint: `/Order/OrderCheckOut`
- ClickPay payment page loaded in secure WebView with JavaScript enabled
- Payment result detection via URL query parameter: `Result=Success`
- Automatic navigation on payment completion
- Error handling for failed payments
- Supports multiple payment methods: Credit Cards, Debit Cards, Mada, Apple Pay, etc.

**Features**:
- ClickPay secure payment processing
- WebView-based integration for seamless UX
- Backend-managed ClickPay integration
- Order pre-validation
- Coupon code support
- Invoice generation
- Payment status tracking
- Automatic cart clearing on success
- Support for Saudi payment methods (Mada, etc.)

### **6. Kill Switch Implementation**

**Remote App Control**:
- API endpoint check on app start
- Maintenance mode display
- Fail-safe design (continues if API fails)
- Centralized blocking logic

**Use Cases**:
- Emergency maintenance
- Version deprecation
- Security incidents
- Feature rollback

### **7. Internationalization System**

**Dynamic Language Switching**:
- Runtime language change
- Complete app restart simulation
- RTL/LTR layout switching
- Locale-aware formatting
- Persistent language preference

### **8. Flavor Architecture**

**Multi-Environment Support**:
- Separate entry points per flavor
- Environment-specific configurations
- Build variant management
- Theme customization per flavor

---

## 📱 App Screens & Features

### **Authentication & Onboarding**
- ✅ Splash Screen (with Kill Switch check)
- ✅ Onboarding (3 screens)
- ✅ Login As (Client/Delivery selection)
- ✅ Login (Phone + Password)
- ✅ Register (Full registration flow)
- ✅ Forget Password (OTP-based reset)
- ✅ OTP Verification (6-digit PIN)
- ✅ Reset Password

### **Client Features**

#### **Home & Discovery**
- ✅ Home Screen (Products, Categories, Sliders)
- ✅ Product Search (Products & Offers)
- ✅ Categories List
- ✅ Single Category View
- ✅ Product Details
- ✅ Offer Details
- ✅ Offers List

#### **Shopping**
- ✅ Shopping Cart (Products + Offers)
- ✅ Checkout (Address, Time, Coupon)
- ✅ Payment (WebView integration)
- ✅ Order History
- ✅ Order Details
- ✅ Invoice Download

#### **Profile & Settings**
- ✅ Profile View
- ✅ Edit Profile
- ✅ Address Management
- ✅ Add/Edit Address (with Map Picker)
- ✅ Notifications List
- ✅ Settings
- ✅ Language Selection
- ✅ Logout

### **Delivery Features**

#### **Order Management**
- ✅ Delivery Home (Orders List)
- ✅ Orders Map (All orders on map)
- ✅ Order Details
- ✅ Delivery Tracking Map
- ✅ Delivery Verification
- ✅ Status Updates
- ✅ Invoice Download

#### **Settings**
- ✅ Delivery Settings
- ✅ Profile Management

### **Shared Features**
- ✅ Chat List (UI ready)
- ✅ Chat Messages (UI ready)
- ✅ Notifications Center
- ✅ WebView (Payment, Terms, etc.)
- ✅ Kill Switch Screen

---

## 📂 Project Structure

```
enterpot/
├── android/                   # Android native configuration
├── ios/                       # iOS native configuration
├── lib/
│   ├── common/               # Shared code
│   │   ├── data/
│   │   │   ├── model/        # 50+ data models
│   │   │   ├── network/      # API client, token util
│   │   │   └── repo/         # 15+ repositories
│   │   ├── presentation/
│   │   │   ├── view/         # 30+ screens
│   │   │   └── widget/       # Reusable widgets
│   │   ├── shared/           # Utilities, routing, theme
│   │   └── vm/               # ViewModels
│   ├── delivery/             # Delivery-specific code
│   └── flavors/              # Flavor configuration
├── assets/                    # Images, fonts, icons
├── pubspec.yaml              # Dependencies
└── README.md                 # This file
```

### **Key Files**

- `lib/flavors/main_common.dart` - App initialization
- `lib/common/shared/db_helper.dart` - SQLite cart database
- `lib/common/shared/routing/routing.dart` - Navigation config
- `lib/common/data/network/client/api_client.dart` - API client
- `lib/common/vm/device_token/device_token_vm.dart` - FCM token management

---

## 🚀 Setup & Installation

### **Prerequisites**
- Flutter SDK `3.0+`
- Dart SDK `3.0+`
- Android Studio / Xcode
- Google Maps API key
- Firebase project configuration

### **Installation Steps**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enterpot
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Configure Google Maps**
   - Add API key to `android/app/src/main/AndroidManifest.xml`
   - Add API key to `ios/Runner/AppDelegate.swift`

4. **Configure Firebase**
   - Add `google-services.json` to `android/app/`
   - Add `GoogleService-Info.plist` to `ios/Runner/`

5. **Run the app**
   ```bash
   flutter run
   ```

### **Build for Production**

**Android**:
```bash
flutter build apk --release
# or
flutter build appbundle --release
```

**iOS**:
```bash
flutter build ios --release
```

---

## 🎯 Technical Achievements

### **Performance Optimizations**
- ✅ Image caching for faster loading
- ✅ Lazy loading for lists
- ✅ Efficient state management
- ✅ Optimized database queries
- ✅ Network request optimization

### **Code Quality**
- ✅ Clean architecture principles
- ✅ Separation of concerns
- ✅ Reusable components
- ✅ Type-safe models
- ✅ Error handling

### **User Experience**
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error states
- ✅ Empty states
- ✅ Pull-to-refresh
- ✅ Offline support

### **Security**
- ✅ Token-based authentication
- ✅ Secure storage
- ✅ API security
- ✅ Permission handling
- ✅ Kill switch for emergencies

---

## 📊 App Statistics

- **Total Screens**: 30+
- **Data Models**: 50+
- **API Endpoints**: 40+
- **Supported Languages**: 2 (Arabic, English)
- **User Types**: 2 (Client, Delivery)
- **Platforms**: Android & iOS
- **Flavors**: Configurable
- **Local Database Tables**: 2 (Cart)

---

## 🔮 Future Enhancements

- [ ] Real-time chat implementation
- [ ] Push notification improvements
- [ ] Advanced analytics
- [ ] Offline mode expansion
- [ ] Widget support
- [ ] Tablet optimization
- [ ] Advanced search filters
- [ ] Wishlist functionality
- [ ] Product reviews
- [ ] Social sharing

---

## 📝 License

This project is proprietary software. All rights reserved.

---

## 👨‍💻 Developer Notes

### **Key Technical Decisions**

1. **GetX over BLoC**: Chosen for simplicity and built-in DI
2. **SQLite for Cart**: Offline-first approach for better UX
3. **Flavor Architecture**: Scalable multi-environment setup
4. **Repository Pattern**: Clean separation of data layer
5. **MVVM**: Clear separation of UI and business logic

### **Best Practices Implemented**

- ✅ Consistent naming conventions
- ✅ Modular code structure
- ✅ Reusable widgets
- ✅ Error handling
- ✅ Loading states
- ✅ Type safety
- ✅ Documentation

---

<div align="center">

**Built with ❤️ using Flutter**

*For wholesale food distribution in Saudi Arabia*

[Report Bug](https://github.com/your-repo/issues) • [Request Feature](https://github.com/your-repo/issues)

</div>
