const copy_to_clipboard = (string) => {

	const copy_this = document.createElement('textarea');
	copy_this.value = string;
	copy_this.setAttribute('readonly','');
	document.body.appendChild(copy_this);
	copy_this.select();
	document.execCommand('copy');
	document.body.removeChild(copy_this);
	alert(`the correct wallet address (${string}) has been copied to your clipboard. you can now pay me :)`); 
};
