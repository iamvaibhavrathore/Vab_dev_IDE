
# VabthorRCE

**VabthorRCE** is a full-stack MERN application that serves as an online compiler for HTML, CSS, and JavaScript. It allows users to write, compile, and run front-end code directly in their browser with real-time results. 

![vabthorRce-compressed (1)](https://github.com/user-attachments/assets/fcfc0199-de39-48e9-aeef-a590fdec8102)


## 📖 About the Project

VabthorRCE is designed for both developers and learners who want a quick, accessible way to test and debug web code. With its intuitive interface, real-time compilation, and robust backend, it provides a seamless coding experience.

## 🌟 Key Features

- **Live Preview**: Instantly see the output of your HTML, CSS, and JavaScript code as you type.
- **Syntax Highlighting**: Makes your code more readable with color-coded syntax.
- **Responsive Design**: Works flawlessly on any device, from desktops to mobile phones.
- **User-Friendly Interface**: Focuses on a clean, minimalistic design to enhance the coding experience.

## 📂 Project Links

- **[Live Demo](https://vabthor-rce-frontend-deploy.vercel.app/)**: Explore the deployed version of VabthorRCE.
- **[Fork on GitHub](https://github.com/iamvaibhavrathore/Vab_dev_IDE.git)**: Fork the repository to start contributing.

## 🛠️ Installation

To run VabthorRCE locally, follow these steps:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v12.x or higher)
- **npm** (Node Package Manager)
- **MongoDB** (for database management)

### Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/iamvaibhavrathore/Vab_dev_IDE.git
   ```

2. **Install Backend Dependencies:**

   Navigate to the `server` directory and install the required packages:

   ```bash
   cd vabthorrce/server
   npm install
   ```

3. **Install Frontend Dependencies:**

   Navigate to the `client` directory and install the required packages:

   ```bash
   cd ../client
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the `server` directory with the following variables:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Start the Application:**

   - **Backend**: In the `server` directory, run:
     ```bash
     npm start
     ```
   - **Frontend**: In the `client` directory, run:
     ```bash
     npm start
     ```

   The server will run on `http://localhost:5000/` and the frontend on `http://localhost:3000/`.

## 🚀 Usage

1. **Write Your Code**: Enter your HTML, CSS, or JavaScript code in the respective editor.
2. **View Live Output**: Watch as your code is instantly rendered in the output pane.
3. **Experiment Freely**: Test different code snippets and see real-time results.

## 🤝 Contributing

We welcome contributions! Here’s how you can contribute:

1. **Fork the Repository**.
2. **Create a feature branch** (`git checkout -b feature-branch`).
3. **Commit your changes** (`git commit -m 'Add new feature'`).
4. **Push to the branch** (`git push origin feature-branch`).
5. **Open a pull request**.


---

Feel free to customize the links and image URL as per your project details!
