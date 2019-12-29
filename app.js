document.getElementById('buttons').addEventListener('click', getInfo)

function getInfo(){
	const inputs = document.getElementById('input')
	if (inputs.value === ''){
		message();
	}else{
		fetching(inputs.value)

	}

	inputs.value = ''

}

function message(){
	 const p = document.getElementById('message')
	 p.appendChild(document.createTextNode('please enter a username'))
	
}

async function fetching(value){
	const api_url = `https://api.github.com/users/${value}`
	const data = await fetch(api_url)// the await means that you have to wait for the promise to resolve 
	if (!data.ok){
		alert(' the user was not found. Please enter a different user')
	}else{
	const jsonData = await data.json();
	console.log(jsonData)
	const ul = document.getElementById('another');
	const li = document.createElement('li');
	li.appendChild(document.createTextNode(jsonData.login))
	ul.appendChild(li)
}


}