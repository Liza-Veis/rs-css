const levels = [
  {
    title: 'Select the pots',
    selector: 'pot',
    markup: ` 
	 <pot>
	 	<sprout></sprout>
	 </pot>
	 <pot>
	 	<sprout></sprout>
	 </pot>
	 <pot>
	 	<sprout></sprout>
	 </pot>`
  },
  {
    title: 'Select the pot on the plate',
    selector: 'plate pot',
    markup: ` 
	 <pot>
	 	<sprout></sprout>
    </pot>
    <plate>
	 	<pot>
			<sprout></sprout>
	 	</pot>
    </plate>
    <pot>
	 	<sprout></sprout>
    </pot>`
  },
  {
    title: 'Select the bowl pots',
    selector: '.bowl',
    markup: ` 
    <pot class="bowl">
   	<flower>
     		<div></div>
     		<div></div>
    	</flower>
    </pot>
    <pot>
      <flower>
         <div></div>
         <div></div>
      </flower>
    </pot>
    <plate>
      <pot class="bowl">
      	<sprout></sprout>
      </pot>
    </plate>`
  },
  {
    title: 'Select the cup',
    selector: '#cup',
    markup: ` 
	 <plate>
	 	<pot>
			<sprout></sprout>
	 	</pot>
  	 </plate>
  	 <pot>
	 	<rose>
			<div></div>
			<div></div>
	 	</rose>
   </pot>
   <pot id="cup">
	 	<sprout></sprout>
   </pot>
   <plate>
	 	<pot>
			<sprout></sprout>
		 </pot>
   </plate>`
  }
];

export { levels };
