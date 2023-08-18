# React Task App with CSS Modules

This is a simple React Task App that utilizes CSS Modules for styling. This app allows users to manage and keep track of their tasks in a visually organized manner.

## Features

- Add new tasks with a description.
- Click tasks to delete completed tasks.
- Stylish and organized UI using CSS Modules.

## Installation

1. Clone the repository or download the ZIP file.
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory.
   ```
   cd react-task-app-with-css-modules
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

1. **Adding Tasks**: Enter a title and optional description for the task in the input field at the top of the page. Click the "Add Task" button to add the task to the list.

2. **Marking Tasks as Completed**: Click the checkbox next to a task to mark it as completed. Completed tasks will have a visual indicator.

3. **Deleting Tasks**: To remove a task from the list, click the "Delete" button next to the task.

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
