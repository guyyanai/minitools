# minitools
This repository contains CLI minitools such as a pdf merger. The repository is a work in progress, any recommendations for more tools are welcome.
## pdf-merge
### **Setup**
1. Clone this repository.
2. Execute `npm install` in the `pdf-merge` folder.
3. 
    - For a Windows PC: Create a Batch file (.bat) containing this code:<br><center>`node "{absolute path to index.js}" %*`</center>
    - For a Linux system: Create a Shell script (.sh) containing this code:<br><center>`node "{absolute path to index.js}" "$@"`</center><br>(**_NOTE:_** Shell version not tested)
4. Optional: Add the folder containing the Batch file/Shell script to the PATH of your system in order to be able to use the `pdf-merge` command from everywhere.

### **Usage**
In order to merge a list of pdf files exectute this command:<br><center>`pdf-merge file1.pdf file2.pdf output`</center><br>The example command outputs a file named `output.pdf` conatining `file1.pdf` and then `file2.pdf`.

**_NOTE:_** the pdf-merge command receives **relative/absolute paths** of the files which will be merged and the output file.
