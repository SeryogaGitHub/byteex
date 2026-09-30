export const AccordionContainer = () =>{
  $('.accordion-container > .toggle').on('click', function (){
    const $this = $(this);
    const $parents = $this.parent();
    const $accordionContent = $parents.children('.accordion-content')

    $accordionContent.stop().slideToggle();
    $this.toggleClass('open')
  });
}