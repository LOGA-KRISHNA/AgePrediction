# Age Predictor

A full-stack application that predicts age from images and voice inputs. Built with FastAPI (backend) and React + Vite + Tailwind CSS (frontend).

## Features
- Predict age from uploaded images
- Predict age from voice recordings
- Modern UI with Tailwind CSS
- REST API backend with FastAPI

## Project Structure
```
backend/      # FastAPI backend for age prediction
frontend/     # React frontend for user interaction
```

## Getting Started

### Backend
1. Navigate to the backend folder:
   ```powershell
   cd backend
   ```
2. (Optional) Create and activate a virtual environment:
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
4. Run the backend server:
   ```powershell
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend
1. Navigate to the frontend folder:
   ```powershell
   cd frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the development server:
   ```powershell
   npm run dev
   ```

## Usage
- Open your browser and go to `http://localhost:5173` for the frontend.
- The backend API runs at `http://localhost:8000`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
