# Productify - Product Showcase Platform

Productify is a modern, full-stack web application designed to showcase products. It allows users to browse products, view detailed information, and engage with the community through a commenting system. Built with performance and user experience in mind, it leverages the latest web technologies.

## Features

### Product Management
*   **Browse Products:** View a dynamic list of products with rich details including images, titles, and descriptions.
*   **Product Details:** Deep dive into individual product pages.
*   **User Contributions:** Authenticated users can post their own products (if implemented).

### Community Interaction
*   **Commenting System:** Users can leave comments on products to share feedback or ask questions.
*   **Real-time Updates:** (If applicable) fast interactions using optimistic updates.

### Authentication & Security
*   **Secure Login:** Powered by [Clerk](https://clerk.com/) for robust authentication and user management.
*   **Protected Routes:** Ensures only authorized users can perform sensitive actions.

### UI/UX
*   **Responsive Design:** Fully responsive layout optimized for mobile, tablet, and desktop.
*   **Modern Aesthetics:** Styled with **TailwindCSS** and **DaisyUI** for a clean, premium look.
*   **Interactive Elements:** Smooth transitions and icons using **Lucide React**.

## Tech Stack

### Frontend
*   **Framework:** [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
*   **Language:** JavaScript / TypeScript
*   **Styling:** [TailwindCSS v4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
*   **State Management & Fetching:** [TanStack Query (React Query)](https://tanstack.com/query/latest)
*   **Routing:** [React Router DOM](https://reactrouter.com/)
*   **Authentication:** [Clerk React SDK](https://clerk.com/docs/references/react/overview)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **HTTP Client:** Axios

### Backend
*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express.js](https://expressjs.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
*   **Authentication:** Clerk Express Middleware

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **PostgreSQL** database
*   **Clerk Account** for authentication keys

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd productify
    ```

2.  **Install Frontend Dependencies**
    ```bash
    cd frontend
    npm install
    ```

3.  **Install Backend Dependencies**
    ```bash
    cd ../backend
    npm install
    ```

### Configuration

#### Backend Environment Variables
Create a `.env` file in the `backend` directory with the following keys:

```env
PORT=5000
DB_URL=postgresql://user:password@localhost:5432/productify_db
NODE_ENV=development
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
FRONTEND_URL=http://localhost:5173
```

#### Frontend Environment Variables
Create a `.env` file in the `frontend` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
VITE_API_URL=http://localhost:5000
```

### Database Setup
Run the Drizzle migration/push command to set up your database schema:

```bash
cd backend
npm run db:push
```

### Running the Application

1.  **Start the Backend Server**
    ```bash
    cd backend
    npm run dev
    ```
    The server will start on `http://localhost:5000` (or your defined PORT).

2.  **Start the Frontend Development Server**
    ```bash
    cd frontend
    npm run dev
    ```
    Open your browser and navigate to `http://localhost:5173`.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
