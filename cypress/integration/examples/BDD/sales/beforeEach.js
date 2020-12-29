beforeEach(()=>
{
    cy.fixture('salesdata').then(function(data)
    {
this.data=data
    })
});