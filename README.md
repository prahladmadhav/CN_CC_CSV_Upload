# CSV Data Viewer Project

This project allows you to upload CSV files and view their data in a user-friendly table format. It's designed to be easily set up on your local system and follows a scalable folder structure. The application offers various features like displaying a list of uploaded CSV files, viewing data from selected files, searching within the data, optional sorting, and even includes validation and pagination for an enhanced user experience.

## Table of Contents
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Contributing](#contributing)

## Getting Started

### Installation
1. Clone this repository to your local machine using:
   ```bash
   git clone https://github.com/prahladmadhav/CN_CC_CSV_Upload.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CN_CC_CSV_Upload
   ```

3. Install the required npm packages:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your web browser and go to `http://localhost:8000` to access the CSV Data Viewer application.

## Usage
1. Upload a CSV file using the provided upload button.
2. Once uploaded, the data of uploaded CSV file will be displayed.
3. Utilize the search box to search for specific data within the displayed table. Leave the search box empty to show all data.
4. Click on column headers to sort the data in ascending or descending order.
5. Enjoy the convenience of validation to ensure only CSV files can be uploaded.
6. If applicable, pagination will automatically limit the displayed data to 100 records per page.
7. Select a file from the list to view its data in a dynamic table with column headers.

## Folder Structure
The project follows a scalable folder structure to enhance maintainability and organization. Here's an overview of the main folders:

- `controllers`: Contains the logic for handling user requests and data manipulation.
- `models`: Defines the data structures and interactions with the database.
- `assets`: Houses static assets like CSS, JavaScript, and SCSS files.
- `routes`: Defines the application's routes and their corresponding controllers.
- `views`: Contains the HTML templates for rendering the user interface.
- `uploads`: Stores the uploaded CSV file (temporarily).

## Features
- Upload CSV files and display a list of uploaded files.
- View data from selected CSV files in a dynamic table with column headers.
- Search within the displayed table to filter data.
- Dynamic table headers based on uploaded CSV files.
- Sorting functionality for each column.
- Frontend and server-side validation for CSV file uploads.
- Pagination to display a maximum of 100 records per page.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or improvement.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your forked repository.
5. Create a pull request detailing your changes.