**ADMIN EMAIL** : admin@gmail.com
**ADMIN PASSWORD**: admin1234
---

# 📖 RootX Blog Platform (Client)

This is the **frontend client** for the **RootX Blog Platform**, built with **React + TailwindCSS**.
It allows users to explore blogs, read details, comment, and subscribe to newsletters.
Admins can add and manage blog posts via the dashboard.

---

## 🚀 Features

* 📰 **Browse Blogs** – View blogs with categories, tags, and descriptions
* 📑 **Blog Details Page** – Read full blog details with comments
* ✍️ **Comment System** – Users can add and view comments per blog
* 🧑‍💻 **Admin Panel** – Add, edit, and delete blogs (secured)
* 📬 **Newsletter Subscription** – Users can subscribe with email
* 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

* **React.js** – Frontend framework
* **React Router** – Routing
* **React Hook Form** – Forms & validation
* **TailwindCSS** – Styling
* **Framer Motion** – Animations
* **Context API** – Global state management
* **MongoDB + Express API (Backend)** – For blogs, comments, and newsletter

---

## 📂 Project Structure

```
client/
│── public/           # Static assets
│── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components (Blogs, Details, Admin, Contact)
│   ├── hooks/        # Custom hooks (e.g., useUserRole)
│   ├── App.jsx       # Root component
│   ├── main.jsx      # Entry point
│── package.json
│── tailwind.config.js
│── README.md
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/rootx-client.git
   cd rootx-client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the **root** and add your API base URL:

   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start development server:

   ```bash
   npm run dev
   ```

---

## 🌐 API Endpoints (Backend Required)

Make sure you set up the backend repo before running.
Some key endpoints:

* `POST /blogs` → Add new blog (Admin)
* `GET /blogs` → Fetch all blogs
* `GET /blogs/:id` → Get blog details
* `POST /comments` → Add comment to a blog
* `GET /comments/:blogId` → Fetch comments for a blog
* `POST /newsletter` → Subscribe to newsletter

---




