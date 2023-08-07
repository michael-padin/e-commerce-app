# MERN E-commerce Application<br/>
## [Live Site](https://moka-shop.herokuapp.com)<br/>
<br/><img src="https://user-images.githubusercontent.com/75446003/164995320-433e164e-1b8f-4519-b4de-36bff21a4a47.png" alt="home-page" />


## Setup & Workflow
Below are the instructions for setting up your prototype boilerplate and the workflow.

### Setup
1. Fork the main (blessed, upstream) repository to your main, personal GitHub Enterprise space.
2. Use the command `git clone {{ url }}` to clone this new fork locally to your computer.  Use the SSH URL.  This will be your origin remote.
3. Use the command `git remote add upstream {{ url }}` to add an upstream remote whose URL is the SSH URL of the **blessed** repository.

*You will need to run `npm install` to install the dev dependencies for Gulp.*

### Workflow
Now that we have the repository forked to our namespace and cloned to our development environment, it's time to establish a workflow.

1. On the master branch, pull the latest changes from the upstream repository usig the `git pull upstream master` (or `git pull origin master`) command.
2. Create a new branch and name it relevant to the work you will be completing using `git checkout -b {{ branch-name }}`.
3. Push the new branch to your origin remote using `git push -u origin {{ branch-name }}`.
4. Make your code changes, then add your commits and push to your branch.
  1. `git add .`
  2. `git commit -m "{{ message }}"`
  3. `git push origin {{ branch-name }}`
5. Issue a pull request to upstream in GitHub Enterprise.  Include in the PR the issue number that your work resolves (i.e. Resolves #42).
6. Once your PR is merged by the repository administrator, delete your branch.

   
