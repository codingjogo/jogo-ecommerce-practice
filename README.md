# This E-commerce is built with Next.js 14 + TypeScript + Postgreqsql + Prisma + Supabase + Clerk Authentication

## Dev Dependencies

## Resources

## Functional Requirements

### 1. **User Management:**

- **User Authentication & Authorization:**
    - Users can register and log in via Clerk (integrated with OAuth providers and email/password).
    - Support for multi-factor authentication (MFA) for additional security.
    - Role-based access control (RBAC): Different roles like customer, admin, and vendor.
    - Users can reset passwords using Clerk's built-in functionalities.
- **User Profile Management:**
    - Users can view and update their profile details (name, email, address, etc.).
    - Integration with Supabase for storing additional user metadata (e.g., order history, saved items).
    - Users can manage saved addresses and payment methods for quick checkout.

---

### 2. **Product Management:**

- **Product Catalog:**
    - Admins can add, update, and delete products via a dashboard.
    - Each product will have attributes such as name, description, price, category, SKU, and stock quantity.
    - Images of products will be uploaded via Supabase Storage.
    - Products can have multiple variants (e.g., size, color).
- **Category Management:**
    - Admins can create, update, or delete categories and subcategories.
    - Products can be filtered and sorted by categories, price, rating, and other attributes.
- **Inventory Management:**
    - Automatic updates of inventory upon order placement or cancellations.
    - Alerts for low stock items.

---

### 3. **Shopping Cart & Wishlist:**

- **Cart Management:**
    - Users can add, update, and remove products from their shopping cart.
    - Shopping cart persists across sessions using Clerk for authenticated users.
    - Guest users can also manage carts with local storage.
- **Wishlist:**
    - Users can save items to their wishlist.
    - Wishlist items persist across sessions for authenticated users.

---

### 4. **Checkout & Payment Processing:**

- **Order Placement:**
    - Users can proceed to checkout from the cart, review the order, and choose delivery methods.
    - Clerk provides secure customer details and integrates with payment providers (e.g., Stripe).
    - Users can apply discounts or promo codes at checkout.
- **Payment Gateway Integration:**
    - Integration with Stripe or PayPal for secure payment processing.
    - Payment status (successful, pending, failed) is updated in the system.
- **Order Confirmation & Notifications:**
    - Users receive email confirmations after placing an order.
    - Users can view and download invoices from their profile.

---

### 5. **Order Management:**

- **Order History:**
    - Users can view their previous orders, including order status (e.g., pending, shipped, delivered).
    - Admins can view all orders and update statuses (e.g., processing, shipped, delivered).
- **Order Tracking:**
    - Users receive real-time updates on shipping and delivery status.
    - Integration with shipping services to track orders from the dashboard.
- **Returns & Refunds:**
    - Users can request product returns or refunds, subject to return policies.
    - Admins can process refunds and handle product returns.

---

### 6. **Review & Rating System:**

- **Product Reviews:**
    - Users can leave reviews and ratings for purchased products.
    - Admins can moderate reviews and flag inappropriate content.
- **Star Ratings:**
    - Each product displays average star ratings based on user reviews.

---

### 7. **Search & Filtering:**

- **Product Search:**
    - Users can search for products by name, description, or category.
    - Search results display real-time as the user types, using debouncing for efficiency.
- **Filters & Sorting:**
    - Users can filter products based on price range, categories, ratings, and availability.
    - Sort products by price, popularity, or relevance.

---

### 8. **Admin Dashboard:**

- **Analytics & Reports:**
    - View sales, orders, and customer metrics on a dashboard.
    - Generate reports based on time intervals (daily, weekly, monthly).
- **User & Role Management:**
    - Admins can create and manage user roles.
    - Ability to disable users or restrict access to certain functionalities.
- **Promotions & Discounts:**
    - Admins can create, update, and delete promotional codes.
    - Set up limited-time discounts or special offers for certain product categories.

---

### 9. **Notifications:**

- **Email Notifications:**
    - Users receive notifications for account changes, orders, shipping updates, and promotions.
    - Admins receive notifications for low stock, new orders, and customer inquiries.
- **Push Notifications:**
    - Enable push notifications for order status updates and promotional events.

---

### 10. **Security & Data Protection:**

- **Data Encryption:**
    - Sensitive data (passwords, payment info) is encrypted.
    - Secure communication via HTTPS for all transactions.
- **Audit Logs:**
    - Log all key activities, such as login attempts, order placements, and admin actions, for security auditing.
- **Backup & Recovery:**
    - Regular data backups to ensure recovery in case of data loss.

---

### 11. **Customer Support:**

- **Contact Forms:**
    - Users can contact support through forms integrated with Supabase or third-party services.
- **Live Chat Integration:**
    - Optional live chat support for real-time assistance.

---

### **System Requirements:**

- **Frontend:** Built with **Next.js 14**, **Tailwind CSS**, and **ShadCN UI** for a responsive and interactive UI.
- **Backend:** Managed via **Supabase** for database, storage, and authentication.
- **Database:** **PostgreSQL** managed by **Prisma ORM**.
- **Authentication:** Handled via **Clerk** for secure login, registration, and RBAC.
- **Payment Gateway:** Integrated with **Stripe** or **PayPal**.

## Roadmap
 - [ ] Clerk Authentication & Authorization
 - [ ] User Profile Management
 - [ ] Role-based Access Control (RBAC)
 - [ ] Product Management Module
- [ ] Add/Update/Delete Products
 - [ ] Product Variants (e.g., size, color)
 - [ ] Supabase Storage for Product Images
 - [ ] Category Management
 - [ ] Inventory Management
 - [ ] Stock Updates & Low Stock Alerts
 - [ ] Shopping Cart Module
 - [ ] Cart Persistence for Authenticated Users
 - [ ] Guest Cart with Local Storage
 - [ ] Wishlist Module
 - [ ] Checkout & Payment Processing
 - [ ] Payment Gateway Integration (Stripe/PayPal)
 - [ ] Apply Discounts & Promo Codes
 - [ ] Order Management Module
 - [ ] Order History & Tracking
 - [ ] Returns & Refunds
 - [ ] Review & Rating System
 - [ ] Product Reviews
 - [ ] Star Ratings
 - [ ] Product Search & Filters
 - [ ] Search by Name, Category, Description
 - [ ] Filters & Sorting by Price, Rating, and Availability
 - [ ] Admin Dashboard
 - [ ] Analytics & Sales Reports
 - [ ] User & Role Management
 - [ ] Promotions & Discounts
 - [ ] Notification System
 - [ ] Email Notifications
 - [ ] Push Notifications
 - [ ] Security & Data Protection
 - [ ] Data Encryption & HTTPS
 - [ ] Audit Logs & Backup
- [ ] Customer Support Integration
- [ ] Contact Forms
- [ ] Live Chat Support
