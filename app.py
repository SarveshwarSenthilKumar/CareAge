from flask import Flask, render_template, request, redirect, session, jsonify
from flask_session import Session 
from datetime import datetime
import pytz
from sql import *

app = Flask(__name__)

app.config["SESSION_PERMANENT"] = True
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


allowedChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-'!#$%&()*+,./:;<=>?@[\]^_`{|}~ "

def checkEmail(email):
   regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
   if(re.fullmatch(regex, email)):
    return True
   else:
    return False
   
def verifyName(name):
   names=name.split(" ")
   validName=""

   for name in names:
      invalidElement=any(character in name for character in allowedChar[63:])
      if invalidElement:
         return False, "Your name cannot contain any special elements!"
      if "-" in name:
         splitName=name.split("-")
         name=""
         for namePart in splitName:
            name+=namePart[0].upper()+namePart[1:]+"-"
         name=name[:-1]
      else:
         name=name[0].upper()+name[1:]
      validName+=name+" "
   
   return True, validName[:-1]

def checkUserPassword(username, password):

   if username.lower() in password.lower():
      return False, "Your password cannot contain your username!"
   if len(password)<8:
      return False, "Your password needs to be at least 8 characters!"
    
   for letter in username:
      if letter not in allowedChar:
         return False, "Your username may not contain any symbols or special characters!"
   
   if len(username)<8:
      return False, "Your username needs to be at least 8 characters!"
   
   hasUpper=False
   hasLower=False
   hasNumber=False

   for letter in password: 
      indexOfLetter = allowedChar.index(letter)
      if indexOfLetter < 25:   
         hasLower=True
      elif indexOfLetter < 51:
         hasUpper = True
      elif letter in allowedChar:
         hasNumber=True
      else:
         return False, "Your password may not contain any symbols or special characters!"
        
   if not hasUpper:
      return False, "Your password must contain at least one uppercase letter!"
   elif not hasLower:
      return False, "Your password must contain at least one lowercase letter!"
   elif not hasNumber:
      return False, "Your password must contain at least one uppercase letter!"
   else:
      return [True]

@app.route("/")
def index():
    return "Home Page of CareAge"
#if not verified, do not let them onto the site and apply for gigs
#Ask group how to make sure the address is not disclosed but available

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if session.get("name"):
        return redirect("/")
    if request.method=="GET":
        return render_template("signUp.html")
        
    emailAddress = request.form.get("emailaddress").strip().lower()
    fullName = request.form.get("name").strip()
    username = request.form.get("username").strip().lower()
    password = request.form.get("password").strip()
    role = request.form.get("role").strip()
    address = request.form.get("address").strip()
    phoneNumber = request.form.get("phoneNumber").strip()

    validName = verifyName(fullName)
    if not validName[0]:
        return render_template("signUp.html", error=validName[1])
    fullName = validName[1]

    db = SQL("sqlite:///users.db")
    results = db.execute("SELECT * FROM users WHERE username = :username", username=username)

    if len(results) != 0:
        return render_template("signUp.html", error="This username is already taken! Please select a different username!")
    if not checkEmail(emailAddress):
        return render_template("signUp.html", error="You have not entered a valid email address!")
    if len(checkUserPassword(username, password)) > 1:
        return render_template("signUp.html", error=checkUserPassword(username, password)[1])
    
    tz_NY = pytz.timezone('America/New_York') 
    now = datetime.now(tz_NY)
    dateJoined = now.strftime("%d/%m/%Y %H:%M:%S")

    password = hash(password)
    
    db = SQL("sqlite:///users.db")
    db.execute("INSERT INTO users (username, password, emailaddress, name, dateJoined, role, address, phoneNumber) VALUES (?,?,?,?,?,?,?,?)", username, password, emailAddress, fullName, dateJoined, role, address, phoneNumber)

    session["name"] = username
    
    return render_template("sentence.html", sentences=["You have successfully signed up for CareAge! Return to home page to start viewing!"])

@app.route("/login", methods=["GET", "POST"])
def login():
    if session.get("name"):
        return redirect("/")
    if request.method == "GET":
        return render_template("login.html")
    else:
        username = request.form.get("username").strip().lower()
        password = request.form.get("password").strip()

        password = hash(password)

        db = SQL("sqlite:///users.db")
        users=db.execute("SELECT * FROM users WHERE username = :username", username=username)

        if len(users) == 0:
            return render_template("login.html", error="No account has been found with this username!")
        user = users[0]
        if user["password"] == password:
            session["name"] = username
            return redirect("/")

        return render_template("login.html", error="You have entered an incorrect password! Please try again!")

#code feature where the app knows the default address, tap into database and feed it into the createposts html file
@app.route("/createposts", methods=["GET", "POST"])
def createposts():
    if not session.get("name"):
       return redirect("/login")
    if request.method == "GET":
       db = SQL("sqlite:///users.db")
       address=db.execute("SELECT * FROM users WHERE name = :name", name=session.get("name"))[0]["address"]
       return render_template("createposts.html", address=address)
    else:
        creator=session.get("name")
        roleTitle=request.form.get("role").strip()
        roleDescription=request.form.get("roleDescription").strip()
        rewardType=request.form.get("rewardType").strip()
        quantity=request.form.get("reward").strip()
        address=request.form.get("address").strip()
        
        db = SQL("sqlite:///posts.db")
        db.execute("INSERT INTO posts (creator, roleTitle, roleDescription, quantity, volunteerHoursOrPoints, address) VALUES (?,?,?,?,?,?)", creator, roleTitle, roleDescription, rewardType, quantity, address)

        return render_template("sentence.html", sentences=["You have created a post"])

@app.route("/applyforpost")
def applyforpost():
    return "Carriage"

@app.route("/searchforpost")
def searchforpost():
    return "Carriage"

@app.route("/redeempoints")
def redeempoints():
    return "Carriage"

@app.route("/viewhelper")
def viewhelper():
    return "Carriage"

@app.route("/changeinformation")
def changeinformation():
    return "Carriage"

@app.route("/verifyuser")
def verifyuser():
    return "Carriage"


@app.route("/logout")
def logout():
   session["name"] = None
   return redirect("/login")
