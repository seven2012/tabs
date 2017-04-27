window.tabs = function(element){
    var $tabs = $(element)
    let selector = 'ol[data-role="tabs-nav"]>li'
    //console.log(selector)
    $tabs.on('click',selector, e => {
      //console.log(e.currentTarget)
      let $li = $(e.currentTarget)
      //console.dir($li)//$li是一个数组
      let index = $li.index()
      //console.log(index)
      $li.addClass('active').siblings().removeClass('active')
     //找另外一个ol,不可直接选择，如果页面有多个tabs，就会出错，要从最近的一个子元素往上找，找到同级再找兄弟元素的子元素选中li
      $li.closest('ol[data-role="tabs-nav"]')
          .siblings('ol[data-role="tabs-panes"]')
          .find('li')
          .eq(index).addClass('active')
          .siblings().removeClass('active')
    })

//console.log('结束')
}

tabs(document.querySelectorAll('.wrapper')[0])
tabs(document.querySelectorAll('.wrapper')[1])
