(function($) {
  $(function() {
    const debounce = (fn, ms = 0) => {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
      };
    };

    $('.button-collapse').sidenav();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('#search').on(
      'input',
      debounce(() => {
        const search = $('#search')
          .val()
          .trim()
          .toLowerCase();
        $('[repo-name]').each(function() {
          const repoName = $(this)
            .attr('repo-name')
            .trim();
          if (RegExp(search).test(repoName.toLowerCase()) || search === '') {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      }, 200),
    );
  });
})(jQuery);
