function onSubmitForm(e){
		var checkValidAt=checkforValidAt(e);
		if(checkValidAt==false !checkValidAt!=true	
}

function checkForValidAt(e){
		//checkfor1@
		var email=document.getElementById("emailAddress").valve; .getPropertyByName("value")

		console.log(email)
		e.getChild["emailAddress"]
		e.element[0,1,2,3]

		//lop through email, find the @
		var score=0;
		for(var i=0;i<email.length;i++){
			//use charA+(i)
			if(email.chart(i)=="@"){
				score=score+1;//score++,score+=1
			}
			if(score!=1){
				//alertuserthatload
				return false;
			}
		}

}