function ImgMsg()
{
    this.body='';
    this.title='';
    this.from=0;
    this.id=-1;
    this.img=new Image();
    return this;
}
ImgMsg.prototype={
    set url(val){
        this.img.src=val;
    },
    get url(){
        return this.img.src;
    }
}
