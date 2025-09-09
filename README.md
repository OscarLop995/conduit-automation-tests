# Conduit automation tests

This repository contains automated tests for the **[Conduit project](https://github.com/gothinkster/realworld)** application.  
The tests are written in **TypeScript**, using **Playwright** as the browser automation framework and **Cucumber (BDD)** for human-readable scenarios.  

## 📌 Application Under Test Setup  

These tests are designed to run against the **RealWorld Conduit App**.  
The app requires Docker and PostgreSQL to be running.  

### Prerequisites  
- [Docker](https://docs.docker.com/get-docker/)  
- [Docker Compose](https://docs.docker.com/compose/install/)  
- [Node.js (>=18)](https://nodejs.org/) and npm  

### Steps to Run the Application  
1. Clone the RealWorld project:  
   ```bash
   git clone https://github.com/gothinkster/realworld.git
   cd realworld
   ```  

2. Start the application with Docker:  
   ```bash
   docker-compose up
   ```  

3. Ensure the following are available:  
   - Frontend: `http://localhost:3001/`  
   - Backend API: `http://localhost:3000/`  
   - Database: PostgreSQL running inside Docker  

⚠️ **Important**: Make sure the application is up and running before executing the tests.  

---

## 📂 Project Structure
├── tests
│ ├── features # Gherkin feature files
│ │ ├── login.feature
│ │ ├── register.feature
│ │ └── articles.feature
│ ├── step-definitions # Step implementations (Cucumber)
│ ├── pages # Page Object Models
│ ├── support # Hooks and custom world
│ └── utils # Helper functions (random data generators, etc.)
├── package.json
├── tsconfig.json


---


## ⚙️ Setup

### 1. Clone repository
```bash
git clone https://github.com/<your-username>/conduit-e2e-tests.git
cd conduit-e2e-tests
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Playwright browsers
```bash
npx playwright install
```

---

## ▶️ Running the Tests

We use **tags** to organize and run specific features:  

- **Register tests**
```bash
npm run test:register
```

- **Login tests**
```bash
npm run test:login
```

- **Articles tests**
```bash
npm run test:articles
```

- **Run all**
```bash
npm run test:all
```

---

## 🧪 Technologies Used
- [Playwright](https://playwright.dev/) → browser automation  
- [Cucumber](https://cucumber.io/) → BDD style scenarios  
- [TypeScript](https://www.typescriptlang.org/) → strongly-typed code  
- Page Object Model (POM) design pattern  

---

## 🔎 Assumptions & Modifications
1. **Application under test:** Conduit app running locally at `http://localhost:3001`.  
   - This required adjusting test URLs accordingly.  
2. **Timeouts:** Extended using `setDefaultTimeout(60 * 1000)` to avoid false negatives in slower environments.  
3. **Login Bug:**  
   - The app does not show an error message when submitting invalid credentials (the form just resets).  
   - This was documented in the `login.feature` scenario. Instead of failing the whole suite, the test captures a screenshot and logs a warning.  
4. **Typing behavior in article creation:**  
   - The fields in the editor clear themselves when values are filled directly using `.fill()`.  
   - To solve this, we switched to `pressSequentially()` for more realistic typing simulation.  
5. **Skipped scenarios:**  
   - The invalid login scenario is intentionally left pending/skipped to highlight the bug, without blocking the execution of other tests.  

---

## 📸 Reports & Screenshots
- **Screenshots** of failed or bugged scenarios are saved under `screenshots/`.  
- Playwright HTML reports can be generated with:
```bash
npx playwright show-report
```

## Bug Reports
During the testing process, 3 bugs were identified and documented in Azure DevOps.
The exported bug report can be found here:
[Bug Reports (Excel)](docs/conduit_bugs_report.csv)

---

## ✅ Deliverable
This repo demonstrates:
- BDD test automation using Playwright + Cucumber + TypeScript.  
- Documented bugs found in the app (e.g., missing error message on login).  
- Clear setup & execution instructions.
  
✅ With this setup, anyone should be able to run the app locally, execute the tests, and reproduce the scenarios. 
