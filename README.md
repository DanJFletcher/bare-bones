# beard-pack
Very simple set up for building static web pages.

## Set up
### Requirements
You will need the following installed on your local machine:

- Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- Node: https://docs.npmjs.com/getting-started/installing-node
- npm (included with Node): update with `npm install npm -g` or `sudo npm install npm -g` on Linux

### tl;dr
1. `git clone https://DanJFletcher@bitbucket.org/reddingdesigns/beard-pack.git`
2. `cd beard-pack`
3. `npm install`
4. `npm start`
5. Separate terminal: `gulp`
6. View at `localhost:8080`

### Detailed Steps
1. Open terminal and `cd` to where you wish to create the projects' directory.
2. Then run `git clone https://DanJFletcher@bitbucket.org/reddingdesigns/beard-pack.git`
Optionally, you can change the name of the target directory by appending a custom name to the end of the command like this:
`git clone https://DanJFletcher@bitbucket.org/reddingdesigns/beard-pack.git my-project-name`
3. `cd my-project-name`
4. Install dependencies. This is why you need npm. It's included by default with Node. All you have to do is run `npm install`
5. Now run `npm start`. This will start up a node server at `http://localhost:8080` on your computer. Visit that URL to view the project.
6. In a separate terminal, `cd` into the project directory, and run `gulp`. This will run your build tools, which currently includes only `autoprefixer` so that you can write 
CSS without having to worry about vendor prefixes. You can configure browser support inside of `gulpfile.js`. See the Autoprefixer docs for configuration options.
7. Lastly make sure you have a spare terminal open in the project directory, so that you can run your normal git commands. 

~ Happy coding :)
