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
	 <plate>
      <pot class="bowl">
      	<sprout></sprout>
      </pot>
    </plate>
    <pot>
      <flower>
         <div></div>
         <div></div>
      </flower>
    </pot>`
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
  },
  {
    title: 'Select all the things!',
    selector: '*',
    markup: ` 
	<pot class="bowl">
      <flower>
         <div></div>
         <div></div>
      </flower>
   </pot>
   <pot class="bowl">
      <sprout></sprout>
   </pot>
   <pot>
      <rose>
         <div></div>
         <div></div>
      </rose>
   </pot>
   <plate>
      <pot>
      	<cactus> </cactus>
      </pot>
   </plate>`
  },
  {
    title: "Select every flower that's next to a bowl pots",
    selector: '.bowl + pot flower',
    markup: ` 
  	<pot class="bowl">
	 	<cactus></cactus>
	  </pot>
	<pot>
		<flower>
		 	<div></div>
			<div></div>
		</flower>
  	</pot>
  	<pot class="bowl">
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot id="cup">
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
 	</pot>
  	<pot>
	 	<cactus></cactus>
  	</pot>`
  },
  {
    title: 'Select all flowers and roses',
    selector: 'flower, rose',
    markup: `
	<plate>
	 	<pot>
			<sprout></sprout>
	 	</pot>
  	</plate>
  	<pot id="cup">
	 	<rose>
			<div></div>
			<div></div>
		</rose>
 	</pot>
  	<pot class="bowl">
	 	<cactus>
			<flower>
		  		<div></div>
			</flower>
	 	</cactus>
	</pot>
	<pot>
	 	<rose>
			<div></div>
			<div></div>
	 	</rose>
  	</pot>`
  },
  {
    title: 'Select the flowers directly on a pot',
    selector: 'pot > flower',
    markup: `
	<pot class="bowl">
  		<cactus>
   		<flower>
   			<div></div>
  		 	</flower>
   	</cactus>
   </pot>
   <pot>
   	<flower>
   		<div></div>
   		<div></div>
   	</flower>
   </pot>
   <plate>
   	<pot>
   	<flower>
   		<div></div>
   		<div></div>
   	</flower>
   </pot>
 	</plate>
 	<pot>
   	<cactus>
   		<flower>
   			<div></div>
   		</flower>
    	</cactus>
   </pot>`
  },
  {
    title: 'Select the pots beside the plate',
    selector: 'plate ~ pot',
    markup: `
   <plate>
	 	<pot>
			<rose>
		  		<div></div>
		  		<div></div>
			</rose>
	 	</pot>
  	</plate>
  	<pot>
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot>
	 	<sprout></sprout>
  	</pot>
  	<plate>
	 	<pot>
			<sprout></sprout>
	 	</pot>
 	</plate>`
  },
  {
    title: 'Select the cactus on the first pot',
    selector: 'pot:first-child cactus',
    markup: `
	<pot class="bowl">
		<cactus class="round"></cactus>
	</pot>
  	<pot class="bowl">
		<cactus></cactus>
  	</pot>
  	<pot>
	 	<cactus>
			<flower>
		 	 	<div></div>
			</flower>
	 	</cactus>
  	</pot>`
  },
  {
    title: 'Select the pot on the last plate',
    selector: 'plate:last-child pot',
    markup: `
	<plate>
		<pot>
			<sprout></sprout>
	 	</pot>
  	</plate>
  	<plate>
	 	<pot class="bowl">
			<flower>
		  		<div></div>
		  		<div></div>
			</flower>
	 	</pot>
  	</plate>
  	<plate>
		<pot>
	 		<sprout></sprout>
  		</pot>
  	</plate>`
  },
  {
    title: 'Select the sprout on the 3rd bowl pot',
    selector: '.bowl:nth-child(3) sprout',
    markup: `
	<pot class="bowl">
		<cactus></cactus>
  	</pot>
  	<pot class="bowl">
		<sprout></sprout>
  	</pot>
  	<pot class="bowl">
	 	<sprout></sprout>
 	</pot>
	 	<pot class="bowl">
			<sprout></sprout>
	 	</pot>
	<plate>
  		<pot>
	 		<sprout></sprout>
	  	</pot>
	</plate>`
  },
  {
    title: 'Select the first plate',
    selector: 'plate:first-of-type',
    markup: `
	<pot class="bowl">
   	<rose>
   		<div></div>
   		<div></div>
   	</rose>
	</pot>
	<plate>
   	<pot>
   		<flower>
      		<div></div>
      		<div></div>
   		</flower>
   	</pot>
	</plate>
	<plate>
   	<pot>
   		<sprout></sprout>
   	</pot>
	</plate>
	<plate>
   	<pot>
   		<flower>
      		<div></div>
      		<div></div>
   		</flower>
   	</pot>
	</plate>`
  },
  {
    title: 'Select all odd pots',
    selector: 'pot:nth-of-type(odd)',
    markup: `
	<pot class="bowl">
	 	<cactus class="round"></cactus>
  	</pot>
  	<pot class="bowl">
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot>
	 	<sprout></sprout>
  	</pot>
  	<pot>
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot>
	 	<sprout></sprout>
  	</pot>`
  },
  {
    title: 'Select the regular pots',
    selector: 'pot:not(.bowl)',
    markup: `
	<pot>
	 	<sprout></sprout>
  	</pot>
  	<pot>
	 	<sprout></sprout>
  	</pot>
  	<pot class="bowl">
	 	<sprout></sprout>
  	</pot>
  	<pot>
	 	<sprout></sprout>
  	</pot>`
  },
  {
    title: 'Select the flowers with color attribute',
    selector: '[color]',
    markup: `
	<plate>
	 	<pot class="bowl">
			<flower>
		  		<div></div>
		  		<div></div>
			</flower>
	 	</pot>
  	</plate>
  	<pot>
	 	<flower color="pink">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot id="cup">
	 	<flower color="yellow">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<plate>
	 	<pot>
			<flower>
		  		<div></div>
		  		<div></div>
			</flower>
	 	</pot>
  	</plate>`
  },
  {
    title: 'Select the yellow flowers',
    selector: '[color="yellow"]',
    markup: `
	<plate>
	 	<pot>
			<flower color="yellow">
		  		<div></div>
		  		<div></div>
			</flower>
	 	</pot>
  	</plate>
  	<pot class="bowl">
	 	<flower color="pink">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot class="bowl">
	 	<flower color="yellow">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot>
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
  	</pot>`
  },
  {
    title: 'Select every flower which color start with "p"',
    selector: '[color^="p"]',
    markup: `
	<pot class="bowl">
		<flower color="pink">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<plate>
	 	<pot class="bowl">
			<flower color="yellow">
		  		<div></div>
		  		<div></div>
			</flower>
	 	</pot>
  	</plate>
  	<plate>
	 	<pot>
			<cactus class="round">
		  		<flower color="purple">
			 		<div></div>
		  		</flower>
			</cactus>
	 	</pot>
  	</plate>
  	<pot>
	 	<flower >
			<div></div>
			<div></div>
	 	</flower>
  	</pot>`
  },
  {
    title: 'Select every flower which color end with "ge"',
    selector: '[color$="ge"]',
    markup: `
	<pot class="bowl">
		<cactus>
		  	<flower color="beige">
			 	<div></div>
		  	</flower>
		</cactus>
	</pot>
	<pot>
		<flower color="orange">
		  	<div></div>
		  	<div></div>
		</flower>
	</pot>
  	<pot id="cup">
	 	<flower color="beige">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot class="bowl">
	 	<flower color="yellow">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot>
	 	<flower>
			<div></div>
			<div></div>
	 	</flower>
  	</pot>`
  },
  {
    title: 'Select every flower which color contains "ora"',
    selector: '[color*="ora"]',
    markup: `
	<pot>
	 	<flower color="beige">
			<div></div>
			<div></div>
	 	</flower>
 	</pot>
  	<pot class="bowl">
	 	<flower color="coral">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<pot class="bowl">
	 	<flower color="orange">
			<div></div>
			<div></div>
	 	</flower>
  	</pot>
  	<plate>
	 	<pot>
			<flower>
		  		<div></div>
		  		<div></div>
			</flower>
	 	</pot>
  	</plate>`
  },
  {
    title: 'Select empty pots',
    selector: 'pot:empty',
    markup: `
	<plate class="bowl">
	 	<pot></pot>
  	</plate>
  	<pot id="cup">
	 	<sprout></sprout>
  	</pot>
  	<pot>
	 	<sprout></sprout>
  	</pot>
  	<pot></pot>`
  }
];

export { levels };
