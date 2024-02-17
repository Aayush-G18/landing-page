function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        const whetherRead=read?`is read`:`not read yet`;
        return(`${title} by ${author} is ${pages} pages long,`+whetherRead)
    }
}
const theHobbit=new book("The Hobbit","J.R.R. Tolkien",295,0);
console.log(theHobbit.info);
book.prototype.sayHello=function() {
    console.log(`hello ${title}`);    
};