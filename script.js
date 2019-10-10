function _search(val){
    val = val.toLowerCase();
    var box = findAll(".box");
    for(let i = 0; i < box.length; i++){
    	let h4 = _find('h4', box[i]),
    	txtval = h4.textContent || h4.innerText;
    	txtval = txtval.toLowerCase();
    	box[i].style.display = txtval.startsWith(val) ? '':'none';
    }
}
