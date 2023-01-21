# chrome-extension-1.0
First Chrome extension attempt

Features Implemented: 
1. Pop-up accepts user input 
2. Pop-up will reject unallowable inputs and inform user of rejection 
3. Pop-up will clear its own search form + rejection message display within a defined period of time 
4. Replacement of images on the webpage according to theme is decided with defined pseudorandom seed 

Known Issues: 
1. If the user executes the extension scripts before the page has fully loaded all of its images, there will be images that remain in their original form
2. Only a select portion of the webpage images will be replaced (related to (1)) 

Future Works: 
1. Until a new user input is received, re-run the image replacement script every X [ms] ---> ensures that images not previously loaded will be replaced on the next round of execution 
