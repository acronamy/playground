let attractive = {
	new(target,radius,action){

		let on = (e)=>{
			const box = target.getBoundingClientRect(),
					percent = (n,of)=>Math.floor((n / of) * 100),
					right = window.innerWidth - box.right,
					bottom = window.innerHeight - box.bottom
				//where around the box is the cursor?
					let is = {
						left:e.clientX < box.left,
						right:e.clientX > window.innerWidth - right,
						top:e.clientY < box.top,
						bottom:e.clientY > window.innerHeight - bottom,
						//special
						get center(){
							//not any of these
							return [
								this.left,
								this.right,
								this.top,
								this.bottom
							].every(test=>!test)
						}
					}
					
					let logging = true,
							data = {
								center:false,
								aproachX:false,
								aproachY:false,
								directionX:false,
								directionY:false,
								threshold:[]
							}
					if(is.left&&!is.top&&!is.bottom){
						let per = 100 - percent(e.clientX,box.left)
						if(logging){
							target.innerHTML = '<p>left: '+per+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:per,
								directionX:'left'
							},data))
						}
						
					}
					if(is.left&&is.top){
						let perY = 100 - percent(e.clientX,box.left),
								perX = 100 - percent(e.clientY,box.top)
						if(logging){
							target.innerHTML =  '<p>top: '+perX+'%,<br> left: '+perY+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:perX,
								aproachY:perY,
								directionX:'left',
								directionY:'top'
							},data))
						}
					}
					if(is.top&&!is.left&&!is.right){
						let per = 100 - percent(e.clientY,box.top)
						if(logging){
							target.innerHTML = '<p>top: '+per+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachY:perY,
								directionY:'top'
							},data))
						}
					}
					if(is.right&&!is.top){
						let per = percent(e.clientX - box.right,right)
						if(logging){
							target.innerHTML = '<p>right: '+per+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:perX,
								directionX:'right'
							},data))
						}
					}
					if(is.right&&is.top){
						let perY = percent(e.clientX - box.right,right),
								perX = 100 - percent(e.clientY,box.top)
						if(logging){
							target.innerHTML = '<p>top: '+perX+'%,<br> right: '+perY+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:perX,
								aproachY:perY,
								directionX:'top',
								directionY:'left'
							},data))
						}
					}
					if(is.bottom&&!is.left&&!is.right){
						let per = percent(e.clientY - box.bottom,bottom)
						if(logging){
							target.innerHTML = '<p>bottom: '+per+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachY:perY
							},data))
						}
					}
					if(is.right&&is.bottom){
						let perX = percent(e.clientX - box.right,right),
								perY = percent(e.clientY - box.bottom,bottom)
						if(logging){
							target.innerHTML =  '<p>bottom: '+perY+'%,<br> right: '+perX+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:perX,
								aproachY:perY
							},data))
						}
					}
					if(is.left&&is.bottom){
						let perX = 100 - percent(e.clientX,box.left),
								perY = percent(e.clientY - box.bottom,bottom)
						if(logging){
							target.innerHTML =  '<p>bottom: '+perY+'%,<br> left: '+perX+'%</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:perX,
								aproachY:perY
							},data))
						}
					}
					if(is.center){
						if(logging){
							target.innerHTML = '<p>Center</p>'	
						}
						if(action){
							action(Object.assign({
								aproachX:0,
								aproachY:0,
								center:true
							},data))
						}
					}
					
					
					
				},
				off = (e)=>{
					target.parentNode.removeEventListener('mousemove',on,false)
					//clear
					target.innerHTML = ''
				}
		
		window.onresize = ()=>{
			off()
			settimeout(()=>{
				on()
			})
		}
		target.parentNode.onmousemove = on;
		target.parentNode.onmouseout = off;
	}
}


let box = document.querySelector('.box');
attractive.new(box,20,(x,y)=>{
	console.log(x,y)
})