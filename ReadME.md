<!-- Upload a file or Init Command -->
git init
git remote add .
git commit -m "Message"
git status
git remote add origin <Link>
git push <remote name>

<!-- Branch Commands -->
git branch
git branch -M main
git checkout <Branch Name>
git checkout -b <New Branch Name>
git branch -d <branch name>

<!-- Undoing Changes -->
git reset HEAD~1
git reset --hard HEAD~1
git push or git push --force

<!-- Running the server -->
1. npm i
2. Setup config (.env.example)
3. npm start