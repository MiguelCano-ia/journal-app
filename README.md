# Journal App

Journal App is a personal diary application designed to make organizing and managing notes easy. It allows users to securely authenticate, create, edit, delete, and manage notes, as well as attach images to their entries. The app is built using modern technologies such as React, TypeScript, Material UI, Firebase, and Cloudinary.

---

## **Main Features**

1. **Authentication:**
   - Login using email and password.
   - Login with Google.

2. **Note Management:**
   - Create empty notes to be completed later.
   - Create notes with a title and description.
   - Edit and update existing notes.
   - Delete notes.

3. **Image Management:**
   - Upload images associated with a note.
   - Images are securely stored in Cloudinary.

4. **Modern Design:**
   - User interface built with Material UI for a modern and responsive experience.
   - Optimized for both mobile and desktop devices.

---

## **Technologies Used**

### **Frontend:**
- **React:** Main library for building user interfaces.
- **TypeScript:** Ensures typed code and reduces potential errors.
- **Material UI:** Design framework that provides styled and customizable components.

### **Backend and Services:**
- **Firebase Authentication:** Handles user authentication and secure sessions.
- **Firestore Database:** NoSQL database for storing user notes.
- **Cloudinary:** Image storage service for managing uploaded photos.

---

## **Workflow**

1. **Register/Login:**
   - Users can sign up with their email and password or log in using Google.

2. **Create Notes:**
   - Once authenticated, users can create new notes, adding a title and description.

3. **Attach Images:**
   - Users can upload images directly from their device, which are associated with the selected note.

4. **Edit and Delete Notes:**
   - Created notes can be edited to update their content or deleted if no longer needed.

5. **Save to Firebase:**
   - All notes are securely stored in the Firestore Database.

6. **Real-Time Updates:**
   - Notes and their updates are reflected in real-time thanks to Firebase.

---
