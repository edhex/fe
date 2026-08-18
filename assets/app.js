(function(){
  'use strict';


  const valueData={
    access:{kicker:'Rare access',title:'Borrow the experience before you need it.',copy:'A student may never otherwise get to sit down with people who have just achieved exceptional VCE results and ask them the questions that usually stay unanswered. FutureEdge makes that access simple — and brings more than one perspective into the room.'},
    unfiltered:{kicker:'Unfiltered insight',title:'The useful part is often what went wrong.',copy:'The strongest lessons are rarely “I worked hard”. They are the missed marks, over-studying, bad routines, comparison, pressure and moments someone had to change course. FutureEdge is designed to surface the messy detail students can actually learn from.'},
    curated:{kicker:'Patterns across many voices',title:'One person gives you a method. Many reveal what repeats.',copy:'FutureEdge compares answers across a growing group of exceptional people. Where the same behaviours, decisions or warnings keep appearing independently, they become far more useful than a single success story — and those patterns shape the resources.'}
  };
  document.querySelectorAll('.value-tab').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.value-tab').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      const d=valueData[btn.dataset.key];
      document.getElementById('valueKicker').textContent=d.kicker;
      document.getElementById('valueTitle').textContent=d.title;
      document.getElementById('valueCopy').textContent=d.copy;
    });
  });

  const outcomes={
    student:{title:'Shorten the learning curve.',rows:[
      ['A study approach worth testing','Specific systems and routines drawn from people who have just performed exceptionally well.'],
      ['A better response to setbacks','What high performers actually did after poor results, pressure spikes and motivation drops.'],
      ['Permission to stop doing useless things','The habits that looked productive but were not — and what they replaced them with.'],
      ['Perspective beyond the ATAR','Ambition without pretending one score is the whole definition of success.']
    ]},
    parent:{title:'Support without becoming the study police.',rows:[
      ['Know what genuinely helps','What students say parents did that made hard weeks easier and performance better.'],
      ['Ask better questions','Prompts that create useful conversations rather than another progress interrogation.'],
      ['Spot pressure without killing ambition','A clearer sense of when to push, when to step back and how to help a student reset.'],
      ['Share a common language','Resources designed so student and parent can refer to the same ideas during the year.']
    ]}
  };
  function renderOutcome(key){
    const d=outcomes[key];
    document.getElementById('outcomeTitle').textContent=d.title;
    document.getElementById('outcomeList').innerHTML=d.rows.map(function(r){return '<div class="outcome-row"><i>✓</i><div><b>'+r[0]+'</b><span>'+r[1]+'</span></div></div>';}).join('');
  }
  renderOutcome('student');
  document.querySelectorAll('.outcome-tab').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.outcome-tab').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');renderOutcome(btn.dataset.outcome);
    });
  });

  const questionData={
    sac:{title:'After a bad SAC, the best students usually reset fast.',note:'Not a polished story — the actual moves: what they changed next, what they stopped doing and how they got perspective back.',examples:[['Diagnose the real issue','Was it knowledge, timing, exam technique, stress or overconfidence?'],['Change something immediately','High performers usually changed the system, not just promised to “work harder”.'],['Recover perspective quickly','One bad result became feedback, not an identity crisis.']]},
    waste:{title:'Some of the most common study habits feel useful but are not.',note:'FutureEdge wants the honest answers on the routines that burned time without improving performance.',examples:[['Rewriting everything','Lots of effort, not always much recall.'],['Passive revision','Reading notes can feel productive while hiding weak understanding.'],['Over-organisation','Perfect planning can become a way to avoid the hard work.']]},
    plan:{title:'The original plan is often wrong — and good students notice early.',note:'One of the most useful lessons is how people recognised a system was failing before it became expensive.',examples:[['Watch the signals','Low recall, poor practice scores, or too many hours for too little gain.'],['Adapt by subject','What works for English may not work for Methods.'],['Protect energy','A “perfect” plan that is impossible to sustain is still a bad plan.']]},
    parents:{title:'The most helpful parents are rarely the loudest ones.',note:'FutureEdge asks what support actually helped — and what accidentally added pressure.',examples:[['Stay interested, not intrusive','Useful check-ins beat constant monitoring.'],['Help with perspective','Good parents often helped students reset after setbacks.'],['Reduce friction','Sleep, routines, calm and logistics can matter more than more advice.']]},
    start:{title:'The best advice at the start of Year 12 is usually simpler than people expect.',note:'Students often wish they had started earlier on a few core behaviours rather than trying to do everything.',examples:[['Start practice earlier','Do not wait too long to test yourself properly.'],['Keep the system simple','A workable routine beats an elaborate one.'],['Protect consistency','Momentum usually matters more than heroic bursts.']]}
  };
  function renderQuestion(key){
    const d=questionData[key];
    document.getElementById('questionText').textContent=d.title;
    document.getElementById('questionNote').textContent=d.note;
    document.getElementById('questionExamples').innerHTML=d.examples.map(function(x){return '<div class="question-example"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>';}).join('');
  }
  renderQuestion('sac');
  document.querySelectorAll('.question-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.question-btn').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      renderQuestion(btn.dataset.key);
    });
  });

  document.querySelectorAll('.voice-card').forEach(function(card){
    function toggle(){card.classList.toggle('open');}
    card.addEventListener('click',toggle);
    card.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
  });

  const audienceData={
    student:[
      ['Study systems you can actually test','How high performers planned, practised, revised and adjusted when the plan stopped working.'],
      ['The mistakes worth avoiding','What people wasted time on, learned too late or would change if they did the year again.'],
      ['Pressure + motivation tools','Practical ways to respond when results, confidence or workload wobble.'],
      ['Many perspectives in one place','Useful patterns distilled from a wider group, not just one person’s method.']
    ],
    parent:[
      ['Support without hovering','What students say helped from home — and where well-meant involvement became pressure.'],
      ['Better questions to ask','Prompts that create useful conversations without turning every dinner into a VCE status meeting.'],
      ['Perspective when things go wrong','Ways to help a student reset after setbacks while protecting both ambition and wellbeing.'],
      ['A resource to come back to','A shared reference point when the year becomes noisy and everyone needs perspective.']
    ]
  };
  const audiencePanel=document.getElementById('audiencePanel');
  function renderAudience(key){
    audiencePanel.innerHTML=audienceData[key].map(function(x){return '<div class="audience-point"><div class="check">✓</div><div><b>'+x[0]+'</b><span>'+x[1]+'</span></div></div>';}).join('');
  }
  renderAudience('student');
  document.querySelectorAll('.audience-tab').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.audience-tab').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');renderAudience(btn.dataset.audience);
    });
  });


  // Mobile hero speaker carousel
  const heroGrid=document.querySelector('.hero-voice-grid');
  const heroCards=heroGrid ? Array.from(heroGrid.querySelectorAll('.hero-voice-card')) : [];
  const heroPrev=document.getElementById('heroPrev');
  const heroNext=document.getElementById('heroNext');
  const heroCurrent=document.getElementById('heroSlideCurrent');
  let heroIndex=0;
  function updateHeroCarousel(index,shouldScroll){
    if(!heroGrid||!heroCards.length)return;
    heroIndex=Math.max(0,Math.min(heroCards.length-1,index));
    if(heroCurrent) heroCurrent.textContent=String(heroIndex+1);
    if(heroPrev) heroPrev.disabled=heroIndex===0;
    if(heroNext) heroNext.disabled=heroIndex===heroCards.length-1;
    if(shouldScroll){
      heroGrid.scrollTo({left:heroCards[heroIndex].offsetLeft-heroGrid.offsetLeft,behavior:'smooth'});
    }
  }
  if(heroGrid&&heroCards.length){
    if(heroPrev) heroPrev.addEventListener('click',function(){updateHeroCarousel(heroIndex-1,true);});
    if(heroNext) heroNext.addEventListener('click',function(){updateHeroCarousel(heroIndex+1,true);});
    let heroScrollTimer;
    heroGrid.addEventListener('scroll',function(){
      clearTimeout(heroScrollTimer);
      heroScrollTimer=setTimeout(function(){
        const x=heroGrid.scrollLeft;
        let closest=0,delta=Infinity;
        heroCards.forEach(function(card,i){const d=Math.abs(card.offsetLeft-heroGrid.offsetLeft-x);if(d<delta){delta=d;closest=i;}});
        updateHeroCarousel(closest,false);
      },80);
    },{passive:true});
    window.addEventListener('resize',function(){
      if(window.innerWidth<=720) updateHeroCarousel(heroIndex,true);
    });
    updateHeroCarousel(0,false);
  }

  const form=document.getElementById('leadForm');
  const formStatus=document.getElementById('formStatus');
  const submitBtn=document.getElementById('submitBtn');
  form.addEventListener('submit',async function(e){
    e.preventDefault();
    submitBtn.disabled=true;submitBtn.textContent='Sending…';
    formStatus.className='form-status';formStatus.textContent='';
    const payload={};
    new FormData(form).forEach(function(value,key){if(key!=='_honey'&&key!=='_captcha'&&key!=='_template'){payload[key]=value;}});
    payload._subject='FutureEdge VCE Success Series — Priority List';
    payload._template='table';
    payload._captcha='false';
    try{
      const response=await fetch('https://formsubmit.co/ajax/hello@myfutureedge.com',{
        method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify(payload)
      });
      if(!response.ok){throw new Error('Submission failed');}
      const result=await response.json();
      if(result.success===false){throw new Error(result.message||'Submission failed');}
      formStatus.className='form-status success';
      formStatus.textContent='You’re on the priority list. We’ll use this email to send the confirmed date, line-up and access details.';
      form.reset();
    }catch(err){
      formStatus.className='form-status error';
      formStatus.textContent='Automatic submission hit a problem. We’re switching to the direct submission route now…';
      setTimeout(function(){form.submit();},700);
      return;
    }finally{
      submitBtn.disabled=false;submitBtn.textContent='Get first access';
    }
  });
})();
