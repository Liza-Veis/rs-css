const levels = [
  {
    title: 'Select the pots',
    selector: 'pot',
    syntax: 'A',
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
    syntax: 'A B',
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
    syntax: '.classname',
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
    syntax: '#id',
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
    title: 'Select all flowers and roses',
    selector: 'flower, rose',
    syntax: 'A, B',
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
    title: 'Select all the things!',
    selector: '*',
    syntax: '*',
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
    syntax: 'A + B',
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
    title: 'Select the flowers directly on a pot',
    selector: 'pot > flower',
    syntax: 'A > B',
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
    syntax: 'A ~ B',
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
    syntax: ':first-child',
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
    syntax: ':last-child',
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
    syntax: ':nth-child(n)',
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
    title: 'Select all pots starting from the 3rd',
    selector: 'pot:nth-child(n+3)',
    syntax: ':nth-child(An+B)',
    markup: `
   <pot>
		<cactus class="round"></cactus>
	</pot>
	<pot class="bowl">
		<rose>
			<div></div>
			<div></div>
		</rose>
	</pot>
	<pot class="bowl">
		<flower>
			<div></div>
			<div></div>
		</flower>
	</pot>
	<pot id="cup">
		<rose>
			<div></div>
			<div></div>
		</rose>
	</pot>
	<pot>
		<rose>
			<div></div>
			<div></div>
		</rose>
	</pot>`
  },
  {
    title: 'Select the rose on the 2nd pot from the end',
    selector: 'pot:nth-last-child(2) rose',
    syntax: ':nth-last-child(n)',
    markup: `
	<pot>
		<rose>
			<div></div>
			<div></div>
		</rose>
	</pot>
	<pot id="cup">
		<sprout></sprout>
	</pot>
	<pot class="bowl">
		<rose>
			<div></div>
			<div></div>
		</rose>
	</pot>
	<pot>
		<sprout></sprout>
	</pot>`
  },
  {
    title: 'Select the first plate',
    selector: 'plate:first-of-type',
    syntax: ':first-of-type',
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
    syntax: ':nth-of-type(n)',
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
    title: 'Select every 3rd pot starting from the 2nd',
    selector: 'pot:nth-of-type(3n+2)',
    syntax: ':nth-of-type(An+B)',
    markup: `
  	<pot class="bowl">
	  	<rose>
	  		<div></div>
	  		<div></div>
  		</rose>
  	</pot>
  	<pot id="cup">
	  	<sprout></sprout>
  	</pot>
  	<pot>
	  	<flower>
		  	<div></div>
		  	<div></div>
	  	</flower>
  	</pot>
  	<pot class="bowl">
	  	<rose>
		  	<div></div>
		  	<div></div>
	  	</rose>
  	</pot>
 	<pot>
	  	<cactus></cactus>
  	</pot>`
  },
  {
    title: 'Select the 2nd plate from the end',
    selector: 'plate:nth-last-of-type(2)',
    syntax: ':nth-last-of-type(n)',
    markup: `
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
			<rose>
				<div></div>
				<div></div>
	 		</rose>
		</pot>
	</plate>
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
    title: 'Select the regular pots',
    selector: 'pot:not(.bowl)',
    syntax: ':not(A)',
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
    syntax: '[attribute]',
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
    title: 'Select the flowers with color attribute',
    selector: 'flower[color]',
    syntax: 'A[attribute]',
    markup: `
  	<plate>
		<pot>
		  <flower color="pink">
				 <div></div>
				 <div></div>
		  </flower>
		</pot>
	</plate>
	<pot class="bowl">
		<flower>
		  <div></div>
		  <div></div>
		</flower>
	</pot>
	<pot>
		<rose color="purple">
		  <div></div>
		  <div></div>
		</rose>
	</pot>
	<pot>
		<cactus>
			<flower color="yellow">
				<div></div>
			</flower>
		</cactus>
	</pot>`
  },
  {
    title: 'Select the yellow flowers',
    selector: '[color="yellow"]',
    syntax: '[attribute="value"]',
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
    syntax: '[attribute^="value"]',
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
    syntax: '[attribute$="value"]',
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
    syntax: '[attribute*="value"]',
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
    syntax: ':empty',
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
