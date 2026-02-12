🚗 Vehicle Configurator Platform
🌍 Overview

The Vehicle Configurator Platform is a B2B 🏢 leasing solution designed for rental 🚘 companies to lease vehicles from leasing providers.

Users can:

🚙 Select vehicles by segment & manufacturer

⚙️ Configure vehicles with alternate components

💰 View real-time pricing adjustments

🧾 Generate invoices automatically

📄 Receive invoice PDFs via email

The system follows a 🏗️ microservices architecture, ensuring scalability, maintainability, and clean separation of concerns.

🏗️ Architecture

The platform is built using a Microservices-based Architecture, consisting of:

🔐 Authentication Service (JWT + OAuth2)

🚗 Vehicle & Configuration Service

🧾 Invoice & PDF Service

📧 Email Service

Each service communicates via REST APIs and is containerized using 🐳 Docker.

🛠️ Tech Stack
🖥️ Backend (Java Microservices)

Spring Boot 3

Java 17

Jakarta EE

JWT Authentication

Spring Data JPA

Maven 3

MySQL 8

Docker

🖥️ Backend (.NET Version)

.NET 8

ASP.NET Core Web API

Entity Framework Core 8

MySQL 8

JWT Authentication

xUnit Testing

🎨 Frontend

React JS 18

⭐ Key Features
🔐 Authentication & Security

JWT-based authentication

Role-based authorization

Google & Facebook OAuth2 SSO

Protected routes (Frontend)

Global exception handling (Backend)

🚗 Vehicle Configuration

Dynamic vehicle selection by segment & manufacturer

Alternate component customization

Real-time pricing recalculation

Default configuration support

🧾 Invoice & Email System

Automatic invoice generation

PDF invoice creation

Email delivery with invoice attachment

Status tracking for invoices

React Router v6

Tailwind CSS
