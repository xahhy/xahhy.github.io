(function($) {
  $(function() {
    $('.button-collapse').sidenav();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('#search').on('input', () => {
      const search = $('#search')
        .val()
        .trim()
        .toLowerCase();
      $('[repo-name]').each(function() {
        const repoName = $(this)
          .attr('repo-name')
          .trim();
        if (search === '') {
          $(this).show();
        } else if (!RegExp(search).test(repoName.toLowerCase())) {
          $(this).hide();
        } else {
          $(this).show();
        }
      });
    });
  });
})(jQuery);
