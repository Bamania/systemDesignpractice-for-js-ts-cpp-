abstract class observable{
    
    
     add(observer:observers):void{

    }
     remove(observer:observers):void{

    }
     notify():void{

    }
    
}

abstract class observers{
     channel:observable
    // now this observer object should also has the observerable instance
    update():void{}     
}

class YoutuberX extends observable{
    videoTitle="how to earn 10k in 10s" 
    observers:observers[]=[]; //this will holds all the observer of this channel 
    add(observer:observers):void{
        this.observers.push(observer);
    }
    remove(observer:observers):void{
        this.observers=this.observers.filter((item)=>item!=observer)
    }
    notify():void{
        for (const observer of  this.observers){
            observer.update()
        }

    }

    getVideo():string{
        return this.videoTitle
    }
}

class userA extends observers{
    channel:observable=new YoutuberX()
    Title:string=" "
    update():void{
        this.Title=this.channel.getVideo()
    }

}