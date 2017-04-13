
    function enter(tag,url){
                tag.addEventListener('touchstart',function(){
                    // event.preventDefault();
                    this.style.backgroundImage="url("+ url +")";

                });
            }
