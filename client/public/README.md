# Public Assets
in this folder Node.js will serve files publicly accessible to the internet.

this folder will be treated as the root of the website. so `{PWD}/server/public/file.txt` will translate to `example.com/file.txt`. These files are served statically, meaning no processing is done. 

This is good for performance. But since this file is in the public directory, that means that it is also viewable from the internet.

So... **Hello, World!**