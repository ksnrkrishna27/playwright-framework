//To Run the test files use below command
npm run test_headed <file-name>


//Git Commands

git branch (To Check the selected branch)
git pull origin main (To Update the main branch)
git checkout -b <"new branch name"> (To create new branch)

git status (To check the files which are modified or newly added)

//Git Commands after file modifications

git add . (To add all changes to the staging area)  or  git add <file_name> (To add a particular file)
git commit -m "<Comment>"
git push -u origin "<new branch name>" (To push the changes to github, we can remove -u if the branch is already created)


//To update the main branch in local and then update the feature branch using main branch
git checkout main
git fetch -p origin
git merge origin/main
git rebase origin/main
git checkout <feature_branch>
git merge main
git rebase main



========================

To use Encripted Credentials we have to install below js packages

npm install crypto-js
npm install --save-dev @types/crypto-js