# Test task for the company Zivver for the position of Angular Frontend Developer

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Answers for questions

1. The JWT is secure because even if an attacker steals the token, they can't change it. Additionally, in each token, we specify the period after which the token will be considered invalid, we will update it with a Refresh token.

2. XSS attacks: 
	- Attackers they can add malicious code to the script tag in the form input fields. 
	- Attackers can also add some javascript code to the href attribute of links (for example, <a href="javascript:...">).
	- Attackers they can add javascript code to the onerror attribute of the img tag (for example, <img onerror="...">).
	To prevent this, you need to use DomSanitizer. For example, to clear the html code, use the [innerHTML] attribute. Thanks to this, Angular will only leave secure html. For links, we can use the [href] attribute. If the link is trusted we should use bypassSecurityTrustUrl, Angular will remove the bad code leaving only the text.
	
3. A mutable object is an object whose state can be modified or changed over time. An immutable object, on the other hand, is an object whose state cannot be modified after it is created.
	 - Object.freeze({name: 'Mike'});
	 - Advantages:
		- No side effects. Object once created cannot be modified, so easy to predict its state.
		- As there are no side effects so testing becomes easy.
		- It also eases out debugging as there is only one value for the structure.
	 - Disadvantages:
		- It is difficult to construct cyclic data structures (such as graphs). For example, you have 2 objects that cannot be changed after initialization.
	 - For objects with nesting, I would use lodash( for cloning objects), immutable.js or wrote functions that return a new reference to an object. For simple objects, I would use Object.freeze or spread operator.
	
4. For faster loading, we can take the following steps:
	- Compress and optimize your images 
	- Minimize HTTP requests
	- Lazy Loading
	- If there is a long list on the screen use virtual scroll
	- Use PWA. Cache web pages
	- Critical CSS
	- Reduce the use of web fonts
	- Minify CSS, JavaScript, and HTML
	- Use asynchronous and defer loading for CSS and JavaScript files
	
5. I think option b will be more convenient for me
