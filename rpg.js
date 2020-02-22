var player=new Object();
player.name="john";
player.hp=100;
player.fight=function(){
    this.hp=this.hp-2;
}
player.rest=function(){
    this.hp++;
}
player.report=function(){
    console.log(this.name+":"+this.hp);
}

player.fight();
player.rest();
player.report();

// echo "# 0219" >> README.md
// git init
// git add README.md
// git commit -m "first commit2"
// git remote add origin https://github.com/joeywda/0219.git
// git push -u origin master

// git remote add origin https://github.com/joeywda/0219.git
// git push -u origin master