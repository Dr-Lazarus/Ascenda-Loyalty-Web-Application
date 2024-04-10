# AscendaLoyalty Hotel Booking System

## Overview

AscendaLoyalty is a hotel booking system that allows users to register an account, search for hotels by destination, view detailed hotel information, book rooms, and manage their profiles and bookings. Developed by Team C5G5 over three months, this project encompasses a full-stack application with a focus on user experience, security, and performance.

## Features

- **User Account Management**: Users can create, view, edit, and delete their accounts.
- **Hotel Search**: Users can search for hotels by destination, including detailed hotel information and room availability.
- **Booking Management**: Users can book rooms, view their booking history, and cancel bookings.
- **Responsive Design**: Mobile compatibility ensures a seamless experience across devices.

## Architecture

- **Frontend**: Developed with React, implementing features such as pagination and protected routes for an optimized user experience.
- **Backend**: Node.js and Express framework, with MongoDB for data storage. Integration with Stripe for secure payment processing and implementation of CORS for resource sharing.
- **Security**: Includes encryption for personally identifiable information (PII) and secure payment flow.

## Implementation Challenges

- **API Response Optimization**: Achieved through pagination and caching strategies.
- **Secure Payment Flow**: Utilized Stripe to handle payments securely without storing sensitive payment information.
- **Mobile Compatibility**: Implemented flexible design for optimal viewing on mobile devices.
- **Protected Routes**: Ensured that certain functionalities are accessible only by logged-in users.

## Testing

- **Unit Testing**: Conducted for both frontend and backend components to ensure individual parts perform correctly.
- **System Testing**: Utilized Selenium for automated system testing, covering user flows such as login, registration, and booking.
- **Robustness Testing**: Implemented mutation fuzzing to test the application's handling of unexpected or invalid input.

## Lessons Learned

- **Development Process**: Transitioned from Agile to Iterative and Incremental development processes based on the well-defined client requirements.
- **Importance of Clarification**: Early discussion and clarification of application specifications are crucial for clear direction and progression.
- **Workflow Management**: Utilization of GitHub branches for concurrent development and CI/CD for efficient deployment cycles.
- **Testing Practices**: The significance of comprehensive testing and its role in refactoring and ensuring application robustness.

## Resources

- **Live Application**: [AscendaLoyalty](http://www.ascendahotels.live) (Note: The link may not work on networks that require an SSL certificate)
- **GitHub Repository**: [AscendaLoyalty Repository](https://github.com/oakar-00/c5g5-things)

