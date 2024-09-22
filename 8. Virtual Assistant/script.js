let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=4 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else if(hours>17 && hours<21){
        speak("Good Evening Sir")
    }else{
        speak("Good Night Sir")
    }
}
// window.addEventListener('load',()=>{
//     wishMe()
// })
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=((event)=>{
    let currentIndex = event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
})
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
        voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, how can I help you?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant Jarvis, created by Santosh")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google..")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://instagram.com/","_blank")
    }
    else if(message.includes("open github")){
        speak("opening github...")
        window.open("https://github.com/","_blank")
    }
    else if(message.includes("thanks")||message.includes("thank you")){
        speak("You're Welcome Sir")
    }
    else if(message.includes("open chat gpt")){
        speak("opening chatgpt")
        window.open("https://chatgpt.com/","_blank")
    }
    else if(message.includes("open gemini")){
        speak("opening gemini")
        window.open("https://gemini.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("open nxtwave")||message.includes("open next wev")||message.includes("open next web")){
        speak("opening nxtwave...")
        window.open("https://www.ccbp.in/","_blank")
    }
    else if(message.includes("time")){
        let time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",second:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"long",year:"numeric"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding"+message.replace("jarvis","")||message.replace("arvish","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`,"_blank")
    }
}