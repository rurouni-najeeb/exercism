const isUpperCase = (message: string) : boolean => message == message.toUpperCase() 
const isQuestion = (message: string) : boolean => message[message.length - 1]  == "?"
export function hey(message: string): string {
  
  message = message.trim();
  let hasLetter : boolean = /[a-zA-Z]/.test(message)

  if(isQuestion(message) && isUpperCase(message) && hasLetter)
    return "Calm down, I know what I'm doing!";
  else if(isQuestion(message))
    return "Sure.";
  else if(message == "")
    return "Fine. Be that way!";
  else if(isUpperCase(message) && hasLetter)
    return "Whoa, chill out!";
  else
    return "Whatever."

}
