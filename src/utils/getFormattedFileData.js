/**
 * Organizes a list of files into a hierarchical structure based on their parent-child relationships, returning the root files
 * @param {Array} files
 * @returns {Array}
 */
const getFormattedFileData = (files = []) => {
  const fileMap = {};
  const rootFiles = [];

  files.forEach((file) => {
    file.children = [];
    fileMap[file.file_id] = file;
    if (file.parent_id === 0) {
      rootFiles.push(file);
    }
  });

  files.forEach((file) => {
    const parent = fileMap[file.parent_id];
    if (parent) {
      parent.children.push(file);
    }
  });

  return rootFiles;
};

export default getFormattedFileData;
