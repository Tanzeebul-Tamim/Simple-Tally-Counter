# Simple Tally Counter

The Tally Counter is a simple web application that allows users to keep track of a count using a digital tally counter. It provides basic functionality to increment, decrement, and reset the count. The tally counter is particularly useful for tasks that require counting occurrences or quantities, such as taking attendance, inventory management, or keeping score in games.

## Application Preview
![Alt Text](https://github.com/Tanzeebul-Tamim/Simple-Tally-Counter/blob/main/App_preview.jpg?raw=true)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your local machine.

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/Tanzeebul-Tamim/Simple-Tally-Counter.git
   ```
   
2. Navigate to the project directory

   ```sh
   cd Simple-Tally-Counter
   ```
   
3. Install dependencies
    ```sh
    npm install
    ```
    
4. To start the development server, run the following command
    ```sh
    npm run dev
    ```

## Features

- **Increment:** Increase the count by one.
- **Decrement:** Decrease the count by one, with a lower limit of zero.
- **Increment by Value:** Increase the count by a specified value (e.g., 5).
- **Decrement by Value:** Decrease the count by a specified value, with a lower limit of zero.
- **Visual Representation:** Visualize the count using tally marks, providing a clear and intuitive way to understand the count.

## Technologies Used

- **React:** The front-end of the application is built using React.
- **Redux Toolkit:** Redux Toolkit is used for state management, allowing seamless data flow and synchronization between components.
- **Tailwind CSS:** Tailwind CSS is used for styling the application, providing a utility-first CSS framework that enables rapid development and customization.
- **Node.js / npm:** Node.js and npm are used for package management and development tooling.

## Usage

- **Increment**: Click the "Increment" button to increase the count by one.
- **Decrement**: Click the "Decrement" button to decrease the count by one, ensuring the count doesn't go below zero.
- **Increment by Value**: Click the "Increment by 5" button to increase the count by five (adjustable value).
- **Decrement by Value**: Click the "Decrement by 3" button to decrease the count by three (adjustable value).
- **Reset**: Click the "Reset" button to reset the count to its initial value.
- **Visual Representation**: The count is visually represented using tally marks, providing a clear indication of the current count.

