/* 
--- Import
- You can import modules into a file in two ways, based on if they are named exports or default exports
- Named exports must be destructured using curly braces. Default exports do not.

--- Import from named exports
- Import named exports from the file person.js 

--- Import from default exports
- Import a default export from the file message.js
*/ 

import { name, age } from "./person.js"; 
import  message from "./message.js"; 

