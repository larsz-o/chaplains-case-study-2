const partA = (
    // to do: create an "END" state - with a general reflection question.
   {
      "1": {
        question:
          `<p>The spiritual care team was divided into three groups. Each group was tasked with working with colleagues and family members to plan a memorial service for one of the people who died.</p><p>Your group was tasked to plan the service for the perpetrator, Mario Ramirez. You gather the group of chaplains in a meeting room and open the meeting.</p><p>Just as you begin, one of the chaplains says, “I heard from Dr. Hendel that this service is being challenged by senior leaders and members of the hospital community. Do you think we should even hold one?”</p>
<p>How should you respond?</p>`,
        options: [
          { text: `"No, I don’t think we should. He killed two people, and himself. He is the source of violence in this situation, and it feels disrespectful to the victims and their families to remember him in this way.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a very difficult question to answer, but this isn’t the best choice. As a chaplain, it is your responsibility to hold difficult truths. Mario was a husband, father, colleague, and member of the community. While no one supports his actions, you can choose to embrace the healing power of forgiveness by holding a memorial service for Mario.` },
          { text: `"Yes, we were asked to plan the service, and it’s our duty to serve all people, even those who commit acts of violence.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a very difficult question to answer, but this is the best choice. Mario was a husband, father, colleague, and member of the community. While no one supports his actions, you can choose to respond much as defense attorneys respond, with a commitment to the humanity of every individual.` },
          
        ],
        multipleSelect: false,
        type: "choice"
      }, 
      "2": {
        question: `<strong>You say, “Yes, we were asked to plan the service, and it’s our duty to serve all people, even those who commit acts of violence,” you say. “I know this is a really difficult situation, but I don’t think we are condoning violence by holding a memorial service for Mario. He was a member of this community, too. He was suffering.” </strong>

        <p>Another chaplain chimes in, “I agree that it’s clear that Mario was suffering, but it still does not feel right to hold a memorial service for him. I don’t think this is just about the victims’ families and peers - he traumatized the entire hospital community.” Other chaplains begin to nod.</p>
        <p>You hear their concerns about the impacts of this violence on the entire hospital community and begin to look at the notes that Dr. Hendel shared with you, with recommendations from various stakeholders. You read each position to the group.</p>
        <p>Which one would you choose?</p>
        `, 
        options: [
          { text: `Hold a memorial service at the hospital, in a worship space.”`, conditions: {type: null, command: "NEXT", index: null}, feedback: `A small group of senior hospital leaders and staff have asked that Mario’s memorial service be held at the hospital in the worship space. They believe that each person who died that day should be remembered. This isn't a bad choice, but there is a better one. Consider another option.` },
          { text: `Hold a memorial service off campus at a nearby church.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `Some senior hospital leaders and staff have asked that the memorial service be held off-site at a nearby church, so that anyone who wants to avoid the service doesn’t have to pass it during their work day. This choice balances the needs of most of the stakeholders by holding a service for Mario, but not bringing that service into the space of the hospital. This choice avoids retraumatizing members of the hospital community, while still holding firm in the hospital’s values of “caring for the people in our community at all stages of life, from beginning to end.”` },
          { text: `Don’t hold a memorial service for Mario at all.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `Several senior hospital leaders and staff are adamantly opposed to holding a memorial service for Mario that’s affiliated with the hospital at all. They don’t want to give him any notoriety for this tragedy.This is not the best choice. Consider another option.` },
          { text: `Hold a memorial service at the hospital, at the site of the shooting. `, conditions: {type: null, command: "NEXT", index: null}, feedback: `A small group of hospital staff have voiced their desire to hold Mario’s memorial service at the site of the shooting, to hold the pain of the violence that all suffered on that day. This is not the best choice. Consider another option.` }
            
        ],
        multipleSelect: false,
        type: "choice", 
        popUp: false, 
      popUpContent: ``
    }, 
    "3": {
        question: `<p>The final decision was for the hospital to host all three memorial services. Those for Hugo and Kelly were held on campus. The service for Mario took place off campus, away from the hospital, at a local church. You attended and spoke at his service. </p><p>Dr. Hendel attended the family funerals for Hugo and Kelly as well as the memorial services on campus. She delivered eulogies at both of the on campus memorial services by invitation. Dr. Hendel decided not to attend Mario’s service off campus.</p><p>As she writes, “I decided that going would cross the line, integrity-wise, for me, personally, and that, as CEO, foregoing the service was also best for the whole. Instead, I wrote a brief statement on behalf of the hospital administration expressing condolences to his family and gave it to the chaplain to read at the service. A service that ended up being attended by several hundred people.”</p>`,
        options: [ 
           
            {text: `I promise I will not tell anyone. You can always talk to me.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `While this isn't the worst choice, you should consider the complexity of the situation before promising Sergeant Ruiz that you will never tell anyone else about what she shared. You can help her access resources, and you should let her know that you can be a supportive person to her through this process.`},
            {text: `I know you fear the repercussions, but what if he does this again, or to someone else?`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not a good choice. You should support Sergeant Ruiz at this moment. It is not her responsibility to stop her rapist from acting again, especially as she has fears about the consequences of reporting the assault.`},
            {text: `I can keep this confidential for you, but I can also help you share this with some other helpers.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the best choice. You affirmed Sergeant Ruiz's desire for confidentiality, but also let her know that you can continue to help her seek additional support and care.`}
           
        ], 
        multipleSelect: false, 
        type: "none", 
        popUp: true, 
        popUpContent: `<p>How do you feel about the decisions that were made? Would you have chosen differently if you had the chance? Whose voices were most important to honor in this situation?</p>`
    },
    "4": {
      question: `<p>"I can keep this confidential for you, but I can also help you share this with some other helpers. I understand your desire for privacy, Sergeant Ruiz," you say, "and I can't begin to imagine what  you are feeling right now. Thank you for coming and sharing this with me. I feel so privileged to sit with you,  even here in the midst of confusion and pain. I want to help you work through what happened to you – both  right now and in the days to come. I also want you to know that I will be limited in the help that I can give you  if we don't share what happened to you with other helpers." </p><p>"What do you mean, 'other helpers'?" she asks.</p>
      <p>"There are some things we can't go back and do later," you reply.</p><p>"We want to get you medical care  after what happened, and we should also preserve any evidence that may be able to prove what happened  and hold those who did it responsible. A nurse could help us with these things while keeping the situation confidential." Sergeant Ruiz nods.</p>
      <p>You continue, "There are others, like myself, who can help you work through the emotional and  spiritual trauma you experienced. We can work together to get you the care that you desire and you need."</p>`,
      multipleSelect: false, 
      type: "none", 
      popUp: true, 
      popUpContent: `<p>Additional military resources to consider in this situation could be the Sexual Assault Response  Coordinator (SARC), Victim Advocate, and Family Advocacy Program (FAP) as outlined at <a href="https://www.armyresilience.army.mil/sharp/" target="_blank" rel="noopener noreferrer">Sexual Harassment/Assault Response and Prevention Program</a> and in DoD Directive 6495.01 "Sexual Assault Prevention and  Response (SAPR) Program."</p>`
  },
  "5": {
    question: `<p>Sergeant Ruiz agrees to go with you to the hospital to receive care. You partner with the  medical staff and sexual assault response coordinators to help Sergeant Ruiz during this difficult time.</p><p>In the end, she decides that she will only file a restricted report about what happened and not press charges or pursue legal or judicial recourse.</p>`,
    multipleSelect: false, 
    type: "none"
    },
    "6": {
      question: `<h3>Two months later</h3><p>You meet with Sergeant Ruiz a few times right after the incident happened. In those conversations, she shared that she was trying to make sense of it all by asking herself questions like: </p><ul><li>Why did this happen to me?</li><li>Was I at fault?</li><li>Who am I now that this happened?</li><li>What would others think of me if they knew?</li><li>How could God have let this happen?</li></ul><p>You slowly help her process the issues of meaning, purpose, and identity that Sergeant Ruiz is experiencing. She makes some progress in talking through them with you, and then the  conversations seem to cut too deep. She isn't willing to go to those places of difficulty yet. Slowly she begins  to disengage - at first showing up late for appointments, and then not showing up at all.</p>`,
      multipleSelect: false, 
      type: "none"
      },
      "7": {
        question: `<p>Now you see Sergeant Ruiz every week or two, while visiting soldiers in the motor pool. When she sees you, she politely nods and smiles, but keeps her distance.</p><p>What do you do?</p>`,
        options: [ 
           
            {text: `Ignore Sergeant Ruiz to respect the boundary she set.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is not the best choice in this situation. Sergeant Ruiz's growing distance could be an indication of a deepening mental health crisis brought on by the assault. Continue to extend friendliness towards her so that she knows you can be a resource to her should she need you.`},
            {text: `Appraoch Sergeant Ruiz and let her know you would be happy to meet with her again.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is a good choice in this situation. Sergeant Ruiz's growing distance could be an indication of a deepening mental health crisis brought on by the assault. It is wise to offer to meet with her and to screen for spiritual distress.`},
            {text: `Ask Sergeant Ruiz if she plans to pursue any future recourse for the sexual assault.`, conditions: {type: null, command: "NEXT", index: null}, feedback: `This is the wrong choice. You should not bring up the details of her situation in front of others as this violates her confidentiality.`}
           
        ], 
        multipleSelect: false, 
        type: "choice", 
        popUp: true, 
        popUpContent: `<p>For more on chaplain confidentiality in the military, see Rule 503 of the Uniform Code of Military Justice.  For discussion related specifically to confidentiality in U.S. Army chaplaincy, see paragraph 16-2 in Army  Regulation 165-1, Army Chaplain Corps Activities (5 March 2024).</p><p>Learn more about <a href="https://sapr.mil/reporting-options" target="_blank" rel="noopener noreferrer">reporting sexual assault in the military</a>.</p>`
    },
      "8": {
        question: `<p>You reach out to Sergeant Ruiz to check in on her and let her know you would be happy to meet with her if it would be helpful. She smiles, but doesn't take you up on your offer.</p>
        <p>You can never be fully sure what happened that night, or whether Saunders had any part in it. You hope not, but in either case Saunders remains one of the soldiers under your spiritual  care, whatever that may involve in the present or the future. As you pull out of the parking lot in the evening, a silent prayer emerges from the depths:</p>
        <p>"May truth come to light; may justice be done; may unseen wounds heal; may each one under my spiritual care deeply flourish."</p>`,
        
        multipleSelect: false, 
        type: "none",
        end: true
    }
  }
  )
  export default partA;