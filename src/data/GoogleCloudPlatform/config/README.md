# Google Cloud Platform API Service Key setup

## How to create Google Cloud Platform Service Keys

1. Log into your Google Cloud Platform Account.
2. Go to the Menu icon in the top left corner and then select "IAM Admin".
3. The on the left menu again select "Service Accounts".
4. Below the top blue bar there is blue text that says "+ CREATE SERVICE ACCOUNT", click that and a dialog box will pop up.

We will be creating 3 Service accounts (explained below)
7. I prefer to name the Service accounts something that allows me to know everything about it just from the name.  NameOfPerson LevelOfControl Capabilities. So I create my account that only can view my whole application: Davey Project Viewer
  7. Then select the role this key is for, and select Project > Viewer.
  7. Select "Furnish a new private key".
  7. Select JSON
	7. Click create.  This will download a JSON file that we will need to place in our project folder in a very safe place.  Don't move the file just yet, we will be downloading 2 more. **If a service account got into the wrong hands and it had the neccessary permissions you could go bankrupt**
8. Create another Service Account the same way as before, but this one will give control of Google Datastore.  We will name it: Davey Datastore Owner.  This will be used for our seed files and creating database Kinds (models/tables).  Since this is a Owner key with full privilages, we do not want it getting into the hands of 1337 h4x0rz to make us bankrupt.
  8. For the role select: Datastore > Owner.
  8. Select "Furnish a new private key".
  8. Select JSON
	8. Click create. (Downloads a file).
9. Now we create another Service Account.  This one will be to give our application when its working the ability to read/write to the database.  We will name it: Davey Datastore User.
  9. For the role select: Datastore > User.
  9. Select "Furnish a new private key".
  9. Select JSON
	9. Click create. (Downloads a file).

	10. Now we "Cut" the 3 files from where they were downloaded to, and place them inside your 'myiworlds/src/data/GoogleCloudPlatform/config/serviceKeys/' folder.  This folder is on your gitignore and will only upload to github the example service key (gcp-CLOUDPRODUCTNAME-PERMISSIONLEVEL-service-key)
	11. Now rename the files in this exact fashion.
	  11. gcp-project-viewer-service-key.json
		  11. This is referenced in the settings to get the project's id for connecting to Google Cloud Platform
	  11. gcp-datastore-owner-service-key.json
		  11. This is referenced in your seed files inside GoogleCloudPlatform/StorageAndDatabases/Datastore/N0de/n0deSeed.js
	  11. gcp-datastore-user-service-key.json
		  11. This is referenced in your server.js file for your application to make reads/writes.


## Service Keys to create explanations

1. I would recommend creating 1 viewer service key to give your whole application a file to look at to get your Google Cloud Platform project name.  This key will not allow you to create services inside your GCP account, making it safer to access in more places in your application if needed.

2. Then for every service you wish to enable inside the majestic Google Cloud Platform create 2 service keys.

  2. 1 for your seed or whatever file/function creates your tables/models/entities (unless you do this manually in the cloud console).

  2. And 1 more for your application to do read/writes to those services.

	__Example:__
	For Google Datastore you want your application to only be able to read write to Entities(models/tables) already in your database, you don't want people to be able to create new Entities(models/tables) inside your database which could potentially destroy your existence.


## /serviceKeys folder

### THIS IS THE MOST IMPORTANT FOLDER TO KEEP SAFE
__Guard this with your life. I mean like in a random box that is placed in the hardest to reach part of your closet type safe__

This has all of your access keys to Google Cloud Platform, if you were to accidently push one of your service keys to Github, there are bots scanning for these types of files from cloud providers.  When they find a working one you are going to wake up to a NASTY bill from them basically turning on everything inside your cloud provider that they can.  This is why it is recomended to have your service keys get **as little as possible permissions** to not allow them to create new database tables/spin up new servers, etc.

Inside the .gitignore (located in the project root), everything in the /serviceKeys folder will be ignored when pushing your code to Github, BUT the file gcp-CLOUDPRODUCTNAME-service-key.json

This is so you have an example name to copy/paste and to make life easier when adding new service keys, as well as creatiing the folder structure when you clone from Github.


__Here is an example of what a serviceKeys folder would look like with a project only using Google Datastore__
![image](https://user-images.githubusercontent.com/15203899/28944124-3e89f3b4-7856-11e7-8223-2881915557a2.png)
