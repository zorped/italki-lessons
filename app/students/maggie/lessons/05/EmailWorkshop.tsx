import { FixList, LessonSection } from "../../../../components/LessonBlocks";

export function EmailWorkshop() {
  return (
    <LessonSection id="email-workshop" number={6} kind="Writing workshop" title="Your emails, made clearer" lead="These revisions preserve your ideas. Names and system labels have been generalised. Open the sentence notes to see what changed.">
      <div className="split">
        <div>
          <h3>1. Ask for missing information</h3>
          <div className="modelText"><p>Hi [name],</p><p>We are implementing multi-factor authentication, so each system account needs its own email address.</p><p>We found that many accounts with the specified prefix do not have an email address recorded in the system. Could you check these accounts and help us add the missing email addresses by the end of today?</p><p>Thanks for your help.</p></div>
          <p className="hint">If this person only needs to check the accounts, say “Could you check these accounts today? We need to add the missing addresses by the end of the day.” This separates the responsibilities.</p>
        </div>
        <div><h3>What changed?</h3><FixList items={[
          { said: "require all the account have its own email address", natural: <>Each account <b>needs</b> its own email address.</>, why: "Each takes a singular noun and verb. Also possible: 'All accounts need their own email addresses.'" },
          { said: "many accounts didn't have email addresses on the system", natural: <>Many accounts <b>do not have</b> an email address recorded <b>in</b> the system.</>, why: "We found describes the completed check. Do not have describes the problem that still exists." },
          { said: "could help check and we should add all the email address by today", natural: <><b>Could you</b> check these accounts and help us add the missing <b>email addresses by the end of today</b>?</>, why: "Name who should act and give a clear deadline. Separate the project, problem and request into sentences." },
        ]} /></div>
      </div>
      <div className="split">
        <div>
          <h3>2. Request a briefing</h3>
          <div className="modelText"><p>Hi [name],</p><p>The email below outlines several proposed changes to our processes and systems. Could you organise a short call to walk us through them?</p><p>This would help us understand the changes and assess their impact more accurately.</p><p>Thanks for your help.</p></div>
          <p className="hint">If the changes are confirmed, use “upcoming changes” in place of “proposed changes.”</p>
        </div>
        <div><h3>What changed?</h3><FixList items={[
          { said: "There will multiple process and system change based on blow email", natural: <>There <b>will be</b> several changes to our processes and systems, as outlined in the email <b>below</b>.</>, why: "Will needs a base verb: will be. Several changes is plural. Below refers to the email's position; blow is a different word." },
          { said: "could help organize a call to have a brief", natural: <><b>Could you</b> organise a short <b>briefing call</b>?</>, why: "Could you + base verb forms a complete request. A briefing is an information session. Brief can mean short or be a verb: brief us on the changes." },
          { said: "It will help us better understanding and evaluate with more accuracy", natural: <>This would help us <b>understand</b> the changes and <b>assess their impact</b> more accurately.</>, why: "After help us, use a base verb (or to + base verb). Keep understand and assess parallel, and name what you are evaluating." },
        ]} /></div>
      </div>
      <h3>3. Express the benefit in your own words</h3>
      <FixList items={[
        { said: "this will help better coordination among teams which will reduce TCO to chase approval and refinement every time", natural: <>This will help teams <b>coordinate better</b> and <b>reduce the need for</b> our operations team to keep following up on approvals and refinement. These repeated follow-ups have been a recurring challenge.</>, why: "Help teams coordinate uses help + team/person + base verb. Reduce the need for someone to do something describes the benefit. Keep following up expresses repeated effort." },
      ]} />
      <p className="calloutNote"><span className="noteLabel">Check the source too</span>The leader&apos;s original contains an error: “a recurring challenges” should be <b>a recurring challenge</b>. You can learn from the organisation of ideas while checking the grammar yourself.</p>
      <h3>A structure you can reuse</h3>
      <ol className="chunkRow"><li><b>Situation</b><span>What are we doing, and why?</span></li><li><b>Issue or impact</b><span>What needs attention?</span></li><li><b>Request</b><span>Who should do what, and by when?</span></li></ol>
      <p>Rewrite one email without looking. Check who should act, verb forms, plural nouns and the deadline. Then compare it with the example.</p>
    </LessonSection>
  );
}
