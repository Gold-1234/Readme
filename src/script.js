
document.addEventListener("DOMContentLoaded", () => {
	
	const input = document.getElementById('markdownInput')
	
	const output = document.getElementById("markdownPreview");

	const clearBtn = document.getElementById('clear')
	
	marked.setOptions({
		gfm: true,
		breaks: true,
		smartypants: true,
	  });
	
	const clearInput = ( ) => {
		input.value = ""
		output.innerHTML = ""
	}
	  
	input.addEventListener("input", (e) => {
	  const text = marked.parse(e.target.value)
	  console.log(text);
	  
	  output.innerHTML = text
	  console.log(text);
	  
	});

	clearBtn.addEventListener('click', () => {
		clearInput()
		console.log('cleared');
		
	})
  });