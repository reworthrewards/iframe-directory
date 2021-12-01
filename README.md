![Logo - Reworth (2)](https://user-images.githubusercontent.com/46532943/144306909-c13a21ad-0e70-488d-9511-02c5aa1a102f.png)

# REWORTH'S directory iframe 

REWORTH's iframe-directory is a quick solution to integrate the rewards directory, you will be able to insert the iframe and have the directory up and running in no time without having to touch code.

This iframe is a development hosted by Reworth that uses our [react directory component](https://github.com/reworthrewards/directory-react-component).

## How to use it?
It can be embebed on a website or webView within a mobile application using the following tag:
```
example
<iframe width="100%" height="100%" src="https://directory.reworth.app/?accentColor=4767D8&filters=category,popularity,rating,price&layout=card&lang=EN&showHeader=true" 
frameBorder="0" />
```

where the base url for src is:
https://directory.reworth.app/

## Supported params
You can customize certain aspects of the component via url as params.
Here you can find a definition of each one of these params and their supported value and structure.

**accentColor**<br/>
`src="https://directory.reworth.app/?accentColor=4767D8"` <br/>
Description: Desired color for some UI elements <br/>
Value: HEX color code


**filters** <br/>
`src="https://directory.reworth.app/?accentColor=4767D8&filters=category,popularity,rating,price"` <br/>
Description: Filters available. This example contains all four supported filters. You can display a certain filter or all of them. <br/>
Value: category, popularity, rating, price.


**layout** <br/>
`src="https://directory.reworth.app/?accentColor=4767D8&filters=category&layout=card"` <br/>
Description: Layout distribution for rewards. This set the UI to show rewards as a single table or as responsive card distribution. <br/>
Value: table, card


**lang** <br/>
`src="https://directory.reworth.app/?accentColor=4767D8&filters=category&layout=card&lang=EN"` <br/>
Description: Supported language.(English and Spanish) <br/>
Value: EN,ES

**showHeader** <br/>
`src="https://directory.reworth.app/?accentColor=4767D8&filters=category&layout=card&lang=EN&showHeader=true" ` <br/>
Description: Default component header <br/>
Value: true, false

## Will it work on my project?
This implementation has been tested and proven to work on:

- [x]  React native
- [x] Ionic
- [x] website

## Security 
This iframe runs behind the scenes some headers to ensure security aspects:

X-XSS-Protection: helps us against OSX attacks
Content-Security-Policy: specifies the origin of server and scripts. Helps against cross site scripting attack.
Strict-Transport-Security:  it is used to never receive things from http and to make everything by https to avoid scripting attack.

We work actively too develop better and more secure products so expect updates!