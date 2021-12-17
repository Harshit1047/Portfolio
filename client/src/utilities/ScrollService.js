import {TOTAL_SCREENS} from "./commonUtils"
import {Subject} from 'rxjs'

export default class ScrollService{
    static scrollHandler=new ScrollService();

    static currentScreenBroadCaster=new Subject()
    static currentScrenFadeIn=new Subject()

    constructor()
    {
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }
    scrollToHireMe=()=>
    {
        let contactMeScreen=document.getElementById("Contact Me")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior:"smooth"})
    }
    scrollToHome=()=>
    {
        let homeScreen=document.getElementById("Home")
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior:"smooth"})
    }
    isElementInView =(elem,type)=>{
        let rec=elem.getBoundingClientRect();
        let elementTop=rec.top;
        let elementBottom=rec.Bottom;
        let partiallyVisible=elementTop<window.innerHeight && elementBottom>=0;
        let completeVisible = elementTop>=0 && elementBottom<=window.innerHeight;
        switch(type){
           case "partial":
               return partiallyVisible;
            case "complete":
                return completeVisible
                default:
                    return false
        }
    }
    checkCurrentScreenUnderViewport=(event)=>
    {
        if(!event || Object.keys(event).length<1)
        return;
        for(let screen of TOTAL_SCREENS){
            let screenFromDOM=document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;

            let fullyVisible=this.isElementInView(screenFromDOM,"complete");
            let partiallyVisisble=this.isElementInView(screenFromDOM,"partial")
            if(fullyVisible||partiallyVisisble){
                if(partiallyVisisble && !screen.alreadyRendered){
                    ScrollService.currentScrenFadeIn.next({
                        fadeInScren: screen.screen_name
                    });
                    screen['alreadyRendered']=true;
                    break;
                }
                if(fullyVisible){
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}
