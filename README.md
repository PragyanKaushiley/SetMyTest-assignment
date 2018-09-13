# SetMyTest-assignment

Listen to the “users” node and do the following when a new user (i.e. username
and user email) is saved in that node
1. Save the same data to another node in firebase called “userInformation”-
2. Create an email and send it to the user email id. The email should have the
text “Dear <username>, Welcome to our app”.

------------------------------------------------------------------------------------------

Instructions (Steps) for using this Project

Step 1: Download or clone this repository.

Step 2: Go to your project directory.

Step 3: Open cmd (or powershell) in that directory.

Step 4: Install all the packages by using the command "npm install".

Step 5: Go to routes folder and open "tmain.js" file.

Step 6: Change the user1 and pass1 to any gmail id and password for SMTP (or welcome mail).

Step 7: Go back to the root directory and type "node app.js" in cmd or powershell to run the code.

Step 8: Type "http://localhost:5000/" in your browser to start with the project

Some notes
1. SMTP works through nodemailer and takes only Gmail UserID.
2. If you encounter AuthError: Invalid login - 534-5.7.14 due to nodemailer then, perform the following steps
    
    (i) While connected to google with the account you want to send mail from go to:
                https://www.google.com/settings/security/lesssecureapps
        and enable less secure apps. This will enable the mail functionality.
        
3. If any query feel free to contact me at:   pragyanky@gmail.com


