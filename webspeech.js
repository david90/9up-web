/*! webspeech 2016-01-03 */
!function(){function a(){try{this.u=new SpeechSynthesisUtterance}catch(a){throw"This browser does not have support for webspeech api"}this.u.rate=1,this.u.onend=function(){},this.speak=function(a,b){this.u.lang=a,this.u.text=b,speechSynthesis.speak(this.u)}}function b(a){try{this.listener=new webkitSpeechRecognition}catch(b){throw"This browser does not have support for webspeech api"}platform.os.toString().indexOf("OS X")>-1&&(this.listener.continuous=!0),a&&(this.callBack=a),this.listener.lang="en";var c=this;this.listener.onresult=function(a){if(a.results.length>0){var b=a.results[a.results.length-1];b.isFinal&&c.callBack(b[0].transcript)}},this.listener.onsoundstart=function(){},this.listener.onspeechstart=function(){},this.listener.onsoundend=function(){},this.isContinuous=function(){return this.listener.continuous},this.listen=function(a,b){a&&(this.listener.lang=a),b&&(this.callBack=b),this.listener.start()},this.stop=function(){this.listener.stop(),console.log("audio listener stopped")}}var c={Speaker:a,Listener:b,Languages:{ENGLISH:"en",FRENCH:"fr",CANTONESE:"zh-HK"}};window.webspeech||(webspeech=c),webSpeechNoConflict=function(){return c}}();