var makeCatchBox=(function(){
	
	var el;
	var parent;
	var outer;
	function moveRandomly()
	{	
		var xstart=window.scrollX;
		var xend=window.scrollX+window.innerWidth-this.offsetWidth;
		var ystart=window.scrollY;
		var yend=window.scrollY+window.innerHeight-this.offsetHeight;
		
		var x=Math.floor( Math.random()*(xend-xstart)+ xstart);
		var y=Math.floor( Math.random()*(yend-ystart)+ ystart);
		
			
		
		this.style.position='absolute';
		this.style.left=x;
		this.style.top=y;
	}
	
	function init(id)
	{
		el=document.getElementById(id);
		el.style.width='100px';
		el.style.height='100px';
		el.style.backgroundColor='yellow'
		
		parent=el.parentElement;
		el.removeAttribute('id');			
		outer=document.createElement('div');
		outer.style.width=(el.offsetWidth)+'px';
		outer.style.backgroundColor='transparent';
		
		outer.appendChild(el);
		outer.style.padding='20px';
		
		parent.appendChild(outer);
		outer.setAttribute('id',id);
		
		el=document.getElementById(id);
		el.addEventListener('mouseover',moveRandomly);
	}
	
	
	return {
		init:init
	}
	
})();