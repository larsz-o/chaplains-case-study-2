const luzDecisionData = (
    // to do: create an "END" state - with a general reflection question.
  {
      "1": {
        question:
          `<p>You are a community chaplain who works with unhoused people. You meet Luz one night after her injury. She is sitting with a group of people who you’ve spoken to in the past - including a younger man named Clint who you frequently pray with. You approach the group, embracing Clint in a hug before introducing yourself to Luz.</p>

          <p>Luz looks up, sneers, and shouts at you to go away.</p> 
          
          <p>Clint snaps at Luz, “Be cool.”</p>
          
          <p>“The last thing I need after a day like today is a lesson from a priest,” she replies.</p>
          
          <p>What do you say in response?</p>`,
        options: [
          { text: `"I’m not a priest, I’m a chaplain."`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This response isn’t the best choice. You didn’t do anything to make Luz feel comfortable with your presence in her space. She may not know what a chaplain does, so telling her that you’re not a priest but a chaplain doesn’t give her any relevant information.` },
          { text: `"What kind of day did you have?"`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This response is an okay response, but it may be jumping too quickly into the conversation. Try to build rapport with Luz before asking her how her day was.` },
          { text: `"I’m not here to give anyone a lesson, but I can talk if you had a bad day."`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best of the three options. You affirm that you’re listening to Luz by noticing that she was most concerned about being given a "lesson." Then you noticed that she shared she was having a bad day and made an open-ended offer to talk.` },
        ],
        multipleSelect: false,
      }, 
      "2": {
        question: `<strong>You say, "I’m not here to give anyone a lesson, but I can talk if you had a bad day."</strong><br/><p>“I don’t talk to priests anymore,” she says. “I stopped believing in God a long time ago.”</p><p>You point to your ministerial collar and say, “That’s fine by me. I’m actually an interfaith minister, not a priest. And I serve people of all backgrounds - people who believe in God and people who don’t.”</p><p>Luz looks surprised by this statement. “Never heard of a priest that doesn’t care if you believe in God or not.”</p><p>What do you say next?</p>`, 
        options: [
            {text: `"As I said, I’m not a priest. And lots of religious people have different beliefs about God. Did you know that different denominations actually disagree over the nature of Jesus?"`, conditions: {type: null, command: '', index: null}, feedback: `This is the wrong choice. You are attempting to engage in a conversation about religious debates, rather than focusing on the needs of the person in front of you. This will likely shut the conversation down.`},
            {text: `"I’m just here to listen and provide help if I can. What is going on for you today?"`, conditions: {type: null, command: '', index: null}, feedback: `This is the best of the three choices. You reaffirm your role as a listener and a support person and ask another open-ended question.`},
            {text: `"It seems like you’re not interested in talking."`, conditions: {type: null, command: '', index: null}, feedback: `This is the wrong choice. You shut down the conversation and a potential connection with Luz.`},
        ],
        multipleSelect: false
    }, 
    "3": {
        question: `<strong>You say, "I’m just here to listen and provide help if I can. What is going on for you today?"</strong><br/><p>Luz tells you about her job and her back injury. She says she feels defeated. She’s been looking for a job for months and no one would give her a break because she didn’t have a home address. A friend of a friend helped her get into the warehouse, but now she doesn’t know if she can go back because of her injury. She’s worried no one else will give her a shot.</p><p>You listen intently and let Luz speak. You affirm how difficult Luz’s situation is, periodically mirroring back what Luz shares. “I hear you saying that you felt like you got one lucky shot with your current employer, and you’re worried this is your last chance.”</p><p>“Yes, exactly!” Luz responds, and then continues to share more of her backstory, including how she ended up living on the streets. She says that she first hurt her back thirteen years ago, and became addicted to the opioids her doctor prescribed for the pain. She’s not using drugs anymore, but ten years of substance use alienated her from her family, emptied her bank accounts, and wrecked her employment and housing records.</p><p>You say, “You have been through so much in the past thirteen years. I’m not surprised that you’re so worried about losing your job now. You’ve experienced tremendous losses.”</p><p>Luz replies, “I’m scared.” </p><p>You pause and let Luz sit in a moment of silence. She is tearing up, but you can tell she is also thinking. She says, “I need to talk to my boss, but I don’t know what to say. Are you going to make me pray now?”</p>`,
        options: [ 
           
            {text: `"Praying might help. Why don't you try? I'll guide us."`, conditions: {type: null, command: "", index: null}, feedback: `This is the wrong choice. Luz has already expressed that she doesn't want prayer to be part of your interaction with her.`},    {text: `"Prayer won't help in this situation."`, conditions: {type: null, command: '', index: null}, feedback: `This is the wrong choice. Even though you are acknowledging that Luz doesn't want to pray, you also close a door for Luz to access prayer as a tool in the future, if she wants to.`},    {text: `"I'm not going to make you pray. Tell me, what do you want to say to your boss?"`, conditions: {type: null, command: '', index: null}, feedback: `This is the right choice. You practice active listening and ask Luz more questions to help her through her challenges, rather than asking her to pray through them.`},
           
        ], 
        multipleSelect: false
    }, 
    4: {
        question: `<strong>You say, "I'm not going to make you pray. Tell me, what do you want to say to your boss?"</strong><br/><p>Luz says that she needs to admit to her boss that her back pain is severe and she wants to see if she can temporarily work another job in the warehouse. You talk through different ways the conversation might go and help her feel equipped to handle a few different scenarios.</p><p>You end the conversation by wishing her luck on her conversation with her boss.</p>`,
        options: [ 
           
            {text: `"I walk this same route every Monday night, so I'll look for you next week to see how your conversation went."`, conditions: {type: "end", command: "SET_ACTIVE_SCENE", index: null}, feedback:`Good choice - telling Luz when you will be around next lets her know that she can expect you and keeps the door open for further connection.`},  {text: `"If you want to find me this Sunday, I'll be at the church up the road."`, conditions: {type: "end", command: "SET_ACTIVE_SCENE", index: null}, feedback:`Bad choice. Meet Luz where she is at and encourage connection in a way that will work for her.`}, 
        ], 
        multipleSelect: false
    }, 
    }
  ) 
  export default luzDecisionData;