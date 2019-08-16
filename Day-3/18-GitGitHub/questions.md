Git Basic Interview Questions


What is the difference between Git and GitHub?



Git is version control software that let's users create repositories for recording changes to a project.
GitHub stores these repositories online.



Why would you use Git?



To track the changes that developers make to a project, especially collaborative ones. The branch system also prevents users from writing code that would mess a project up.



Why would you use GitHub?



To store projects remotely and allow users to collab on a project anywhere with an Internet connection.



What is the first step necessary to create a local Git repository?
git init
Once a repository is created and linked to GitHub, what are the three commands you need to do each time you create or modify files to send something up to GitHub?



git add .
git commit -m <comment>
git push origin <branch name>



How do you update your local repository from GitHub?



git pull origin <branch name>



What is one way to create a new branch?



git branch <branchname>



What is one way to check and see what branch you are currently in? (a terminal/bash command)



git branch



What is it called when you make a request on GitHub to merge a branch into another branch?


* A merge.

How would you delete a local Git repository?


* `rm -R .git`

What does git clone do?


* It clones a GitHub repo to a local machine.

What is "branching" for?


So that all collaborators on a project can work at the same time without writing code that conflicts with other parts of the project.