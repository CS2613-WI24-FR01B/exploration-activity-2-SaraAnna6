# BCrypt Package for JavaScript
# Exploration Activity 2
##  Which package/library does the sample program demonstrate? 
### The sample program demonstrates the use of BCrypt for JavaScript
##  How does someone run your program?
### To run the BCrypt for JavaScript
    1. first you must install the needed packages
    npm inti -y
    this allows us to use JSON package and formats test projects

    npm install bcrypt
    downloads the bcrypt package for use.

    2. Make a text document with a list of passwords you wish to hash, in this example its passwords.txt
    
    3. run script node BCrypt.js

##  What purpose does your program serve? 
   This program serves to show the functionality of the BCrypt package. It shows how passwords can be hashed multiple times
   to make them more secure/complex. It shows a level of security that can be used to store passwords. This program also shows
   the exchange of complexity for time. The program shows the more the passwords are hashed the longer the hashed_password takes
   to be generated. 
##  What would be some sample input/output?
### Example:
     
     Our input is a list of passwords in a text document
     
      Output is a list of corresponding passwords that have been hashed by the BCrypt algorthm 8, 10, and 12 times respectively
      showing the increase in complexity and time. 
      Paswords: 
      
      password123
      MyPassword
      LetMEinPlease
      password
      SUPERSAFEPASSWORD

      Corresponding hashed_passwords:
      { "0": {
  "8": "$2b$08$F1CFTSdsmg8QfGMGw1TbG.XRYNAeunKo9dV5JWuew4aBpTK5LXBjO",
  "10": "$2b$10$C6UUPWQTj9Qwf2xZ0GVgdekrGhtxUKjpOUUh7PWomAr8V24v.i586",
  "12": "$2b$12$54MylvtIIDkpIR6RjVZnmelLxe.ohqKsO1JzeA1SF8oTh/iTH57/W"
 },
 "1": {
  "8": "$2b$08$LnUkd6rBdTEE0p6YsX5apuO.q.Xh0Ra5PMhmwDFoyq4ZTWFSEogqm",
  "10": "$2b$10$N9jOhrhrL2HxjxnawngtPOuYlMW20.6dpBOfgtIkCVPSo9avzX1a.",
  "12": "$2b$12$9t2no4Lq4L71eMQPy0NI.e/ZzywTSTx5mbUBkBUaMxQkCfpbQjSBK"
 },
 "2": {
  "8": "$2b$08$99YnrSL1LHKI0nr1VVXOw.8tHdqzZi1eVMJLY2sNWURD9V5YntePe",
  "10": "$2b$10$uigNzLcf5e7/6vqsKXVLv.oTvqo2M2N725A5JHz.HRc6iExSZEmPi",
  "12": "$2b$12$K7bR3hwSBEV9t8u5NIG3I.PzSa51Bc6RDmndU.QF9J0PkpedTEfg2"
 },
 "3": {
  "8": "$2b$08$.ObI7Q83I77j4/PNvR7gCOIwsg7jVLQdssNZ7Xz9x1Ti5fDgsv/q.",
  "10": "$2b$10$vGmcVAgbKGoGlbmP2CSHjupZdBhCVze2u98bQD/fqach/kzKXW0Hy",
  "12": "$2b$12$.jPBHJF38fNQ0elOyn56ruO57Zi35VE8h2dYkQYsljzQixT/UiqTC"
 },
 "4": {
  "8": "$2b$08$LpdN1XZ8SSh.UbJ.kz589.r1pNf.YYcvgLzLdEt7L3QQ6B8AgmbcK",
  "10": "$2b$10$GdgeIiKaMP16HMTGjwaWQ.VTIseAFkW70d6aTazDf85xQgu70x.cS",
  "12": "$2b$12$d5H5Gq40WaTwK1mD.t1ibOcNGq9yGxKI6T3QWhFb/MomIwgj6xHIi"
 }
}
      
