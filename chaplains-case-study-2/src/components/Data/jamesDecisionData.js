const jamesDecisionData = (
    // to do: create an "END" state - with a general reflection question.
    {
      "1": {
        question:
          `<p>On Tuesday morning, you notice that James has signed up for an appointment with you later that afternoon. You regularly meet with students who are experiencing a range of issues. When you meet with a new student, you usually don’t know what to expect.</p>

          <p>James knocks on your door 5 minutes before the start of their appointment, just as you’re finishing your lunch. You smile and welcome them in, asking them to sit where they feel comfortable. James looks around your office before taking a seat in a chair across from you. You notice James eyeing the crucifix on your wall.</p> 
          
          <p>“How are you today, James?” you ask.</p>
          
          <p>“I’m fine,” they reply.</p>
          
          <p>You pause for a moment to allow James to continue. When they don’t, you ask, “What brings you in today?”</p>
          
          <p>“My teacher told me to see you,” they say curtly.</p><p>You sense that James is closed off, and a little anxious to be talking with you. You try another approach:</p>`,
        options: [
          { text: `“Are you having some sort of moral struggle?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. While James may like to talk about their struggles, you need to first build rapport to get them to open up.` },
          { text: `“There are a lot of reasons why someone may want to talk with a chaplain. Can you tell me a little more about what is troubling you lately?”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice out of the three options. You let James know that you are a supportive person who can help with a range of issues and ask them an open-ended question to encourage them to speak freely.` },
          { text: `“Let’s take a moment to pray.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a bad choice. Rather than attempting to be present with James, you moved immediately to prayer, which may be off-putting.` },
        ],
        multipleSelect: false,
      }, 
      "2": {
        question: `<strong>You say, "There are a lot of reasons why someone may want to talk with a chaplain. Can you tell me a little more about what is troubling you lately?”</strong><br/><p>James relaxes their shoulders a bit but still seems on edge. “I dunno. School is just hard.” James sighs. “Listen, I’m not religious or anything, so I don’t even know why I’m here.”</p><p>You nod. “I’m so sorry you’re having a hard time in school. I want you to know that you don’t have to be religious to talk to me. I help students like you with lots of challenges - if they’re religious or not.”</p><p>“Really? In this school?”</p><p>“Absolutely,” you reply.</p><p>“I get enough of all the God talk all day,” they say.</p><p>What do you say next?</p>`, 
        options: [
            {text: `“Well there is a reason for it, even if you don’t see it right now. Having a connection to God can help you through challenging times.”`, conditions: {type: null, command: '', index: null}, feedback: `This is the wrong choice. You ignored James’ statements about not being religious and attempted to get them to see the value in religion. This will likely shut them down even further.`},
            {text: `“I’m not here to try to convince you to believe anything you don’t want to. I am curious, though - is your bad experience in school related to feeling pressure around religion?”`, conditions: {type: null, command: '', index: null}, feedback: `This is the best of the three options. You affirmed that you are not trying to convert James to your religion and you opened the conversation to explore something that could be causing them stress.`},
            {text: `“Enough said. Let’s just focus on your grades. What’s going on there?”`, conditions: {type: null, command: '', index: null}, feedback: `This isn’t the best choice in this situation. While you affirmed James’ choice to not talk about religion, you also potentially shut down exploring some deeper issues by shifting to only talk about their grades.`},
        ],
        multipleSelect: false
    }, 
    "3": {
        question: `<strong>You say, “I’m not here to try to convince you to believe anything you don’t want to. I am curious, though - is your bad experience in school related to feeling pressure around religion?”</strong><br/><p>James seems suddenly startled, “Did you talk to my parents?”</p><p>You reply, “I haven’t spoken to your parents, James. I’m just here for you. Are your parents putting pressure on you, too?”</p>

        <p>They pause for a moment and then answer, “Yeah, my parents want me to go to a Baptist college.” James explains that their grades started plummeting once their parents began talking about college. “I always thought college would be a time when I could start to be myself - but now it’s like, what’s the point? I feel trapped.”</p>
        
        <p>“It makes sense that you would feel that way. Can you tell me more about that feeling?”</p>
        
        <p>James describes how they identify as non-binary and queer, which they are not allowed to express or act on in this school - at least not openly. Their parents also do not know about their identities and James is fearful that they would not respond well if they were to come out to their parents. You listen without interjecting and suddenly James is speaking a mile a minute about their home life.</p>
        
        <p>When they finally stop to take a breath, they look up at you with a small smile. “That was a lot,” they say.</p>

        <p>What do you say next?</p> `,
        options: [
          {text: `"It was. Maybe we should take a break."`, conditions: {type: null, command: '', index: null}, feedback: `This isn't the best choice in this scenario. While you affirmed that James is carrying a lot, you should try to affirm their feelings before taking a break.`},
          {text: `"It must feel like a lot. But did you know that many forms of Christianity are open to people who share your identities?"`, conditions: {type: null, command: '', index: null}, feedback: `This isn't the best choice in this situation. James has stated that they aren't interested in exploring religion at this time."`},
          {text: `"It must be a lot for you to carry, James. It’s not too much for me to hold, though. Thank you for sharing it all with me."`, conditions: {type: null, command: '', index: null}, feedback: `This is the best choice in this situation. You affirmed James' struggles and helped to alleviate them through your ministry of presence.`},
        ],
        multipleSelect: false
    },
    "4": {
      question: `<strong>You say, “It must be a lot for you to carry, James. It’s not too much for me to hold, though. Thank you for sharing it all with me.”</strong><br/><p>
      
      <p>You continue, “Sometimes just talking is enough, and sometimes people want more types of support. I would love to keep talking with you about what’s going on, and I also want you to know that if you want more people to help you navigate these parts of your identity with your family, I can help you find those, too.” </p>
      <p>“I’m not ready to talk about any of this with my family,” they respond.</p>
      <p>“That’s completely okay,” you say. “What would help you at this time?”</p>
      <p>They pause to think for a second. “I need to get out of applying to these Baptist colleges. Can you help me with that?”</p>
      <p>You affirm where James wants to go with the conversation and help them identify some resources for applying to a range of colleges. You set up additional time with James next week to check in on how they’re doing.</p>
      `,

      options: [ 
         
          {text: `"You can stop by any time between now and then if you are having a hard day or just want to say hi."`, conditions: {type: "end", command: "SET_ACTIVE_SCENE", index: null}, feedback: `Good choice - let James know that they can always come by to talk.`},   {text: `"Good luck."`, conditions: {type: "end", command: "SET_ACTIVE_SCENE", index: null}, feedback: `This isn't a great choice. Keep the conversation with James going by inviting them to visit you at a later date.`},
         
      ], 
      multipleSelect: false
  },
    }
  )
  export default jamesDecisionData;