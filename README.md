MyStore.com_React_Redux_TS_Django
This is a web application built with React, Redux, TypeScript, Django, and SQLite. The app allows users to buy and sell items online.

Features
User authentication (login and signup) User profile page Product admin page Product detail page Shopping cart Checkout page Order history page

Technologies
Django React-Redux-Typescript SQLite3 /postgres

Program that you need to install before
Please check that you have the following installed on your local machine: Python 3.x Node.js and npm pip Django Django Rest Framework React Redux

Installation
To run this application on your local machine, you'll need to follow these steps:

Clone this repository: git clone https://github.com/thiyaruff/MyStore.com_React_Redux_TS_Django_SQLite.git

Enter the backend directory by running the following command:

cd back
Create a .myenv file in the root directory with the following environment variables: run the following command in your Terminal in order to install 'virtualenv':
python -m pip install virtualenv
py -m virtualenv myenv
.\myenv\Scripts\activate
Install requirements.txt:
pip install -r requirements.txt
Start the server:
(myenv)python manage.py runserver
Open 2 seperate Terminals inside your Visual Studio Code to activate the Django backend server and the React frontend app.
Enter the fronted directory by running the following command:
cd front
cd my app
npm start
install axios: npm i axios
You should now be able to access the store at http://localhost:3000.
Authentication
To access the admin panel of Django, use the following credentials:

Username: thiya Password: 123

To use postgres:
install postgres and pgadmin username:thiya/postgres password:thiya123

password of db 'myShop' :0526070373

Contact
If you have any questions or comments about this project, please feel free to contact me at: thiyaruff@gmail.com.
