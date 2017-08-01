https://cloud.google.com/

# Google Cloud Platform api service key setup

To get this to work you need to create a Google Cloud Platform account (dont worry this is not enough data to get charged, unless you literally spam seed/query your db).

 - Google follows the Moore's Law pricing model, as tech increases prices come down and storage increases

## GCP Datastore Pricing model
__(as of 7/17/17)__
![image](https://user-images.githubusercontent.com/15203899/28280269-0cf86974-6ad8-11e7-84b9-bd0d53e32e1c.png)
https://cloud.google.com/datastore/


# MAKING VIDEO SHOWING SETUP - Will be added with better instructions soon..
If this is your first time you will also have to install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/) to your computer. Then create a Datastore project, go to your IAM & Admin section, then on the left side of the tabs go to "Service accounts" find the project you made and click the 3 dots on the right side of that line and select "Create key" then select json.  This file you want to keep secure.  Make a duplicate of the google_api_service_key_EXAMPLE.json inside the [src](https://github.com/DaveyEdwards/react-starter-kit-relay-modern-GCP-Datastore/tree/master/src) folder and delete the underscore and EXAMPLE.json part (this file will is hidden from your pushes to Github inside your [.gitignore](https://github.com/DaveyEdwards/react-starter-kit-relay-modern-GCP-Datastore/blob/master/.gitignore) file)
