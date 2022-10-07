# minitools
This repository contains minitools such as a pdf merger as commands.
## pdf-merge
### Setup
1. Clone this repository.
2. Execute `npm install` in the `pdf-merge` folder.
3. Update the `pdf-merge.bat` batch file and put the absolute path of the `index.js` file in the marked place.
4. Optional: Add the `pdf-merge` folder to the PATH of your system in order to be able to use the `pdf-merge` command from everywhere.
### Usage
In order to merge a list of pdf files exectute this command:
`pdf-merge file1.pdf file2.pdf output`
The example command outputs a file named `output.pdf` conatining `file1.pdf` and then `file2.pdf`.
**Note:** the pdf-merge command receives **relative/absolute paths** of the files which will be merged and the output file.
