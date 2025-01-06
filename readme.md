# **Client-Side Architecture Assignment**

## **Overview**
This project demonstrates a Micro-Frontend (MFE) architecture for an insurance application. Users can:
- **MFE1**: View their insurance details.
- **MFE2**: Pay premiums.

The application is composed of:
1. Two independent Micro-Frontend (MFE) applications.
2. A Container application to host the MFEs.
3. Webpack for bundling and Module Federation for MFE integration.
4. Web Worker for intensive computations.
5. Secure coding practices implementing OWASP Top 10 (A5:2021 Security Misconfiguration).
6. Communication between MFEs for shared data handling.

---

## **Features**
- **Independent Micro-Frontends**: MFE1 (Insurance Details) and MFE2 (Premium Payment).
- **Container App**: Hosts and integrates the MFEs.
- **Cross-MFE Communication**: Shares user data between MFEs using an event bus.
- **Security**: OWASP A5:2021 to mitigate security misconfigurations.
- **Web Worker**: Used in MFE1 for computationally intensive tasks.
- **CSS Preprocessor**: SCSS for styling modular and reusable components.

---

## **Prerequisites**
- **Node.js**: Version 18+ (Check with `node -v`).
- **NPM**: Installed with Node.js (Check with `npm -v`).

---

## **Project Structure**
```
client-side-architecture/
│
├── container/
│   ├── src/
│   │   ├── index.js
│   │   ├── index.scss
│   ├── public/
│   │   ├── index.html
│   ├── package.json
│   ├── webpack.config.js
│   └── ...
├── mfe1/
│   ├── src/
│   │   ├── index.js
│   │   ├── MFE1.js
│   │   ├── MFE1.scss
│   ├── public/
│   │   ├── index.html
│   ├── package.json
│   ├── webpack.config.js
│   └── ...
├── mfe2/
│   ├── src/
│   │   ├── index.js
│   │   ├── MFE2.js
│   │   ├── MFE2.scss
│   ├── public/
│   │   ├── index.html
│   ├── package.json
│   ├── webpack.config.js
│   └── ...
└── README.md
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository_url>
cd client-side-architecture
```

### **2. Install Dependencies**

Run the following commands for each folder (`container`, `mfe1`, `mfe2`):
```bash
cd <folder_name>
npm install
```

### **3. Start Applications**

Run the following commands in separate terminals:

#### **Container App**
```bash
cd container
npm start
```

#### **MFE1**
```bash
cd mfe1
npm start
```

#### **MFE2**
```bash
cd mfe2
npm start
```

Access the application at [http://localhost:8080](http://localhost:8080).

---

## **Implementation Details**

### **1. Webpack and Module Federation**
- Configures `ModuleFederationPlugin` to enable the independent deployment of MFEs and dynamic loading by the Container App.

### **2. Web Worker in MFE1**
- Handles intensive computations asynchronously for better UI performance.

### **3. Cross-MFE Communication**
- Implements an event bus using a shared utility for passing data between MFEs and the Container App.

### **4. Security**
- Configures secure headers and input sanitization to comply with OWASP A5:2021.

### **5. CSS Preprocessor**
- Uses SCSS for modular styling and better maintainability.

---

## **Testing**

### **Run Locally**
1. Access the container app at [http://localhost:8080](http://localhost:8080).
2. Ensure MFE1 and MFE2 work seamlessly and communicate effectively.

### **Deployed Application**
- Test using the provided deployment URLs on Netlify, Heroku, or Azure.

---

## **Scripts**

### Available Commands:
- `npm start`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run test`: Runs unit tests (if implemented).

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## **Contact**
For questions or feedback, contact at [dhamesh.nadola@nagarro.com].

---
