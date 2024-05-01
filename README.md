# Assignment: Frontend React.js Developer

## Overview

This project is a React.js application designed to transform a given flattened array of file objects into a tree structure and implement a folder/file view interface.

## Features

1. **Data Transformation**:

   - A function is implemented to convert the provided flattened array of file objects into a tree structure based on the `parent_id` property. Each file object has a `children` property containing its nested files and folders.

2. **Folder/File View**:

   - Initial screen displays folders and files where `parent_id` is 0.
   - Double-clicking on a folder navigates to the next screen displaying its contents (subfolders and files).
   - Breadcrumb navigation tracks the user's path and allows navigation back to previous screens.

3. **Sorting**:

   - Files and folders can be sorted based on title in ascending or descending order.
   - Sorting based on date & time is also available.

4. **UI/UX**:

   - Designed intuitive and visually appealing interface for file/folder view.
   - React.js components are effectively used to organize and manage UI elements.

5. **Functionality**:
   - Double-click functionality implemented to navigate into folders.
   - Leaf nodes (files without children) are displayed properly.
   - Proper handling of edge cases such as empty arrays or invalid data structures.

## Optional Features

- Files and folders can be sorted based on title in ascending or descending order.
- Sorting based on date & time is also available.
