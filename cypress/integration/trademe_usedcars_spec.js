describe('Trade me used cars category api tests', () => {	
  //const apiRoot = 'https://api.tmsandbox.co.nz/v1/';  
  const apiRoot = 'https://api.trademe.co.nz/v1/';  
 
  it('Return the number of used car brands from the TradeMe UsedCars category api', () => {
     cy.request(apiRoot + 'Categories/UsedCars.json' ).then((response) => {
        let brandCount = response.body.Subcategories.length; 
        cy.task('log', 'Number of used car brands = '+ brandCount);
     });        
  });
   
  it('Return the number of Kia cars from the TradeMe UsedCars category', () => {    
     cy.request(apiRoot + 'Categories/UsedCars.json?with_counts=true' ).then((response) => {
          let usedCarsArray = response.body.Subcategories;
          let kiaCount   = 0;
          let brandNames = [];
          usedCarsArray.forEach( (brand) => {
              brandNames.push(brand.Name);
              if (brand.Name == 'Kia')
                 kiaCount = brand.Count;       
          });
          expect(brandNames).to.include('Kia');
          cy.task('log', 'Number of Kias = ' + kiaCount);           
      });           
  });
 
  it('Expect the brand "Hispano Suiza" does not exist.', () => {    
      cy.request(apiRoot + 'Categories/UsedCars.json?with_counts=true' ).then((response) => {
          let usedCarsArray = response.body.Subcategories;
          let brandNames = [];
          usedCarsArray.forEach( (brand) => {
            brandNames.push(brand.Name);
          });          
          expect(brandNames).to.not.include("Hispano Suiza");
      });        
  });

});