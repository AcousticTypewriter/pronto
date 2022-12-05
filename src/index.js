import {isWhitespace} from "./utils"

function interpret (code) {
	//step in string
	//add to last token
	//run code if spacce after token
	let context = {
		curToken: "",
		variables: {},
		que:[],
		
		
	}
	let length = code.length;
	for(let i = 0; i < length; i++) {
		if(isWhitespace(code[i])) {
			
		}
	}
}

interpret('var l = 0;')