(()=>{
 const d=window.PORTFOLIO||{};
 const $=id=>document.getElementById(id);
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const set=(id,v)=>{const n=$(id);if(n)n.textContent=v||''};
 set('heroName',d.name);set('heroRole',d.role);set('heroBio',d.bio);set('aboutLead',d.aboutLead);set('aboutDetail',d.aboutDetail);set('brand',(d.name||'Portfolio').split(' ')[0]);set('footerName',`© ${new Date().getFullYear()} ${d.name||'Portfolio'}`);
 set('photoInitials',(d.name||'Your Name').split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase());document.title=`${d.name||'Portfolio'} | ${d.role||'Software Engineer'}`;
 if(d.photo){const pic=document.createElement('img');pic.src=d.photo;pic.alt=`Portrait of ${d.name}`;pic.onerror=()=>pic.remove();$('heroPhoto').prepend(pic)}
 for(const id of ['cvHero','cvAbout']){const a=$(id);if(d.cv){a.href=d.cv}else{a.removeAttribute('href');a.classList.add('disabled');a.title='CV coming soon'}}
 function link(id,url){const a=$(id);if(url){a.href=url}else{a.hidden=true}}
 for(const id of ['githubTop','githubBottom'])link(id,d.github);
 for(const id of ['linkedinTop','linkedinBottom'])link(id,d.linkedin);
 link('emailLink',d.email?'mailto:'+d.email:'');
 $('skillsGrid').innerHTML=(d.skills||[]).map(x=>`<article class="skill-card"><h3>${esc(x.title)}</h3><div class="skill-tags">${(x.items||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div></article>`).join('');
 const projects=d.projects||[];
 const getButtons=p=>[['appStore','App Store ↗'],['github','GitHub ↗'],['website','Website ↗']].filter(([key])=>p[key]).map(([key,label])=>`<a href="${esc(p[key])}" target="_blank" rel="noopener noreferrer">${label}</a>`).join('');
 $('projectsGrid').innerHTML=projects.map((p,i)=>{const buttons=getButtons(p);return `<article class="project-card"><button type="button" class="project-open" data-project="${i}" aria-label="View ${esc(p.name)} details and screenshots"><div class="project-image blue">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.name)} preview" loading="lazy" onerror="this.remove()" />`:''}<span class="project-monogram">${esc(p.initials||p.name.slice(0,2))}</span><span class="project-count">${String(i+1).padStart(2,'0')}</span></div><span class="project-view">View project & screenshots ↗</span></button><div class="project-content"><span class="project-category">${esc(p.category)}</span><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="skill-tags">${(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div>${buttons?`<div class="project-links">${buttons}</div>`:''}</div></article>`}).join('');
 const dialog=$('projectDialog');let currentImages=[],currentImage=0;
 function showFrame(){const im=$('galleryImage'),count=$('galleryCounter');if(!currentImages.length){im.removeAttribute('src');im.alt='No screenshot available yet';count.textContent='More visuals coming soon';$('galleryPrev').disabled=$('galleryNext').disabled=true;$('galleryDots').innerHTML='';return;}
 im.src=currentImages[currentImage];im.alt=`Project image ${currentImage+1} of ${currentImages.length}`;count.textContent=`${currentImage+1} / ${currentImages.length}`;$('galleryPrev').disabled=$('galleryNext').disabled=currentImages.length<2;
 $('galleryDots').innerHTML=currentImages.map((_,i)=>`<button type="button" class="gallery-dot ${i===currentImage?'active':''}" data-frame="${i}" aria-label="Show image ${i+1}" aria-current="${i===currentImage}"></button>`).join('');}
 $('projectsGrid').addEventListener('click',e=>{const btn=e.target.closest('[data-project]');if(!btn)return;const p=projects[Number(btn.dataset.project)];if(!p)return;
 set('dialogTitle',p.name);set('dialogCategory',p.category);set('dialogDescription',p.description);$('dialogTags').innerHTML=(p.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('');$('dialogLinks').innerHTML=getButtons(p);
 currentImages=(p.gallery&&p.gallery.length?p.gallery:p.image?[p.image]:[]);currentImage=0;showFrame();dialog.showModal();});
 $('dialogClose').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 function move(step){if(!currentImages.length)return;currentImage=(currentImage+step+currentImages.length)%currentImages.length;showFrame();}
 $('galleryPrev').addEventListener('click',()=>move(-1));$('galleryNext').addEventListener('click',()=>move(1));
 $('galleryDots').addEventListener('click',e=>{const b=e.target.closest('[data-frame]');if(b){currentImage=Number(b.dataset.frame);showFrame();}});
 document.addEventListener('keydown',e=>{if(!dialog.open)return;if(e.key==='ArrowRight')move(1);if(e.key==='ArrowLeft')move(-1)});
 $('activitiesList').innerHTML=(d.activities||[]).map(a=>`<article class="activity"><div class="activity-date">${esc(a.date)}</div><div><h3>${esc(a.title)}</h3><p class="activity-org">${esc(a.organization)}</p><p>${esc(a.description)}</p></div>${a.image?`<a class="activity-certificate" href="${esc(a.image)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(a.imageLabel||'View activity image')}"><img src="${esc(a.image)}" loading="lazy" alt="${esc(a.title)} certificate"/><span>${esc(a.imageLabel||'View image')} ↗</span></a>`:`<div class="activity-symbol" aria-hidden="true">↗</div>`}</article>`).join('');
 const form=$('contactForm');if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const name=$('senderName').value.trim(),email=$('senderEmail').value.trim(),message=$('senderMessage').value.trim();if(!name||!email||!message)return;const subject=encodeURIComponent('Portfolio contact from '+name),body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);window.location.href='mailto:'+encodeURIComponent(d.email||'m.kaanyilmam62@gmail.com')+'?subject='+subject+'&body='+body;});
 const menu=$('menuToggle'),nav=$('navigation');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰'}));
})();
