# Bike Rental Service Website

## Live Demo
Check out the live website here: [Bike Rental Service Live](https://orbit-rides.vercel.app/)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
  - [Public Pages](#public-pages)
  - [User Authentication](#user-authentication)
  - [User Profile Management](#user-profile-management)
  - [Bike Management](#bike-management)
  - [Rental Management](#rental-management)
  - [Admin Pages](#admin-pages)
  - [Bonus Features](#bonus-features)
- [UI/UX](#uiux)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [Error Handling](#error-handling)
- [Deliverables](#deliverables)

## Introduction
The **Bike Rental Service Website** is a comprehensive platform for users to browse, rent, and manage bike rentals. The website offers public access to available bikes, user authentication, and administrative tools for managing bikes, users, and rentals. The site features a responsive design with smooth navigation and advanced features like coupons, testimonials, and a rental booking system.

## Features

### Public Pages
1. **Navbar & Footer**: 
   - Logo on the top left leading to the homepage.
   - Menu items for Home, About Us, and conditional routes based on the user's role.
   - Authentication links for Login/Signup (if not logged in) and Logout (if logged in).
   - Footer with social media icons and links to Privacy Policy, Terms of Service, and Contact Us.

2. **Home Page**:
   - Hero section with a banner and bike-related imagery.
   - Featured section displaying available bikes.
   - Testimonials from satisfied customers.
   - Coupons and Discounts section.
   - Contact Us form with name, email, and message fields.

3. **About Us Page**: 
   - Platform’s purpose and values, team section with profiles, and a history section detailing the organization’s journey.

### User Authentication
- **Sign Up**: 
  Users sign up with their name, email, password, phone, and address.
- **Login**: 
  Users log in with their email and password.
- **Protected Routes**: 
  Only authenticated users (Admin/User) can access dashboard features.

### User Profile Management
- **Profile Page**: 
  Allows users to view and update their information like name, email, phone, and address.

### Bike Management
- **Bike Listing Page**: 
  Displays all available bikes with details like brand, model, and price.
- **Bike Detail Page**: 
  Shows more detailed information about the selected bike with an option to book it.

### Rental Management
- **Booking Process**: 
  Users can book a bike by selecting a start time and making an advanced payment.
- **My Rentals Page**: 
  Shows tabs for Paid and Unpaid rentals, with a "Pay" button for unpaid rentals.

### Admin Pages
1. **Admin Profile Management**: 
   Same functionality as the user profile but with additional admin rights.
2. **Bike Management**: 
   Admins can create, edit, or delete bikes, with a filter system for easy management.
3. **User Management**: 
   Admins can promote users to admin or delete them.
4. **Return Bike**: 
   Admins can manage the return process and calculate rental costs.

### Bonus Features
1. **Coupon Management**: 
   Admins can create and manage coupon codes.
2. **Dark Mode**: 
   A theme switcher for toggling between light and dark modes.
3. **Gamified Coupon System**: 
   Users can spin a wheel to win discount coupons.
4. **Side-by-Side Bike Comparison**: 
   Compare multiple bikes on key features.

## UI/UX
- **Design**: 
  Clean, modern, and user-friendly with consistent colors and typography.
- **Responsiveness**: 
  Fully responsive across mobile, tablet, and desktop.

## Technologies
- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express, MongoDB
- **State Management**: Redux
- **Authentication**: JWT (JSON Web Token)
- **Payment System**: Integration with a payment gateway

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url.git
   cd bike-rental-service
  npm install
  MONGO_URI=your_mongo_uri
  JWT_SECRET=your_jwt_secret
  npm run dev
  npm run build


