document.getElementById('buttons').addEventListener('click', getInfo)

function getInfo(){
	const inputs = document.getElementById('input')
	if (inputs.value === ''){
		message();
	}else{
		console.log(inputs.value)
	}

	inputs.value = ''

}

function message(){
	 const p = document.getElementById('message')
	 p.appendChild(document.createTextNode('please enter a username'))
	
}