Current Status for the app.

I got auth working pretty well, could use some minor error trapping and some better styles but it's alright.
Profile is editiable and working
Announcements is almost fully functionally. Everything works but there is a weird state issue with the delete and edit state. They work but they don't re-render right away. I toiled at this for hours and could not figure it out.
Started Modules and got the creation of them working but didn't have time for the module page.
The pages component was one of the first I worked on. I don't know if I don't understand excatly what the rubric says but I struggled to implement what I was thinking. Put it on the back burner and ran out of time.

HOOKS:
updateUser is more like update data. I forget to rename but it update value in users, announcements, etc.
UseDelete deletes values based on id
useDropdown was for announcements and modules. I changed implementation
useEditbutton sets state for the edit features.
usefetchdata grabs table data from the api

CONTEXT:
FormProvider manages all my forms
IsLogged keeps the global log value
TrackUser keeps track of current user. 

CSS: 
I wrote most of the css myself it ain't pretty but it does a decent job
NOT RESPONSIVE
