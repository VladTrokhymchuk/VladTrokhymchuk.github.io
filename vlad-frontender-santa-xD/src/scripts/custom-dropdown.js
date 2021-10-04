

function DropDown(el, position, Width, headerBgColor, headerTextColor, headerActiveBgColor, headerActiveTextColor, optionsBg, optionsTextColor) {
  this.container = el.parent();
  this.dd = el;

  this.placeholder = this.dd.children('span');

  this.optsContainer = $('ul.dropdown');
  this.opts = this.optsContainer.find('li');
  this.optsAnchor = this.opts.find('a');
  this.val = '';
  this.index = -1;
  this.headerBackground = `transparent`;
  this.headerText = headerTextColor;

  this.headerActiveBackground = `#fff`;
  this.headerActiveText = headerActiveTextColor;

  this.optionsBackground = optionsBg;
  this.optionsText = optionsTextColor;

  this.optionPosition = position;
  this.width = Width;

  this.initEvents();
}

DropDown.prototype = {
  initEvents : function() {
      var obj = this;
      // header css
      $(obj.container).css('width', obj.width);
      var headerCss = { background: obj.headerBackground,color: obj.headerText };
      $(obj.dd).css(headerCss);

      // options css
      var optionsCss = { background: obj.optionsBackground };
      $(obj.optsContainer).css(optionsCss);

      // options a tag css
      var optionsAnchorCss = {  color: obj.optionsText };
      $(obj.optsAnchor).css(optionsAnchorCss);

      if(obj.optionPosition === 'relative'){
        console.log('relative');
        $(obj.optsContainer).appendTo('.dropdown-container');
        $(obj.optsContainer).css('position',obj.optionPosition);

      } else{
        console.log('absolute');
        $(obj.optsContainer).appendTo('.wrapper-dropdown');
        $(obj.optsContainer).css('absolute',obj.optionPosition);
      }

      obj.container.on('click', function(event){
        // active header css
        var activeCss = { background: obj.headerActiveBackground,'border-radius': '15px','border-bottom-right-radius': 0,'border-bottom-left-radius': 0 };
        $(obj.dd).css(activeCss);
        $('#dd2').css({'background': '#E5E5E5'})
        $(obj.placeholder).css('color',obj.headerActiveText);

        if($(this).hasClass('active')) {
          $(obj.dd).css({ background: 'transparent','border-radius': '15px' })
          $('#dd2').css({'background': 'transparent'})
        }

        $(this).toggleClass('active');
        
      

        return false;
      });

      obj.opts.on('click',function(){
        var opt = $(this);
        obj.val = opt.text();
        obj.index = opt.index();
        obj.placeholder.text(obj.val);
      });
    },
    getValue : function() {
      return this.val;
    },
    getIndex : function() {
      return this.index;
    }
}


$('.dropdown-option').click(function(e) {
  var currentValue = ($(this).get(0).innerText)
  $('.gender').get(0).innerText = currentValue;
})
