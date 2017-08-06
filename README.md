# bare-bones
A decent starting point for building static websites.

If you have any questions about this build, issues setting up, or would like to suggest features, please submit an issue through the project's issue tracker.

## The purpose
This setup handles monotonous tasks such as HTML validation, CSS vendor prefixing, image compression, minification and more. When developing a project with `bare-bones` you will have 3 main directories in your project.  

1. `src` The src directory is where all code edits take place. This is where you will create new files, add assets like icons and images, and everything else you normally do when building a static website.
2. `build` The build is the result of running a build tool called `gulp`. After things like vendor prefixes, SASS compilation, HTML validation etc has all been done, all of the src files are stored inside of `build` and this is where you will point your server. Example: in XAMPP you'll likely have a path like `localhost/<document_root>/<name_of_project>/build` where `document_root` is the path you configure for XAMPP, and `name_of_project` is the name of your project - which will just be `bare-bones` if you didn't specify a name when running `git clone`.
3. `dist` Is the result of minifying all source files so that the file sizes are reduced for faster load times. In typical build systems, CSS and JS is often concatenated into a single file - in this setup, CSS is concatenated before being set to the build folder. The contents of `dist` is what gets uploaded to the `public_html` directory on a live production server.

### Recap
- `src` is where development takes place.
- `build` is used for debugging purposes. It contains code that has been compiled, prefixed and potentially other processing. It's sometimes necessary to be able to view this code, and so the `build` files are not minified, so that they can be read/debugged by a developer.
- `dist` is the final stage in the workflow. These files are completely compressed and unreadable. No developer should ever set eyes on the contents within. It's for computers only ;)

## Set up
### Requirements
You will need the following installed on your local machine:

- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Node: https://docs.npmjs.com/getting-started/installing-node
- npm (included with Node): update with `npm install npm -g` or `sudo npm install npm -g` on Linux
- gulp installed globally: `npm install -g gulp`

### tl;dr
#### On Node
1. `git clone https://DanJFletcher@bitbucket.org/reddingdesigns/bare-bones.git <name-of-project>`
2. `cd bare-bones`
3. `npm install`
4. `gulp watch`    
5. (For Node)  
`node index.js` Alternatively: `nodemon index.js` Must install with: `npm i -g nodemon`
6. View at `localhost:8080`  
5. (For XAMPP)  
Start server and visit your localhost at your document_root. If it's not set, it'll be `localhost/htdocs/path/to/project`


### Detailed Steps
1. Open terminal and `cd` to where you wish to create the projects' directory.
2. Then run `git clone https://DanJFletcher@bitbucket.org/reddingdesigns/bare-bones.git`
Optionally, you can change the name of the target directory by appending a custom name to the end of the command like this:
`git clone https://DanJFletcher@bitbucket.org/reddingdesigns/bare-bones.git my-project-name`
3. `cd my-project-name`
4. Install dependencies. This is why you need npm. It's included by default with Node. All you have to do is run `npm install`
5. Now run `npm start`. This will start up a node server at `http://localhost:8080` on your computer. Visit that URL to view the project.
6. In a separate terminal, `cd` into the project directory, and run `gulp`. This will run your build tools, which currently includes only `autoprefixer` so that you can write 
CSS without having to worry about vendor prefixes. You can configure browser support inside of `gulpfile.js`. See the Autoprefixer docs for configuration options.
7. Lastly make sure you have a spare terminal open in the project directory, so that you can run your normal git commands. 

~ Happy coding :)
