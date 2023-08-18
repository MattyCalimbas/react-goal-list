# React Goal App with CSS Modules

This is a simple React Goal App that utilizes CSS Modules for styling. This app allows users to manage and keep track of their goals in a visually organized manner.

## Features

- Add new goals with a description.
- Click goals to delete completed goals.
- Stylish and organized UI using CSS Modules.

## Installation

1. Clone the repository or download the ZIP file.
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory.
   ```
   cd react-Goal-app-with-css-modules
   ```

3. Install the required dependencies.
   ```
   npm install
   ```

4. Start the development server.
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

1. **Adding Goals**: Enter a description for the goal in the input field at the top of the page. Click the "Add Goal" button to add the goal to the list.

2. **Clicking Goals as Completed**: Click the goal to mark it as completed. Completed Goals disappear as a visual indicator.

## CSS Modules

CSS Modules are used in this project to scope CSS styles to specific components. This prevents global style conflicts and allows for more predictable and maintainable styling.

Styles for each component are defined in separate `.module.css` files. These styles are imported and applied to the respective components using the syntax below:

```jsx
import styles from './ComponentName.module.css';

function ComponentName() {
  return <div className={styles.container}>...</div>;
}
```


## Contributing

Contributions are welcome! If you'd like to contribute to this project, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
