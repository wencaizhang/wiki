!function(f,o){var t=f(".ins-search"),n=t.find(".ins-search-input"),i=t.find(".ins-section-wrapper"),p=t.find(".ins-section-container");function c(n,t,e,r,i){return f("<div>").addClass("ins-selectable").addClass("ins-search-item").append(f("<header>").append(f("<i>").addClass("fa").addClass("fa-"+n)).append(null!=t&&""!=t?t:o.TRANSLATION.UNTITLED).append(e?f("<span>").addClass("ins-slug").text(e):null)).append(r?f("<p>").addClass("ins-search-preview").html(r):null).attr("data-url",i)}function d(n,t,e){var r,i,a,s=u(n);if(0===e.length)return null;switch(r=o.TRANSLATION[t],t){case"POSTS":case"PAGES":i=e.map(function(e){var n=20<e.firstOccur?e.firstOccur-20:0,r="";return delete e.firstOccur,s.forEach(function(n){var t=new RegExp(n,"gi");r=e.text.replace(t,'<em class="search-keyword"> '+n+" </em>")}),r=r?r.slice(n,n+80):e.text.slice(0,80),c("file",e.title,null,r,o.ROOT_URL+e.path)});break;case"CATEGORIES":case"TAGS":i=e.map(function(n){return c("CATEGORIES"===t?"folder":"tag",n.name,n.slug,null,n.permalink)});break;default:return null}return(a=r,f("<section>").addClass("ins-section").append(f("<header>").addClass("ins-section-header").text(a))).append(i)}function h(n,t){var e={};n.pages.concat(n.posts).forEach(function(n){n[t]&&n[t].forEach(function(n){e[n.name]=n})});var r=[];for(var t in e)r.push(e[t]);return r}function u(n){return n.split(" ").filter(function(n){return!!n}).map(function(n){return n.toUpperCase()})}function g(n,r,t){var e=u(n);return e.filter(function(e){return 0<t.filter(function(n){if(!r.hasOwnProperty(n))return!1;var t=r[n].toUpperCase().indexOf(e);return-1<t?("text"==n&&(r.firstOccur=t),!0):void 0}).length}).length===e.length}function T(n,i,t,a){var s=0;return u(n).forEach(function(n){var r=new RegExp(n,"img");t.forEach(function(n,t){if(i.hasOwnProperty(n)){var e=i[n].match(r);s+=e?e.length*a[t]:0}})}),s}function e(n){var t=f.makeArray(p.find(".ins-selectable")),e=-1;t.forEach(function(n,t){f(n).hasClass("active")&&(e=t)});var r=(t.length+e+n)%t.length;f(t[e]).removeClass("active"),f(t[r]).addClass("active"),function(n){if(0!==n.length){var t=i[0].clientHeight,e=n.position().top-i.scrollTop(),r=n[0].clientHeight+n.position().top;r>t+i.scrollTop()&&i.scrollTop(r-i[0].clientHeight),e<0&&i.scrollTop(n.position().top)}}(f(t[r]))}function r(n){n&&n.length&&(location.href=n.attr("data-url"))}t.parent().remove(".ins-search"),f("body").append(t),f.getJSON(o.CONTENT_URL,function(l){"#ins-search"===location.hash.trim()&&t.addClass("show"),n.on("input",function(){var n,t,e,r,i,a,s,o,c,u=f(this).val();!function(n,t){for(var e in p.empty(),t)p.append(d(n,e.toUpperCase(),t[e]))}(u,(r={POST:function(n){return T(t,n,["title","text"],[3,1])},PAGE:function(n){return T(t,n,["title","text"],[3,1])},CATEGORY:function(n){return T(t,n,["name","slug"],[1,1])},TAG:function(n){return T(t,n,["name","slug"],[1,1])}},e=t=u,i={POST:function(n){return g(e,n,["title","text"])},PAGE:function(n){return g(e,n,["title","text"])},CATEGORY:function(n){return g(e,n,["name","slug"])},TAG:function(n){return g(e,n,["name","slug"])}},a=(n=l).posts,s=n.pages,o=h(n,"tags"),c=h(n,"categories"),{posts:a.filter(i.POST).sort(function(n,t){return r.POST(t)-r.POST(n)}),pages:s.filter(i.PAGE).sort(function(n,t){return r.PAGE(t)-r.PAGE(n)}),categories:c.filter(i.CATEGORY).sort(function(n,t){return r.CATEGORY(t)-r.CATEGORY(n)}),tags:o.filter(i.TAG).sort(function(n,t){return r.TAG(t)-r.TAG(n)})}))}),n.trigger("input")}),f(document).on("click focus",".search-form-input",function(){t.addClass("show"),t.find(".ins-search-input").focus()}).on("click",".ins-search-item",function(){r(f(this))}).on("click",".ins-close",function(){t.removeClass("show")}).on("keydown",function(n){if(t.hasClass("show"))switch(n.keyCode){case 27:t.removeClass("show");break;case 38:e(-1);break;case 40:e(1);break;case 13:r(p.find(".ins-selectable.active").eq(0))}})}(jQuery,window.INSIGHT_CONFIG);