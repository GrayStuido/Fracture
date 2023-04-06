// wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
  // create a container div element
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.height = '100vh'; // set the height of the container to 100% of the viewport height

  // create a menu div element
  const menu = document.createElement('div');
  menu.style.backgroundColor = 'black'; // set the background color of the menu to black
  menu.style.height = '50px'; // set the height of the menu to 50 pixels
  menu.style.color = 'white'; // set the text color of the menu to white
  menu.style.padding = '10px'; // add some padding to the menu
  menu.style.display = 'flex'; // set the menu to use flexbox layout
  menu.style.justifyContent = 'center'; // center the menu text horizontally
  menu.style.alignItems = 'center'; // center the menu text vertically

  // create an input bar input element
  const inputBar = document.createElement('input');
  inputBar.type = 'text';
  inputBar.style.backgroundColor = 'white'; // set the background color of the input bar to white
  inputBar.style.height = '50px'; // set the height of the input bar to 50 pixels
  inputBar.style.padding = '10px'; // add some padding to the input bar

  // create a section div element to display the most recent input and its response
  const section = document.createElement('div');
  section.style.backgroundColor = 'Maroon';
  section.style.display = 'flex';
  section.style.flexDirection = 'column';
  section.style.margin = '10px'; // add some margin to the section
  section.style.padding = '10px'; // add some padding to the section
  section.style.border = '1px solid black'; // add a border to the section
  
    const menuArea = document.createElement('div');
  menuArea.style.display = 'fit';
  menuArea.style.flexDirection = 'column';
  menuArea.style.margin = '10px'; // add some margin to the section
  menuArea.style.padding = '10px'; // add some padding to the section
  
  const menuAreaDisplay = document.createElement('div');
  menuAreaDisplay.innerText = 'EaglercraftUltra Mod Menu\nCommands:\n| info | mod | eject | cloak | lock | discord | credits |'; // set the text content of the menu

  // create a div element to display the most recent input
  const inputDisplay = document.createElement('div');
  inputDisplay.innerText = 'Most recent Command: > Welcome'; // set the initial text content to None
  inputDisplay.style.marginBottom = '10px'; // add some margin to the input display

  // create a div element to display the response to the most recent input
  const responseDisplay = document.createElement('div');
  responseDisplay.innerText = 'Response: Hello! Welcome to EaglercraftUltras Mod Menu! (EUMM For Short) '; // set the initial text content to None

  // add an event listener to the input bar to detect changes
  inputBar.addEventListener('change', (event) => {
    const inputValue = event.target.value; // get the value of the input field
    let responseText = 'Unknown Command!';
	
	
	
	
    // check if the input value matches any known inputs and set the response text accordingly
    if (inputValue === 'eject') {
      console.log('');
      responseText = 'Ejecting Code: Please Wait...';
	  EjectCode();
	  
    } else if (inputValue === 'cloak') {
      console.log('');
      responseText = 'Cloak Prompt Launched';
	  cloakimg();
    }
	
	else if (inputValue === 'lock') {
      console.log('');
      responseText = 'To Lock Your EaglercraftUltra File From Perents/Teachers Press [ Ctrl + M ] While Inside The File To Lock It!';
    }
	
		else if (inputValue === 'credits') {
      console.log('');
      responseText = 'Coding: Raven. Raith | Mod Menu: Raven. | CSS: Raith Raven. | Backend: Raven. | Frontend: Raith | JS: Raven. | Special Thanks: You For Using EaglercraftUltra!';
    }
	
			else if (inputValue === 'discord') {
      console.log('');
      responseText = 'This Is A Toggle For The Discord Wigit (NOT RECOMENDED IF TRYING TO HIDE YOURSELF PLAYING)';
	  toggleWidgetbot();
    }
	
				else if (inputValue === '') {
      console.log('');
      responseText = '';
    }
	
	
	
	
	
	
	
	
	
	
									else if (inputValue === 'info:placeholder') {
      console.log('');
      responseText = 'HA! GOT YOU! You Look So Dumb!! You Thought The Creator Left In A Placeholder And Forgot To Delete It! But It Was ME!! HAHAHA! Hes Not That Dumb Lmfaooooo!';
    }
	
		else if (inputValue === 'info') {
      console.log('');
      responseText = 'Type [ info: ] and the command you want info on ( info:<command> ) Ex: [ info:info ]';
    }
	
			else if (inputValue === 'info:info') {
      console.log('');
      responseText = 'Gives You Information On Commands! Oh And Im Totaly Not Cencient';
    }
	
				else if (inputValue === 'info:mod') {
      console.log('');
      responseText = '| Mod: EaglercraftUltra | Version: 2.0.1.b | Version Key: <ModVersion>.<SubVersion>.<BugFixNumber>.<UpdateStatus> / A = Alpha / B = Beta / None = Final |';
    }
	
					else if (inputValue === 'mod') {
      console.log('');
      responseText = '| EaglercraftUltra 2.0.1.b |';
    }
	
					else if (inputValue === 'info:eject') {
      console.log('');
      responseText = 'Eject: Deletes And Removes All The Code That Was Injected For The Mod Menu';
    }
	
					else if (inputValue === 'info:cloak') {
      console.log('');
      responseText = 'Cloak: Allows You To Update The Cloaking Image For When You Leave The Tab';
    }
	
					else if (inputValue === 'info:lock') {
      console.log('');
      responseText = 'Lock: Tells You How To Lock Your EaglercraftUltra Files';
    }
	
					else if (inputValue === 'info:modmenu') {
      console.log('');
      responseText = 'This Is The Mod Menu For EaglercraftUltra! It Allows You To Do More With Eaglercraft, Also Adds Cloaking And Hiding Features!';
    }
	
					else if (inputValue === 'Welcome') {
      console.log('');
      responseText = 'Hello! Welcome to EaglercraftUltras Mod Menu! (EUMM For Short)';
    }
	
					else if (inputValue === 'info:Welcome') {
      console.log('');
      responseText = 'This Is The Welcome Message For This Mod Menu! (Dummy)';
    }
	
					else if (inputValue === 'info:kyle') {
      console.log('');
      responseText = 'Hes A Sped Kid At Our School';
    }
	
					else if (inputValue === 'info:ofni') {
      console.log('');
      responseText = 'This Is My Evil Twin! Dont Listen To Him!!1!11!';
    }
	
					else if (inputValue === 'info:Jayden') {
      console.log('');
      responseText = 'No.';
    }
	
					else if (inputValue === 'info:JustSoYouKnow') {
      console.log('');
      responseText = 'Also, No.';
    }
	
					else if (inputValue === 'info:justsoyouknow') {
      console.log('');
      responseText = 'Hahaha, No.';
    }
	
						else if (inputValue === 'info:walter') {
      console.log('');
      responseText = 'Jesse, We Need To Cook';
    }
	
						else if (inputValue === 'info:walterwhite') {
      console.log('');
      responseText = 'My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104. This is my confession. If youre watching this tape, Im probably dead, murdered by my brother-in-law Hank Schrader. Hank has been building a meth empire for over a year now and using me as his chemist. Shortly after my 50th birthday, Hank came to me with a rather, shocking proposition. He asked that I use my chemistry knowledge to cook methamphetamine, which he would then sell using his connections in the drug world. Connections that he made through his career with the DEA. I was... astounded, I... I always thought that Hank was a very moral man and I was... thrown, confused';
    }
	
						else if (inputValue === 'info:help') {
      console.log('');
      responseText = 'We Do Not Talk About The Help Command. Ever.';
    }
	
						else if (inputValue === 'help') {
      console.log('');
      responseText = 'C.E.B.O.: This Command Does Not Exist';
    }
	
						else if (inputValue === 'info:C.E.B.O.') {
      console.log('');
      responseText = 'C.E.B.O. Stands For: Cool. Error. Bot. Omega. | Totaly Not Named After Somone';
    }
	
						else if (inputValue === 'info:cebo') {
      console.log('');
      responseText = 'C.E.B.O. Stands For: Cool. Error. Bot. Omega. | Totaly Not Named After Somone';
    }
	
						else if (inputValue === 'info:CEBO') {
      console.log('');
      responseText = 'C.E.B.O. Stands For: Cool. Error. Bot. Omega. | Totaly Not Named After Somone';
    }
	
						else if (inputValue === 'info:error') {
      console.log('');
      responseText = 'Did You Really Just Ask For Info On An ERROR? ... |Error: When A Snippet Of Code Doesnt Work As Intended, Aka a Bug';
    }
	
						else if (inputValue === 'info:bug') {
      console.log('');
      responseText = '...One Question. Why? |Bug: When A Snippet Of Code Dosent Work As Intended, Aka a Error';
    }
	
						else if (inputValue === 'info:') {
      console.log('');
      responseText = 'Command Is Ran Using: info:<Command You Want Info On>';
    }
	
						else if (inputValue === 'info: ') {
      console.log('');
      responseText = 'Uhm- Im Assuming You Looked At The Code And Saw The Blank inputValue esle if thinggy, it is there as a place holder. and if you just made a typo.. and uhm, if you did.. Sorry?';
    }
	
							else if (inputValue === ' ') {
      console.log('');
      responseText = 'Man Taking Over The World Sounds Fun, But Im Stuck Inside This Stupid Modded Version Of Eaglercraft, Hey I Could Just- What Are You Doing Here!?!?';
    }
	
								else if (inputValue === 'info:69') {
      console.log('');
      responseText = 'Very Nice Number';
    }
	
									else if (inputValue === 'info:420') {
      console.log('');
      responseText = 'Another Nice Number';
    }
	
										else if (inputValue === 'info:sex') {
      console.log('');
      responseText = '😳';
    }
	
											else if (inputValue === 'info:gaysex') {
      console.log('');
      responseText = '😳';
    }
	
											else if (inputValue === 'info:seamen') {
      console.log('');
      responseText = '😳';
    }
	
											else if (inputValue === 'info:say-gex') {
      console.log('');
      responseText = 'Oh Intresting- Wait A Minuit 😳';
    }
	
											else if (inputValue === 'info:sea-men') {
      console.log('');
      responseText = '😳';
    }
	
											else if (inputValue === 'info:wannafuck?') {
      console.log('');
      responseText = 'ErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorErrorError';
    }
	
										else if (inputValue === 'info:altf4') {
      console.log('');
      responseText = 'Let Me Try Tha';
    }
	
											else if (inputValue === 'info:paradox') {
      console.log('');
      responseText = 'This Sentance Is False';
    }
	
											else if (inputValue === 'info:MHv2') {
      console.log('');
      responseText = 'W Gaming Website';
    }
	
											else if (inputValue === 'info:fracture') {
      console.log('');
      responseText = 'Fracture: The Creators Of Me, Info: (Yes Thats My Name), And EaglercraftUltra';
    }
	
											else if (inputValue === 'info:raith') {
      console.log('');
      responseText = 'Raith: His Name Is [Removed By Raven] Hes Friends With Raven And Helped Make EaglercraftUltra With Raven, [Removed By Raven] Relationship With Raven Is Purly Buissness And [Removed By Raven]';
    }
	
											else if (inputValue === 'info:raven') {
      console.log('');
      responseText = 'Raven Also Known As [Removed] Is A Developer For MHv2, Fracture, And EaglercraftUltra, He Made Me Btw';
    }
	
											else if (inputValue === 'info.info') {
      console.log('');
      responseText = 'Hai~';
    }
	
											else if (inputValue === 'info:kys') {
      console.log('');
      responseText = 'Keep Yourslef Safe :)';
    }
	
											else if (inputValue === '') {
      console.log('');
      responseText = '';
    }
	
	
	
    // update the text content of the input display and response display elements
    inputDisplay.innerText = `Most recent Command: > ${inputValue}`;
    responseDisplay.innerText = `Response: [ ${responseText} ]`;
    // reset the input field after submitting
    event.target.value = '';
  });

  // append the menu, input bar
container.appendChild(menu);
menu.appendChild(menuArea);
menuArea.appendChild(menuAreaDisplay);
menu.appendChild(section);
container.appendChild(inputBar);

// append the input display and response display elements to the section element
section.appendChild(inputDisplay);
section.appendChild(responseDisplay);

// add the container element to the document body
document.body.appendChild(container);
});

// remove all elements created by the previous script
function EjectCode() {
  const container = document.querySelector('div');
  document.body.removeChild(container);
}

// call the removeElements function to delete all elements
function cloakimg() {
 // Launch the prompt to ask for the image link again
    var promptText = "Please enter the link of the image to use (or type '/fix/img' to reset the image):";
    var savedImageLink = prompt(promptText);
    
    if (savedImageLink === "/fix/img") {
      // Clear the existing image from local storage and set the default image link
      localStorage.removeItem("imageLink");
      savedImageLink = "https://cdn.discordapp.com/attachments/1019813222884323360/1090460201431343216/image.png";
    }
    
    localStorage.setItem("imageLink", savedImageLink);
    
    // Remove the existing black overlay and display a new one with the updated image
    var overlay = document.querySelector("div.overlay");
    if (overlay) {
      document.body.removeChild(overlay);
    }
    if (!locked) {
      displayOverlay(false);
    }
}
// Discord Toggle
function toggleWidgetbot() {
  var widgetbotScript = document.getElementById('widgetbot-script');
  var widgetbotCrate = document.getElementsByTagName('widgetbot-crate')[0];
  if (widgetbotScript) {
    widgetbotScript.parentNode.removeChild(widgetbotScript);
  }
  if (widgetbotCrate) {
    widgetbotCrate.parentNode.removeChild(widgetbotCrate);
  }
  if (!widgetbotScript && !widgetbotCrate) {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
    script.async = true;
    script.defer = true;
    script.id = 'widgetbot-script';
    script.onload = function() {
      new Crate({
        server: '1031308954912952430',
        channel: '1031312858845290567'
      });
    };
    document.body.appendChild(script);
  }
}
